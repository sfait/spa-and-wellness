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
        // znalezienie "poprzedniego" rodzeństwa
        const siblingText = this.previousElementSibling;

       if (siblingText.style.display === "none" || siblingText.style.display === "") {
            siblingText.style.display = "block";
            this.textContent = "Czytaj mniej";
        } else {
            siblingText.style.display = "none";
            this.textContent = "Czytaj więcej";
        } 
    }

    // dodanie akcji do przycisku
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
    });

    // slider
    const slider = document.querySelector(".slider");
    const sliderStage = document.querySelector(".slider-stage");
    const slides = document.querySelectorAll(".slider li");
    const prev = document.querySelector(".previous-arrow");
    const next = document.querySelector(".next-arrow");
    
    // pobranie szerokości pierwszego elementu
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;
    // pobranie długości tablicy
    let slidesNumber = slides.length - 1;

    function goToSlide(index) {

        if (index < 0) {
            index = slidesNumber;
        } else if (index > slidesNumber) {
            index = 0;
        }

        // "-" pozwala na ustawienie ruchu w lewą stronę 
        slider.style.left = index * (-slideWidth) + "px";
        currentIndex = index;
    }

    function slideToNext() {
        goToSlide(currentIndex + 1); 
    }

    function slideToPrev() {
        goToSlide(currentIndex - 1); 
    }

    prev.addEventListener("click", slideToPrev);
    next.addEventListener("click", slideToNext);
    // automatyczne przechodzenie obrazów
    setInterval(slideToNext, 10000);
}

document.addEventListener("DOMContentLoaded", init);