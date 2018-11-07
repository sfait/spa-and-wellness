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
        // find previous sibling
        const siblingText = this.previousElementSibling;

       if (siblingText.style.display === "none" || siblingText.style.display === "") {
            siblingText.style.display = "block";
            this.textContent = "Czytaj mniej";
        } else {
            siblingText.style.display = "none";
            this.textContent = "Czytaj więcej";
        } 
    }

    // add action for buttons
    for (let i = 0; i < readMoreLessBtn.length; i++) {
        readMoreLessBtn[i].addEventListener("click", showHideText);
    }

    // newsletter
    const input = document.querySelector(".newsletter-form input");
    const newsletterBtn = document.querySelector(".newsletter-form button");
    const formInfo = document.querySelector(".form-info");
    
    newsletterBtn.addEventListener("click", function(event){
        event.preventDefault();
        formInfo.style.display = "block";

        if (input.value !== "") {
            formInfo.style.color = "#fff";
            formInfo.textContent = "Zapisano do newslettera";
        } else {
            formInfo.style.color = "#444";
            formInfo.textContent = "Pole nie może być puste, podaj adres e-mail";
        }
    })

}

document.addEventListener("DOMContentLoaded", init);