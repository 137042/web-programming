function unfold(){
    let open = document.getElementsByClassName("open")[0];
    let menu = document.getElementsByClassName("menu")[0];
    open.addEventListener("click", function(){
        open.classList.add("hidden");
        menu.classList.remove("hidden");
    })
}

function fold(){

}

