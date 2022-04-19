window.onload = () => {
    var i;
    var acc = document.getElementsByClassName("title");
    for(i = 0; i < acc.length; i++){
        acc[i].addEventListener("click", panelControl);
    }

    var btnR = document.getElementsByClassName("remove");
    for(i = 0; i < btnR.length; i++){
        btnR[i].addEventListener("click", remove);
    }

    var btnP = document.getElementsByClassName("plus");
    for(i = 0; i < btnP.length; i++){
        btnP[i].addEventListener("click", plus);
    }

    var btnM = document.getElementsByClassName("minus");
    for(i = 0; i < btnM.length; i++){
        btnM[i].addEventListener("click", minus);
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

var totalValue = 0;

function plus(){
    const option = this.parentNode;
    const count = this.nextElementSibling.nextElementSibling.nextElementSibling;
    const tag = this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    var cnt = parseInt(count.innerHTML);
    var value = parseInt(tag.innerHTML);

    if(option.value == "tent-A"){
        cnt = cnt + 1;
        value = value + 39800;
        totalValue = totalValue + 39800;
    }
    if(option.value == "tent-B"){
        cnt = cnt + 1;
        value = value + 10000;
        totalValue = totalValue + 10000;
    }
    if(option.value == "tent-C"){
        cnt = cnt + 1;
        value = value + 20000;
        totalValue = totalValue + 20000;
    }
}

function minus(){
    const option = this.parentNode;
    const count = this.nextElementSibling.nextElementSibling.nextElementSibling;
    const tag = this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    var cnt = parseInt(count.innerHTML);
    var value = parseInt(tag.innerHTML);

    if(option.value == "tent-A"){
        cnt = cnt - 1;
        value = value - 39800;
        totalValue = totalValue - 39800;
    }
    if(option.value == "tent-B"){
        cnt = cnt - 1;
        value = value - 10000;
        totalValue = totalValue - 10000;
    }
    if(option.value == "tent-C"){
        cnt = cnt - 1;
        value = value - 20000;
        totalValue = totalValue - 20000;
    }
}

function remove(){
    var option = this.parentNode;
    const count = this.nextElementSibling.nextElementSibling.nextElementSibling;
    const tag = this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    var cnt = parseInt(count.innerHTML);
    var value = parseInt(tag.innerHTML);

    }