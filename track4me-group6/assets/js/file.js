// TAKE OUT THE LOCATION VALIDATION
var login = document.getElementById("form-button");
login.addEventListener("click", validateForm);
function validateForm() {
  event.preventDefault();
  var email = document.myform.email.value;
  var password = document.myform.password.value;

  if (email == null || email == "") {
    document.getElementById("validate").innerHTML =
      "PLEASE FILL OUT ALL FORM FIELDS";
    return false;
  } else if (password.lenght == 3) {
    document.getElementById("validate").innerHTML =
      "YOUR PASSWORD MUST BE AT LEAST 6 CHARACTERS LONG";
    return false;
  }
  document.getElementById("email").value = null;
  document.getElementById("password").value = null;
}
