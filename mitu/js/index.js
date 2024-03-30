let blog = JSON.parse(localStorage.getItem("blogs")) || []

const like = () => {
    let user = document.getElementById("like-btn").addEventListener("click", () => {
        alert("like")
        console.log(user);
    })
}

const dislike = () => {
    let user = document.getElementById("dislike").addEventListener("click", () => {
        alert("dislike")
        console.log(user);
    })
}

// const filter = () => {
//     let short = document.querySelector(".Country-btn").addEventListener("click,")
// }

const show = () => {
    blog.map((pro) => {
        let box = document.createElement("div")
        box.setAttribute("id", "box")

        let head = document.createElement("div")
        head.setAttribute("id", "head")

        let title = document.createElement("h2")
        title.innerHTML = pro.title
        title.setAttribute("id", "title")

        let img = document.createElement("img")
        img.src = pro.img
        img.setAttribute("id", "img")

        let Content = document.createElement("p")
        Content.innerHTML = pro.Content
        Content.setAttribute("id", "Content")

        let menu = document.createElement("div")
        menu.setAttribute("id", "menu")

        let Country = document.createElement("span")
        Country.innerHTML = pro.Country
        Country.setAttribute("id", "Country")

        let like = document.createElement("button")
        like.innerHTML = "like"
        like.setAttribute("id", "like-btn")

        let dislike = document.createElement("button")
        dislike.innerHTML = "dislike"
        dislike.setAttribute("id", "dislike")

        head.append(title)

        menu.append(Country, like, dislike)

        box.append(head, img, Content, menu)
        document.querySelector(".w3-container").append(box)
    })
}
show()
like()
dislike()