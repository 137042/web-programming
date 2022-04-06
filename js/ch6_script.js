/*
window.onload = () => {
    alert("dom is created");
}
function handler(){
    let d = document.getElementsByTagName("div")[0];
    // d.onclick = () => {alert('clicked!')};
    d. addEventListener("click", function(){
        alert("clicked");
    })
}

window.onload = () => {
    let url = document.getElementsByTagName('a')[0];
    url.addEventListener("click", (event) => {
        event.preventDefault();
    });
}

window.onload = () => {
    let divs = document.querySelectorAll('div');
    //divs[0] = <div class="one">
    //divs[1] = <div class="two">
    //divs[2] = <div class="three">
    divs.forEach((d) => d.addEventListener(
        "click", logEvent
    ));
}
function logEvent(event){
    event.stopPropagation();
    console.log(event.currentTarget.className);
}
*/

window.onload = () => {
    // let lis = document.querySelectorAll('#sampleList li');
    // lis.forEach((li) => {
    //     li.addEventListener("click", remove)
    // });

    let ul = document.getElementById("sampleList");
    ul.addEventListener("click", remove);

    let btnAdd = document.getElementById("addBtn");
    btnAdd.addEventListener("click", addLi);
}

function remove(event){
    let selectedLi = document.getElementById(event.target.id);
    selectedLi.classList.toggle("remove");
}

function addLi(){
    let ul = document.querySelector("#sampleList");
    var cnt = ul.children.length + 1;

    var li = document.createElement('li');
    li.setAttribute('id', "list" + cnt);
    li.appendChild(document.createTextNode("추가 리스트 " + cnt));
    // li.addEventListener("click", remove)

    ul.appendChild(li);
}