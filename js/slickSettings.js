var width = document.getElementsByTagName('body')[0].clientWidth;

if (width < 415) {
    $(document).ready(function(){
        $('.slider__content').slick({
            prevArrow: '<button type="button" class="slick-prev" style="display: flex"><img src="./image/organism/Vector-21.svg" style="transform: rotate(180deg)"></button>',
            nextArrow: '<button type="button" class="slick-next" style="display: flex"><img src="./image/organism/Vector-21.svg"></button>'
        });

    });
}
