let product = JSON.parse(localStorage.getItem("products")) || []

const show = () => {
    product.map((pro) => {
        let box = document.createElement("div")
        box.setAttribute("id", "box")

        let head = document.createElement("div")
        head.setAttribute("id", "head") 

        let title = document.createElement("h2")
        title.innerHTML = pro.title
        title.setAttribute("id", "title")

        let cart= document.createElement("div")
        cart.innerHTML=`<i class="bi bi-basket"></i>`
        cart.setAttribute("id","cart")

        let img = document.createElement("img")
        img.src = pro.img
        img.setAttribute("id", "img")

        let price = document.createElement("p")
        price.innerHTML = pro.price
        price.setAttribute("id", "price")

        let menu=document.createElement( "div" )
        menu.setAttribute( "id","menu" )
        
        let category = document.createElement("span")
        category.innerHTML=pro.category
        category.setAttribute("id","category")

        let buy= document.createElement("button")
        buy.innerHTML="buy"
        buy.setAttribute("id","buybtn")

        head.append(title,cart)

        menu.append(category,buy)

        box.append(head, img, price,menu)
        document.getElementById("main").append(box)
    })
}
show()