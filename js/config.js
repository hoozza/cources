/* change style---------------------------------------------------------------------- */
$('#white-style').on('click', function() {
    $('#black_style').remove();
});

$('#black-style').on('click', function() {
    $('head').append('<link id="black_style" rel="stylesheet" href="css/pagestyle.css" type="text/css">'); 
});
