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
                alert(JSON.stringify(data[errors[0]]));
                console.log(JSON.stringify(data[errors]));
                console.log(JSON.stringify(data[0]));
            });
        });
    })