$(document).ready(function () {
    console.log("loaded park scripts file");
    var started = false;
    $('#park-intro').click(function () {
        if (!started) {
            started = true;
            $('#park-intro').fadeOut(1000, function () {
                $('#park-intro').html("<h1>Lets explore the world</h1>");
            });
            $('#park-intro').delay(1000).fadeIn(1000);
            $('#park-intro').delay(1000).fadeOut(1000, function () {
                $('#park-intro').html("<h1>Click a park to continue</h1>");
            });
            $('#park-intro').delay(1000).fadeIn(1000, function () {
                $("<h2 id=\"acadia\">Acadia</h2>").appendTo('#park-intro').hide().fadeIn(1000);
                $("<h2 id=\"americansamoa\">American Samoa</h2>").appendTo('#park-intro').hide().fadeIn(1000);
                $("<h2 id=\"arches\">Arches</h2>").appendTo('#park-intro').hide().fadeIn(1000);
                $("<h2 id=\"badlands\">Badlands</h2>").appendTo('#park-intro').hide().fadeIn(1000);
                //$('#park-intro').hide().append("<h2 id=\"americansamoa\">American Samoa</h2>").fadeIn(1000);
                //$('#park-intro').hide().append("<h2 id=\"arches\">Arches</h2>").fadeIn(1000);
                //$('#park-intro').hide().append("<h2 id=\"badlands\">Badlands</h2>").fadeIn(1000);
            });
        }
    });
    $(document.body).on('click', '#acadia', function (event) {
        var clickedPark = event.target.id;
        console.log("clicked " + clickedPark);
        $('#park-intro').fadeOut(1000, function () {
            $('#park-intro').html("<h1>Welcome to " + event.target.id + "</h1>");
        });
        $('#park-intro').delay(1000).fadeIn(1000);
        $('#parkback').animate({
            opacity: 0
        }, 'slow', function () {
            $(this).css({
                'background-image': 'url(img/' + clickedPark + '.jpg)'
                , 'background-size': 'cover'
                , 'background-attachment': 'fixed'
                , 'height': '100vh'
            }).animate({
                opacity: 1
            });
        });
    });
    $(document.body).on('click', '#americansamoa', function (event) {
        var clickedPark = event.target.id;
        console.log("clicked " + clickedPark);
        $('#park-intro').fadeOut(1000, function () {
            $('#park-intro').html("<h1>Welcome to " + event.target.id + "</h1>");
        });
        $('#park-intro').delay(1000).fadeIn(1000);
        $('#parkback').animate({
            opacity: 0
        }, 'slow', function () {
            $(this).css({
                'background-image': 'url(img/' + clickedPark + '.jpg)'
                , 'background-size': 'cover'
                , 'background-attachment': 'fixed'
                , 'height': '100vh'
            }).animate({
                opacity: 1
            });
        });
    });
    $(document.body).on('click', '#arches', function (event) {
        var clickedPark = event.target.id;
        console.log("clicked " + clickedPark);
        $('#park-intro').fadeOut(1000, function () {
            $('#park-intro').html("<h1>Welcome to " + event.target.id + "</h1>");
        });
        $('#park-intro').delay(1000).fadeIn(1000);
        $('#parkback').animate({
            opacity: 0
        }, 'slow', function () {
            $(this).css({
                'background-image': 'url(img/' + clickedPark + '.jpg)'
                , 'background-size': 'cover'
                , 'background-attachment': 'fixed'
                , 'height': '100vh'
            }).animate({
                opacity: 1
            });
        });
    });
    $(document.body).on('click', '#badlands', function (event) {
        var clickedPark = event.target.id;
        console.log("clicked " + clickedPark);
        $('#park-intro').fadeOut(1000, function () {
            $('#park-intro').html("<h1>Welcome to " + event.target.id + "</h1>");
        });
        $('#park-intro').delay(1000).fadeIn(1000);
        $('#parkback').animate({
            opacity: 0
        }, 'slow', function () {
            $(this).css({
                'background-image': 'url(img/' + clickedPark + '.jpg)'
                , 'background-size': 'cover'
                , 'background-attachment': 'fixed'
                , 'height': '100vh'
            }).animate({
                opacity: 1
            });
        });
    });
});