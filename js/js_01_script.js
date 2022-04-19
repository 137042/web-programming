window.onload = () => {
    var i;
    var acc = document.getElementsByClassName("title");
    for(i = 0; i < acc.length; i++){
        acc[i].addEventListener("click", panelControl);
    }

    var btnP = document.getElementsByClassName("plus");
    for(i = 0; i < btnP.length; i++){
        btnP[i].addEventListener("click", plus);
    }

    var btnM = document.getElementsByClassName("minus");
    for(i = 0; i < btnM.length; i++){
        btnM[i].addEventListener("click", minus);
    }

    var btnR = document.getElementsByClassName("remove");
    for(i = 0; i < btnR.length; i++){
        btnR[i].addEventListener("click", remove);
    }
}

function unfold(){
    let open = document.getElementsByClassName("open")[0];
    let menu = document.getElementsByClassName("menu")[0];
    open.addEventListener("click", function(){
        open.classList.add("hidden");
        menu.classList.remove("hidden");
    })
}

function fold(){
    let open = document.getElementsByClassName("open")[0];
    let menu = document.getElementsByClassName("menu")[0];
    menu.addEventListener("click", function(){
        open.classList.remove("hidden");
        menu.classList.add("hidden");
    })
}

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("hidden");

    }
    slides[slideIndex - 1].classList.remove("hidden");
}

function panelControl(event){
    var panel = event.target.nextElementSibling;
    this.classList.toggle("active");
    panel.classList.toggle("hidden");
}

function show(){
    const name = document.querySelector("#tents").value;
    var option = document.getElementsByClassName(name)[0];
    option.classList.remove("hidden");
}

function plus(){
    const option = this.parentNode;
    var count = this.nextElementSibling.nextElementSibling.nextElementSibling;
    var tag = this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    var total = document.getElementsByClassName("total-price")[0];
    
    var cnt = parseInt(count.innerHTML);
    var value = parseInt(tag.innerHTML);
    var totalValue = parseInt(total.innerHTML);

    if(option.classList[0] == "tent-A"){
        cnt = cnt + 1;
        value = value + 39800;
        totalValue = totalValue + 39800;
    }
    if(option.classList[0] == "tent-B"){
        cnt = cnt + 1;
        value = value + 10000;
        totalValue = totalValue + 10000;
    }
    if(option.classList[0] == "tent-C"){
        cnt = cnt + 1;
        value = value + 20000;
        totalValue = totalValue + 20000;
    }

    count.textContent = String(cnt);
    tag.textContent = String(value);
    total.textContent = String(totalValue);
}

function minus(){
    const option = this.parentNode;
    var count = this.nextElementSibling.nextElementSibling;
    var tag = this.nextElementSibling.nextElementSibling.nextElementSibling;
    var total = document.getElementsByClassName("total-price")[0];
    
    var cnt = parseInt(count.innerHTML);
    var value = parseInt(tag.innerHTML);
    var totalValue = parseInt(total.innerHTML);

    if(cnt != 0){
        if(option.classList[0] == "tent-A"){
            cnt = cnt - 1;
            value = value - 39800;
            totalValue = totalValue - 39800;
        }
        if(option.classList[0] == "tent-B"){
            cnt = cnt - 1;
            value = value - 10000;
            totalValue = totalValue - 10000;
        }
        if(option.classList[0] == "tent-C"){
            cnt = cnt - 1;
            value = value - 20000;
            totalValue = totalValue - 20000;
        }
        count.textContent = String(cnt);
        tag.textContent = String(value);
        total.textContent = String(totalValue);
    }
}

function remove(){
    var option = this.parentNode;
    option.classList.add("hidden");

    var count = this.nextElementSibling;
    var tag = this.nextElementSibling.nextElementSibling;
    var total = document.getElementsByClassName("total-price")[0];
    var cnt = parseInt(count.innerHTML);
    var value = parseInt(tag.innerHTML);
    var totalValue = parseInt(total.innerHTML);

    totalValue = totalValue - value;
    value = cnt == 0

    count.textContent = String(cnt);
    tag.textContent = String(value);
    total.textContent = String(totalValue);
}

function buy(){
    var cnts = document.getElementsByClassName("count");
    var tags = document.getElementsByClassName("tag");
    var price = document.getElementsByClassName("total-price")[0];
    
    for(var i = 0; i < cnts.length; i++){
        cnts[i].innerHTML.replace("0");
        tags[i].innerHTML.replace("0");
    }
    price.textContent = "0";

    var option = document.getElementsByClassName("tent-A")[0];
    option.classList.add("hidden");
    option = document.getElementsByClassName("tent-B")[0];
    option.classList.add("hidden");
    option = document.getElementsByClassName("tent-C")[0];
    option.classList.add("hidden");

    var selection = document.getElementById("tents")
    selection.options[0].selected = "selected";
}