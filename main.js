function myfunction() {
    var i = document.getElementById("pass");

    if(i.type == "password") {
        i.type = "text";
    }
    else {
        i.type = "password";
    }
}

var password = document.getElementById("pass");
var passCheck = document.getElementById("error");

function validate() {

     if (password.value.length <= 8) {
			// alert("Password too short")
			passCheck.innerHTML = "password shouldnt be less than 8 characters"
		}
		else {
			passCheck.innerHTML = "Thank you for loging in"
		}
}

var loginform = document.getElementById("pop-upform");

function openForm() {
	loginform.classList.add("open-form")
}

function closeForm() {
	loginform.classList.remove("open-form")
}