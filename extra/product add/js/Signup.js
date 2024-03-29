let user = JSON.parse(localStorage.getItem("users")) || []

const Signup = (e) => {
    e.preventDefault()

    let data = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }
    user.push(data)
    localStorage.setItem("users", JSON.stringify(user))
    window.location.href = "../index.html"
}

document.querySelector(".Signup").addEventListener("submit", Signup)