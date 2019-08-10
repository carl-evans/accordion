(function vanillaJsAccordion() {
    var accordionButtons = document.querySelectorAll('.accordion-controls__button');

    for (i = 0; i < accordionButtons.length; i++) {

        accordionButtons[i].addEventListener('click', function (e) {
            var activeContent = document.querySelectorAll('.accordion-controls__content--active');
            var contentToDisplay = this.nextElementSibling;
            var clickedButton = e.currentTarget;

            if (clickedButton.getAttribute('aria-expanded') === 'false') {
                clickedButton.setAttribute('aria-expanded', 'true');
                clickedButton.setAttribute('title', 'Hide content');
            } else {
                clickedButton.setAttribute('aria-expanded', 'false');
                clickedButton.setAttribute('title', 'Show content');
            }

            if (contentToDisplay.classList.contains('accordion-controls__content--active')) {
                contentToDisplay.classList.remove('accordion-controls__content--active');
                contentToDisplay.setAttribute('aria-hidden', 'true');
                return;
            }

            for (var i = 0; i < activeContent.length; i++) {
                activeContent[i].classList.remove('accordion-controls__content--active');
                activeContent[i].setAttribute('aria-hidden', 'true');
                activeContent[i].previousElementSibling.setAttribute('aria-expanded', 'false');
                activeContent[i].previousElementSibling.setAttribute('title', 'Show content');
            }

            contentToDisplay.classList.toggle('accordion-controls__content--active');
            contentToDisplay.setAttribute('aria-hidden', 'false');

        });
    }
})();