let err = document.getElementById('err');

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
                let something = JSON.stringify(data.responseJSON.errors)
                
                const log =
                [
                        JSON.stringify(data.responseJSON.errors.Username) != null ? err.innerHTML = '<li>' + JSON.stringify(data.responseJSON.errors.Username[0]) + '</li>' : false,
                        JSON.stringify(data.responseJSON.errors.Email) != null ? err.innerHTML = '<li>' + JSON.stringify(data.responseJSON.errors.Email[0]) + '</li>' : false,
                        JSON.stringify(data.responseJSON.errors.Password) != null ? err.innerHTML = '<li>' + JSON.stringify(data.responseJSON.errors.Password[0]) + '</li>' : false,
                        JSON.stringify(data.responseJSON.errors.ConfirmPassword) != null ? err.innerHTML = '<li>' + JSON.stringify(data.responseJSON.errors.ConfirmPassword[0]) + '</li>' : false
                ]
                for (let i = 0; i < log.length; i++) {
                    if (JSON.stringify(data.responseJSON.errors[i]) != undefined)
                    err.innerHTML = '<li>' + JSON.stringify(data.responseJSON.errors[i].replace('"', '')) + '</li>'
                }
            });
        });
    })