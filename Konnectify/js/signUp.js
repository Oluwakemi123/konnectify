/**
 * Created by Rover Global on 1/24/2023.
 */

function myFunction() {
    let x = document.getElementById("password-field");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
