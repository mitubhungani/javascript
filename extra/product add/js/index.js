let product = JSON.parse(localStorage.getItem("products")) || []
let localcart = JSON.parse(localStorage.getItem("carts")) || []
const show = (data) => {
    document.getElementById("main").innerHTML=""
    data.map((pro,i) => {
        let box = document.createElement("div")
        box.setAttribute("id", "box")

        let head = document.createElement("div")
        head.setAttribute("id", "head") 

        let title = document.createElement("h2")
        title.innerHTML = pro.title
        title.setAttribute("id", "title")

        let cart= document.createElement("btn")
        cart.innerHTML=`<i class="bi bi-basket"></i>`
        cart.setAttribute("id","cart")
        
        cart.addEventListener("click", ()=>{
            let cartqty={...pro,qty:1}
            console.log(pro);
            localcart.push(cartqty)
            localStorage.setItem("carts",JSON.stringify(localcart))
        });
        
        let img = document.createElement("img")
        img.src = pro.img
        img.setAttribute("id", "img")
        
        let price = document.createElement("p")
        price.innerHTML = `Rs: ${pro.price}`
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

show(product)



const search=(val)=>{
    let tempa=product.filter((ele)=>ele.title.includes(val))
    console.log(tempa);
    show(tempa)
}
const hebdelsearch=(e)=>{
    e.preventDefault();
    let temp= document.querySelector(".input-box").value
    console.log(temp);
    search(temp);
}
document.querySelector('.form-main').addEventListener("submit",hebdelsearch)




// let product = JSON.parse(localStorage.getItem("products")) || [];
// let cart = JSON.parse(localStorage.getItem("carts")) || [];

// const show = (data) => {
//     document.getElementById("main").innerHTML = "";
//     data.forEach((pro, i) => {
//         let box = document.createElement("div");
//         box.setAttribute("class", "box");

//         let head = document.createElement("div");
//         head.setAttribute("class", "head");

//         let title = document.createElement("h2");
//         title.innerHTML = pro.title;
//         title.setAttribute("class", "title");

//         let cartBtn = document.createElement("button"); // Changed "btn" to "button"
//         cartBtn.innerHTML = `<i class="bi bi-basket"></i>`;
//         cartBtn.setAttribute("class", "cart"); // Changed "id" to "class"

//         cartBtn.addEventListener('click', () => {
//             cart.push(pro); // Push the product object to the cart
//             localStorage.setItem("carts", JSON.stringify(cart));
//         });

//         let img = document.createElement("img");
//         img.src = pro.img;
//         img.setAttribute("class", "img");

//         let price = document.createElement("p");
//         price.innerHTML = `Rs: ${pro.price}`;
//         price.setAttribute("class", "price");

//         let menu = document.createElement("div");
//         menu.setAttribute("class", "menu");

//         let category = document.createElement("span");
//         category.innerHTML = pro.category;
//         category.setAttribute("class", "category");

//         let buy = document.createElement("button");
//         buy.innerHTML = "buy";
//         buy.setAttribute("class", "buybtn");

//         head.append(title, cartBtn);

//         menu.append(category, buy);

//         box.append(head, img, price, menu);
//         document.getElementById("main").append(box);
//     });
// };

// show(product);

// const search = (val) => {
//     let tempa = product.filter((ele) => ele.title.includes(val));
//     show(tempa);
// };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     let temp = document.querySelector(".input-box").value;
//     search(temp);
// };

// document.querySelector('.form-main').addEventListener("submit", handleSubmit);