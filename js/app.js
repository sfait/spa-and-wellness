const init = () => {

    // nested menu
    const nestedMenu = document.querySelector(".nested-menu");
    const menuTriggerEl = document.querySelector(".menu-trigger-el");

    menuTriggerEl.addEventListener("mouseover", function() {
        nestedMenu.style.display = "block";
    });

    nestedMenu.addEventListener("mouseout", function() {
        this.style.display = "none";
    });

    // read more less
    const readMoreLessBtn = document.querySelectorAll(".read-more-less-btn");

    function showHideText() {
        const siblingText = this.previousElementSibling;
        
       if (siblingText.style.display === "none" || siblingText.style.display === "") {
            siblingText.style.display = "block";
            this.textContent = "Czytaj mniej";
        } else {
            siblingText.style.display = "none";
            this.textContent = "Czytaj więcej";
        } 
    }

    for (let i = 0; i < readMoreLessBtn.length; i++) {
        readMoreLessBtn[i].addEventListener("click", showHideText);
    }

}

document.addEventListener("DOMContentLoaded", init);