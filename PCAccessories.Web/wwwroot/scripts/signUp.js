$(function signUp() {
        $('#submit').click(function (e) {
            e.preventDefault();
            let data = {
                Login: $('#username').val(),
                Email: $('#mail').val(),
                Password: $('#password').val(),
                ConfirmPassword: $('#confirmpassword').val()
            };
 
            $.ajax({
                type: 'POST',
                url: 'api/v1/auth/register',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data)
            }).success(function (data) {
                alert("Регистрация пройдена");
            }).fail(function (data) {
                alert("В процесе регистрации возникла ошибка");
            });
        });
    })