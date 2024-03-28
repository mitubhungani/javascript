let product = JSON.parse(localStorage.getItem("products")) || []

const show = () => {
    product.map((pro) => {
        let box = document.createElement("div")
        box.setAttribute("id", "box")

        let title = document.createElement("h2")
        title.innerHTML = pro.title
        title.setAttribute("id", "title")

        let img = document.createElement("img")
        img.src = pro.img
        img.setAttribute("id", "img")

        let price = document.createElement("p")
        price.innerHTML = pro.price
        price.setAttribute("id", "price")

        box.append(title, img, price)
        document.getElementById("main").append(box)
    })
}
show()