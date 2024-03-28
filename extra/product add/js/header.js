document.querySelector(".profile-menu").classList.add("hidden")

document.querySelector(".profile").addEventListener("click", () => {
    document.querySelector(".profile-menu").classList.toggle("hidden")
})

document.querySelector(".profile-p").addEventListener("click", () => {
    window.location.href = "/pages/login.html"
})