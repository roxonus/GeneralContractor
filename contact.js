$(document).ready(function() {
    $('.send').click(function() {
        $('.contactform').attr('action',
                       'mailto:drmmasonryllc@gmail.com' +
                       $('.quote').val());
        $('.contactform').submit();
    });
});