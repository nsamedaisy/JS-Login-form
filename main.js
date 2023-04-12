function myfunction() {
    var i = document.getElementById("pass");

    if(i.type == "password") {
        i.type = "text";
    }
    else {
        i.type = "password";
    }
}

function validate() {
    var password = document.getElementById("pass");
    var length = document.getElementById("length");

    if (password.Value.length >= 8) {
        alert("Login successful");
        return false;
    }
    else {
        alert("Login failed");
    }
}
 