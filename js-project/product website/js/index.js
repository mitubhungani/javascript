let product = JSON.parse(localStorage.getItem("products")) || [];
let localcart = JSON.parse(localStorage.getItem("carts")) || [];
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

show(product);

const search = (val) => {
  let tempa = product.filter((ele) => ele.title.includes(val));
  console.log(tempa);
  show(tempa);
};
const hebdelsearch = (e) => {
  e.preventDefault();
  let temp = document.querySelector(".input-box").value;
  console.log(temp);
  search(temp);
};
document.querySelector(".form-main").addEventListener("submit", hebdelsearch);