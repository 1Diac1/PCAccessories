$('#submit').click(function(){

    let userLog = $.trim($('#log').val());
    let userPas = $.trim($('#pass').val());

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3161/api/v1/auth/register',
        data: {user_login : userLog, user_pass: userPas},
        error: function(req, text, error) {
            alert('Ошибка AJAX: ' + text + ' | ' + error);
        },
        success: function (data) {
            if(data[0]){
                alert(data[1] + ', вы зарегистрированы!');
            } else {
                alert('Хьюстон, у нас проблемы!');
            }
        },
        dataType: 'json'
    });
});