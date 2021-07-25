$(function () {
        $('#submit').click(function (e) {
            e.preventDefault();
            let data = {
                Username: $('#username').val(),
                Email: $('#mail').val(),
                Password: $('#password').val(),
                ConfirmPassword: $('#confirmpassword').val()
            };
 
            $.ajax({
                type: 'POST',
                url: 'http://localhost:3161/api/v1/auth/register',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data)
            }).success(function (data) {
                alert("Регистрация пройдена");
            }).fail(function (data) {
                alert(data.errors[0]);
                alert(data.error[0]);
            });
        });
    })