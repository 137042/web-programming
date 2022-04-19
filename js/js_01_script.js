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

$(".title").on("click", function() {

function slideDown(){
    $(".info").addClass("hidden");
    $(this).next().removeClass("hidden");
}

function slideUp(){
    $(this).next().addClass("hidden");
}

$(this).next().hasClass("hidden") ? slideDown() : slideUp();
});