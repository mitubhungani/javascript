let user = JSON.parse(localStorage.getItem("users")) || []

const log = (e) => {
    e.preventDefault()

    let data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    }

    user.push(data)
    localStorage.setItem("users", JSON.stringify(user))

    let loginusers = user.filter((ele) => ele.username == user.username && ele.password == user.password);
    console.log(loginusers);
    if (loginusers) {
        sessionStorage.setItem("islogin", true)
    }

    let islogin = sessionStorage.getItem("islogin")
    if (islogin) {
        window.location.href = "./index.html"
        document.getElementById("logout").innerHTML="logout"
    }
    else{
    }

}

document.querySelector(".login").addEventListener("submit", log)