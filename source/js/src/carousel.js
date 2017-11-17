(function(){
    function flipClass(selector, selectorActive, selectorPrevious) {
        let selectors = document.querySelectorAll(selector);
        if (selectorActive[0] == '.') {
            selectorActive = selectorActive.slice(1);
        }
        if (selectorPrevious && selectorPrevious[0] == '.') {
            selectorPrevious = selectorPrevious.slice(1);
        }
        let numberOld = 0;
        for (let i = 0; i < selectors.length; i++) {
            if (selectorPrevious && selectors[i].classList.contains(selectorPrevious)) {
                selectors[i].classList.remove(selectorPrevious);
            }
            if (selectors[i].classList.contains(selectorActive)) {
                numberOld = i;
            }
        }

        let numberNew = numberOld + 1;
        if (numberNew >= selectors.length) {
            numberNew = 0;
        }

        selectors[numberOld].classList.toggle(selectorActive);
        if (selectorPrevious) selectors[numberOld].classList.add(selectorPrevious);
        selectors[numberNew].classList.toggle(selectorActive);
    }

    function flipSlide() {
        flipClass('.slide', '.slide_active', '.slide_previous');
        flipClass('.carousel-indicators__indicator', '.carousel-indicators__indicator_active');

    }

    function indicatorClickHandler(e) {
        while (!e.target.classList.contains('carousel-indicators__indicator_active')) {
            flipSlide();
        }
    }

    setInterval(flipSlide, 6000);
    let indicators = document.querySelectorAll('.carousel-indicators__indicator');
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener('click', indicatorClickHandler);
    }
})();