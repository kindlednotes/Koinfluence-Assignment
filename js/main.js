const responsive = {
    0: {
        items: 1
    },

    320: {
        items: 2
    },

    560: {
        items: 3
    },

    960: {
        items: 4
    }

}

$(document).ready(function () {
    $('#inputbox').hide();
    //owl-carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        responsive: responsive
    });

})