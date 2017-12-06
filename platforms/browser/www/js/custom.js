var confs = [];
var sess_data = [];
var user = [];
var jsn_confs = [];
(function () {
    confs = JSON.parse(jsn_confs);
    // Getting value
    sess_data = JSON.parse(localStorage.getItem('sess_data'));
    user = JSON.parse(localStorage.getItem('user'));

    // Load left menu
    if ($('.navbar').find('#lmenu')) {
        $('#lmenu').load('menu.html');
    }

}); //end ready

/*
$('input').on('click', function () {
                    $('html, body').animate({
                        scrollTop: $("input").offset().top
                    }, 2000);
                });

$('textarea').on('click', function () {
                    $('html, body').animate({
                        scrollTop: $("textarea").offset().top
                    }, 2000);
                });
                */