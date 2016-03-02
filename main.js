$(document).ready(function () {

    function play() {
        $('.input').val('');
        var number = Math.floor(Math.random() * (25 - 1) + 1);
        $('<audio controls autoplay><source id="source" src="audio/' + number + '.mp3" type="audio/mp3"><p>Twoja przeglądarka nie wspiera znacznika audio</p></audio>').appendTo('.main');
    }

    $('#wyszukaj').on('click', function () {
        play();
    });
    $('.input').keypress(function (e) {
        if (e.which == 13) {
            play();
        }
    });
    $('#lucky').on('click', function () {
        var number = Math.floor(Math.random() * (10 - 1) + 1);
        switch (number) {
        case 1:
            window.location.href = "https://www.youtube.com/watch?v=iPs8MNKc6UA";
            break;
        case 2:
            window.location.href = "https://www.youtube.com/watch?v=LZnGmY3Ob1Y";
            break;
        case 3:
            window.location.href = "https://www.youtube.com/watch?v=8NZv7aBEep8";
            break;
        case 4:
            window.location.href = "https://www.youtube.com/watch?v=oRW_59EK4o4";
            break;
        case 5:
            window.location.href = "https://www.youtube.com/watch?v=wfbFv0vs-A4";
            break;
        case 6:
            window.location.href = "https://www.youtube.com/watch?v=TGtIAdLDqMQ";
            break;
        case 7:
            window.location.href = "https://www.youtube.com/watch?v=dwB8f80kxrI";
            break;
        case 8:
            window.location.href = "https://www.youtube.com/watch?v=pVgYswQxVUI";
            break;
        case 9:
            window.location.href = "https://www.youtube.com/watch?v=4PI8Zlx_oA0";
            break;
        }
    });
});