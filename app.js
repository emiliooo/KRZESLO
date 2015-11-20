/**
 * Created by Zielony on 2015-11-19.
 */

    $(document).ready(function () {

    function checkingValidForm() {
        var imie = $('#form').find("input#imie");
        var email = $('#form').find("input#email");
        var text = $('#form').find("input#text");
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        var imieSpan = $('#form').find("span.formName");
        var emailSpan = $('#form').find("span.formEmail");
        var textSpan = $('#form').find("span.formText");


            //sprawdzanie imienia
            if ((imie.val().length >= 3) && (imie.val().length <= 10)) {
                console.log('ok')
            }
            else {
                console.log("b³ad");
                imieSpan.show();
            }

            //sprawdzanie maila
            if (re.test(email.val())) {
                console.log('ok')
            }
            else {
                console.log("b³ad");
                emailSpan.show();
            }

            //sprawdzanie tekstu
            if ((text.val().length > 0) && (text.val().length <= 100)) {
                console.log('ok')
            }
            else {
                console.log("b³ad");
                textSpan.show();
            }
    }

        $(".buttonDown").click(function () {
            checkingValidForm();
        });


        function showHideBox() {
            $('.pic2, .pic3').mouseover( function() {
                console.log(this);
                $(this).find('.white').fadeOut(2000,'linear');
            })
            $('.pic2, .pic3').mouseleave( function() {
                $(this).find('.white').fadeIn(2000,'linear');
            });
        }
        showHideBox();



    });




