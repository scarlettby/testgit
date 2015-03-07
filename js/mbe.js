$(document).ready(function(){
    var checkboxList = $('.styledCheckbox');
    var checkboxInput = checkboxList.find('.checkbox input');
    var bookingLogin = $('#bookingLogin');

    checkboxList.each(function(){
        changeState( $(this).find('.checkbox input'), $(this).find('.checkbox'));
    });

    checkboxInput.bind('change click', function(){
        changeState($(this), $(this).closest('.checkbox'));
    });

    function changeState( input, inputNode ){
        if (input.is(':checked')) {
            inputNode.addClass('checkbox_checked');
//            bookingLogin.show();
        } else {
            inputNode.removeClass('checkbox_checked');
//            bookingLogin.hide();
        }
    }

});