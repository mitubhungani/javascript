let product = JSON.parse(localStorage.getItem("products")) || []
let localcart = JSON.parse(localStorage.getItem("carts")) || []

const ui = (data) => {
    document.querySelector(".main").innerHTML=""
  data.map((pro, i) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let title = document.createElement("h2");
    title.innerHTML = pro.title;
    title.setAttribute("id", "title");

    let image =  document.createElement("div");
    image.setAttribute("id", "image");

    let img = document.createElement("img");
    img.src = pro.image;
    img.setAttribute("id", "img");

    let pri =  document.createElement("div");
    pri.setAttribute("id", "pri");

    let price=document.createElement('p');
    price.innerHTML=`RS: ${pro.price}`;
    price.setAttribute("id","price")

    let bott= document.createElement("div")
    bott.setAttribute("id", "bott");

    let cart =document.createElement('button');
    cart.innerHTML="Add to Cart";   
    cart.setAttribute("id","cart");

    cart.addEventListener("click", ()=>{
      let cartqnt ={...pro,qty:1}
      console.log(pro);
      localcart.push(cartqnt)
      localStorage.setItem("carts",JSON.stringify(localcart))
    })

    bott.append(cart)
    image.append(img);
    pri.append(price)
    box.append(title,image,pri,bott);

    document.querySelector(".main").append(box)
  });
};

ui(product)



// document.querySelector(".main").addEventListener("submit");
