import getdata from "../components/get.js";
import nav from "../components/navbar.js";
// import postdata from "../components/post.js";

document.getElementById("navbar").innerHTML = nav();

const ui = (data) => {
  // document.getElementById("show").innerHTML=""
  data.map((pro) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let img = document.createElement("img");
    img.src = pro.image;
    img.setAttribute("id", "image");

    let title = document.createElement("h2");
    title.innerHTML = pro.title;
    title.setAttribute("id", "title");

    let price = document.createElement("p");
    price.innerHTML = `Price: ${pro.price}`;
    price.setAttribute("id", "price");

    let btn = document.createElement("div");
    btn.setAttribute("id", "button");

    let cart = document.createElement("button");
    cart.innerHTML = "Add to Cart";
    cart.setAttribute("id", "cart");

    btn.append(cart);
    box.append(img, title, price, btn);
    document.getElementById("show").append(box);
  });
};

const get = () => {
  let res = getdata("http://localhost:3000/product");
  let data = res;
  ui(data);
  // ,{
  //     method:"GET",
  //     headers:{"Content-Type":"application/json"},
  //     body:JSON.stringify(data),
  // })
};

get();
