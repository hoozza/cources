/* dropdown menu----------------------------------------------- */
$('#dropdown_button').on('click', function() {
    if (!$('.my-dropdown-menu').is(':visible')) {
        $('.my-dropdown-menu').css('display', 'block');
        $('.fa-angle-down').css('transform', 'rotate(180deg)');
    } else {
        $('.my-dropdown-menu').css('display', 'none');
        $('.fa-angle-down').css('transform', 'rotate(0deg)');
    }
});

/* masks for inputs-------------------------------------------- */
$(function(){
    $.mask.definitions['m'] = "[0-1]";
    $("#sender_card").mask("9999 - 9999 - 9999 - 9999");
    $("#recipient_card").mask("9999 - 9999 - 9999 - 9999");
    $("#MM-input").mask("m9");
    $("#YY-input").mask("99");
    $("#CVV-input").mask("999");
});

/* brand------------------------------------------------------- */
function brandingCard() {
	switch($("#sender_card").val()[0]){

	case '4':
				$("#visa").css('visibility', 'visible');
				$("#maestro").css('visibility', 'hidden');
				$("#mastercard").css('visibility', 'hidden');
				break;
	case '5':
				$("#visa").css('visibility', 'hidden');
				$("#maestro").css('visibility', 'visible');
				$("#mastercard").css('visibility', 'hidden');
				break;
	case '6': 	
				$("#visa").css('visibility', 'hidden');
				$("#maestro").css('visibility', 'hidden');
				$("#mastercard").css('visibility', 'visible');
				break;
	default:	
				$("#visa").css('visibility', 'hidden');
				$("#maestro").css('visibility', 'hidden');
				$("#mastercard").css('visibility', 'hidden');
	}
}
       
/* required email---------------------------------------------- */
$(function() {
    $('#check_email').attr('checked', 'checked');
});

$('#check_email').on('click', function() {
    if ($('#check_email').attr('checked') == 'checked') {
        $('#email').removeAttr('required');
        $('#check_email').removeAttr('checked');
        $('#email').val('').attr('disabled', 'disabled');
    } else {
        $("#email").attr('required', 'required');
        $('#check_email').attr('checked', 'checked');
        $('#email').val('').removeAttr('disabled', 'disabled');
    }
});

/* add message------------------------------------------------- */
$('#add_message').on('click', function() {
    $('#message').toggleClass('show');
});