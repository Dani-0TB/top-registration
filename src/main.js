let passwordMatch = false;

document.getElementById("f-signup").addEventListener("submit", function (event) {
    event.preventDefault()
    if (passwordMatch) {
        window.location.replace("success.html")
    }
});

document.getElementById("btn-submit").addEventListener("click", function (event) {
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    console.log(password1);
    console.log(password2);
    if (password1 !== password2) {
        passwordMatch = false;
        let errorMsg = "Passwords don't match"
        let error1 = document.getElementById("e-pass1");
        let error2 = document.getElementById("e-pass2");
        error1.classList.remove("hidden");
        error2.classList.remove("hidden");
        error1.innerText = errorMsg;
        error2.innerText = errorMsg;
    } else {
        passwordMatch = true;
    }
});