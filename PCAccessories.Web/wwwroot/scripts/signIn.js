let err = document.getElementById('err');

$(function () {
        $('#signInButton').click(function (e) {
            e.preventDefault();
            let data = {
                Username: $('#signLogin').val(),
                Password: $('#signPass').val(),
            };
 
            $.ajax({
                type: 'POST',
                url: 'http://localhost:3161/api/v1/auth/login',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data)
            }).success(function (data) {
                alert("Регистрация пройдена");
            }).fail(function (data) {

                const log =
                [
                        JSON.stringify(data.responseJSON.errors.Username) != null ? err.innerHTML = JSON.stringify(data.responseJSON.errors.Username[0]).replace(/"/g, "") : false,
                        JSON.stringify(data.responseJSON.errors.Password) != null ? err.innerHTML = JSON.stringify(data.responseJSON.errors.Password[0]).replace(/"/g, "") : false,
                ]
                for (let i = 0; i < log.length; i++) {
                    if (JSON.stringify(data.responseJSON.errors[i]) != undefined)
                        err.innerHTML = JSON.stringify(data.responseJSON.errors[i]).replace(/"/g, "");
                }
            });
        });
    }) 