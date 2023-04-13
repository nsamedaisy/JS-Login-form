var i = document.getElementById("pass");
function myfunction() {
    
    if(i.type == "password") {
        i.type = "text";
    }
    else {
        i.type = "password";
    }
}

var loginform = document.getElementById("pop-upform");

function openForm() {
	loginform.classList.add("open-form")
}

function closeForm() {
	loginform.classList.remove("open-form")
}

// // validation for username

var username = document.getElementById("user");
var passCheck = document.getElementById("error");

function validate() {
	if (username.value.length <= 6) {
		passCheck.innerHTML = "username is invalid"
	}
	else {
		passCheck.innerHTML = "validated"
	}
}

// // validation for password

var password = document.getElementById("pass");
var passCheck = document.getElementById("error");

function validate() {
     if (password.value.length <= 8) {
			passCheck.innerHTML = "password is invalid"
		}
		else {
			passCheck.innerHTML = "validated"
		}
}
