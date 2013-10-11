$(function() {
    var w = (window.innerWidth == null) ? (document.documentElement.offsetWidth) : window.innerWidth,
        h = (window.innerHeight == null) ? (document.documentElement.offsetHeight) : window.innerHeight;
    $('#container').width(6 * w);
    $('.ccontainer').width(w);
    $('.view,#ccontainer,#container').height($('#home').height());
    $('#aboutcontain').css('left', w + 'px');
    $('#eventscontain').css('left', 2 * w + 'px');
    $('#registercontain').css('left', 3 * w + 'px');
    $('#sponsorcontain').css('left', 4 * w + 'px');
    $('#coordinatorscontain').css('left', 5 * w + 'px');
    $('#reachuscontain').css('left', 6 * w + 'px');
    $('#regcoming').width($('.view').width()).height($('.view').height());
    // $('.view').css('background-size',$('.view').width()+'px '+$('.view').height()+'px');
    $('#menuul li').click(function(e) {
        switch (e.currentTarget.innerHTML) {
            case "Home":
                $(".ccontainer").transition({
                    marginLeft: "0%"
                }, '700', 'easeOutBack');
                break;
            case "About":
                $(".ccontainer").transition({
                    marginLeft: "-100%"
                }, '700', 'easeOutBack');
                break;
            case "Events":
                $(".ccontainer").transition({
                    marginLeft: "-200%"
                }, '700', 'easeOutBack');
                break;
            case "Register":
                $(".ccontainer").transition({
                    marginLeft: "-300%"
                }, '700', 'easeOutBack');
                break;
            case "Sponsor":
                $(".ccontainer").transition({
                    marginLeft: "-400%"
                }, '700', 'easeOutBack');
                break;
            case "Coordinators":
                $(".ccontainer").transition({
                    marginLeft: "-500%"
                }, '700', 'easeOutBack');
                break;
            case "Reach us":
                $(".ccontainer").transition({
                    marginLeft: "-600%"
                }, '700', 'easeOutBack');
                break;
        }
    });

    $(document).keyup(function(e) {
        if ($('.event div.opened')['length'] && e.keyCode == 27) {
            $('.eventcont').css('font-size', '10px');
            $('.event div.opened').transition({
                    width: '120px',
                    height: '120px',
                    marginLeft: '0px',
                    marginTop: '0px'
                }, '700', 'easeInBack',
                function() {
                    $('.event div.opened').removeClass('opened');
                });
        }

    });
    var eclick = false;

    $('.event div.eventdialog:not(.opened)').click(function(e) {
        if ($(e.currentTarget).hasClass('opened'))
            return;
        if (!eclick) {
            eclick = true;
            var offset = $(e.currentTarget).offset();
            var off = $('#events').offset();
            var mt = off.top - offset.top;
            var ml = off.left - offset.left;
            $(e.currentTarget).transition({
                    width: w * 0.92 + 'px',
                    height: h * 0.65 + 'px',
                    marginLeft: ml + 'px',
                    marginTop: mt + 'px'
                }, '700', 'easeOutBack',
                function() {
                    $(e.currentTarget).addClass('opened');
                    $('.eventcont').css('font-size', '20px');
                    eclick = false;
                });
        }
    });

    $('#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8').hover(function(e) {
        $('#' + e.currentTarget.id + ' .ccon').show().animate({
            height: '100px'
        }, 'slow', function() {
            $('#' + e.currentTarget.id + ' .ccon div').fadeIn(200);
        });
    }, function(e) {
        $('#' + e.currentTarget.id + ' .ccon div').fadeOut(200);
        $('#' + e.currentTarget.id + ' .ccon').animate({
            height: '0px'
        }, 'slow', function() {
            $('#' + e.currentTarget.id + ' .ccon div').hide();
        });
    }, 250);
    if ($('#eventHolder').outerHeight(true) < $('#events').height()) {
        $('#eventHolder').css('margin-top', -$('#eventHolder').height() / 2 + 'px');
        // $('#sponsorcontainer').css('margin-top', -$('#sponsorcontainer').height() / 2 + 'px');

    } else {
        $('#eventHolder').css('top', '0px');
        $('#sponsorcontainer').css('top', '0px');
        $('#eventHolder').slimScroll({
            height: $('#events').height() + 'px'
        });
        $('#sponsorcontainer').slimScroll({
            height: $('#events').height() + 'px'
        });
    }

    $('#registerform').click(function(e) {
        var e=0;
        if ($('#rfname').val() == '' || $('#rfinstitute').val() == '' || $('#rfphoneno').val() == '' || $('#rfemail').val() == '') {
            alert('Please filled all neccessary filled enclosed in red box');
            return false;
            e=1;
        }
        if (!$('#regform input[type="checkbox"]').is(':checked')) {
            alert('Select at least one event');
            return false;
            e=1;
        }
        if($('label.rerror').is(':visible'))
        {
            alert('Fill valid details');
            return false;
            e=1;
        }
        if ($('#isieee').is(':checked')) {
            if ($('#rfieee').val() == '') {
                $('#rfieee').next('label.rerror').show();
                alert('Enter a valid ieee no');
                return false;
                e=1;
            }
        }

        var data = $('#regform').serialize();
        console.log(data);
        if(e==0)
        $.post('reg.php', data, function(e) {
            console.log(e);
            if (e == 'done') {
                alert('You are successfully Registered\n\nComplete your registration by paying the registration fees to any one of the following\n\nAditi Bhatnagar   K-104   9624040633\nAman Agarwal    F-214    9974120011');
                $('#regform input[type="text"]').val('');
                $('#regform input[type="tel"]').val('');
                $('#regform input[type="email"]').val('');
                $('#regform input[type="checkbox"]').removeAttr('checked');
                $('#regform input[type="radio"]').removeAttr('checked')
                $('.rerror').hide();
            }
        })
    });

    $('#rfname').blur(function(e) {
        if ($(this).val() == '') {
            $(this).next('label.rerror').show();
        } else {
            $(this).next('label.rerror').hide();
        }
    });
    $('#rfphoneno').blur(function(e) {
        var testPattern = /^[7-9]{1}[0-9]{9}$/;
        if (!testPattern.test($(this).val())) {
            $(this).next('label.rerror').show();
        } else {
            $(this).next('label.rerror').hide();
        }
    });
    $('#rfieee').blur(function(e) {
        var rfieee = /^[0-9]{8}$/;
        if (!rfieee.test($(this).val())) {
            $(this).next('label.rerror').show();
        } else {
            $(this).next('label.rerror').hide();
        }
    });
    $('#rfemail').blur(function(e) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test($(this).val())) {
            $(this).next('label.rerror').show();
        } else {
            $(this).next('label.rerror').hide();
        }
    });
    $('#rfinstitute').blur(function(e) {
        if ($('#isda').is(':checked')) {
            var id = /^[2]{1}[0]{1}[0,1]{1}[7,8,9,0,1,2,3]{1}[0-9]{5}$/;
            if (!id.test($(this).val())) {
                $(this).next('label.rerror').show();
            } else {
                $(this).next('label.rerror').hide();
            }

        } else {
            if ($(this).val() == '') {
                $(this).next('label.rerror').show();
            } else {
                $(this).next('label.rerror').hide();
            }
        }
    });
    $('#isieee,#nonieee').change(function(e) {
        if ($('#isieee').is(':checked')) {
            $('#ieeenocontainer').slideDown();
        } else {
            $('#rfieee').val('');
            $('#ieeenocontainer').slideUp();
            $('#ieeenocontainer .rerror').hide();
        }
    });
    $('#isda,#nonda').change(function(e) {
        $('#rfinstitute').val('');
        if ($('#isda').is(':checked')) {
            $('#rfinstitute').attr('placeholder', 'DAIICT ID');
            $('#iserror').html('Please enter valid daiict id');
        } else {
            $('#rfinstitute').attr('placeholder', 'College/Institute name');
            $('#iserror').html('Please enter valid institute name');

        }
    });


    $('#aboutholder').slimScroll({
        height: $('#about').height() + 'px'
    });

    $('#home p').slimScroll({
        height: $('#home').height() + 'px'
    });
    $('#regcontainer').slimScroll({
        height: $('#regcontainer').height() + 'px'
    });
    $('#mapcscroll').width($('#mapc').width());
    $('#mapc').slimScroll({
        height: $('#map').height() + 'px'
    });
});
