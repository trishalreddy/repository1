
function validate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name == "" || email == "" || phone == "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Registration Successful");
    return true;
}
