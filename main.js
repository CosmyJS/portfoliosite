console.log('Check');

$(document).ready(function () {
    $('.btn').click(function(event) {
        
        console.log('Clicked')
    
        var user = $('.user').val();
        var email = $('.email').val();
        var message = $('.message').val();
        var statusElm = $('.status');
        statusElm.empty();

        if(email.length >= 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email Valid</div>');
        } else {
            event.preventDefault();
            statusElm.append('<div>Email Not Valid</div>');
        }
        if(user.length >= 1) {
            statusElm.append('<div>User Valid</div>');
        } else {
            event.preventDefault();
            statusElm.append('<div>User Not Valid</div>');
        }
        if(message.length >= 10) {
            statusElm.append('<div>Message Valid</div>');
        } else {
            event.preventDefault();
            statusElm.append('<div>Message Not Valid</div>');
        }
        
    });
});