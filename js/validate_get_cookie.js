       function validate(token, callback) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                        callback(null);
                    } else {
                        callback(xhr.responseText);
                    }
                }
            }
            xhr.open('GET', '/api/validate?token=' + token, true);
            xhr.send();
        }
        
        if (getCookie("token")) {
            validate(getCookie("token"), function (err) {
                if (err) {
                    console.log("Token cookie, invalid, reloading for re-authentication");
                    location.reload();
                } else {
                    setupSocket(getCookie("token"));
                }
            });
        } else {
            console.log("Token cookie not found, reloading for setup.");
            location.reload();
        }