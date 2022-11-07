$(document).ready(function () {

    var setFilter = function () {

        $('#imgManipulated>img').css('filter',
            'opacity(' + $('#sliderOpacity').attr('value') + '%) ' +
            'saturate(' + $('#sliderSaturation').attr('value') + ') ' +
            'brightness(' + $('#sliderBrightness').attr('value') + '%) ' +
            'hue-rotate(' + $('#sliderHue').attr('value') + 'deg) ' +
            'grayscale(' + $('#sliderGray').attr('value') + '%) ' +
            'blur(' + $('#sliderBlur').attr('value') + 'px)');

        $('#imgManipulated>img').css('-webkit-filter',
            'opacity(' + $('#sliderOpacity').attr('value') + '%) ' +
            'saturate(' + $('#sliderSaturation').attr('value') + ') ' +
            'brightness(' + $('#sliderBrightness').attr('value') + '%) ' +
            'hue-rotate(' + $('#sliderHue').attr('value') + 'deg) ' +
            'grayscale(' + $('#sliderGray').attr('value') + '%) ' +
            'blur(' + $('#sliderBlur').attr('value') + 'px)');

    }

    $('#thumbBox').on('click', function (event) {

        if (event.target && event.target.matches('img')) {

            var thumbImg = event.target.cloneNode();

            thumbImg.src = thumbImg.src.replace('small', 'medium');

            $('#imgManipulated>img').replaceWith(thumbImg);

            $('figcaption').replaceWith($('<figcaption> <em>' + thumbImg.alt + '</em></br>' + thumbImg.title + '</figcaption>'));

            setFilter();

        }

    });

    $('#sliderOpacity').on('input', function (event) {
        $('#sliderOpacity').attr('value', event.target.value);

        setFilter();

    });

    $('#sliderSaturation').on('input', function (event) {
        $('#sliderSaturation').attr('value', event.target.value);

        setFilter();

    });

    $('#sliderBrightness').on('input', function (event) {
        $('#sliderBrightness').attr('value', event.target.value);

        setFilter();
    });

    $('#sliderHue').on('input', function (event) {
        $('#sliderHue').attr('value', event.target.value);

        setFilter();

    });

    $('#sliderGray').on('input', function (event) {
        $('#sliderGray').attr('value', event.target.value);

        setFilter();
    });

    $('#sliderBlur').on('input', function (event) {
        $('#sliderBlur').attr('value', event.target.value);

        setFilter();
    });

    $('#resetFilters').on('click', function () {


        $('#sliderOpacity').attr('value', 100);
        $('#sliderSaturation').attr('value', 1);
        $('#sliderBrightness').attr('value', 100);
        $('#sliderHue').attr('value', 0);
        $('#sliderGray').attr('value', 0);
        $('#sliderBlur').attr('value', 0);

        setFilter();

    });

});
