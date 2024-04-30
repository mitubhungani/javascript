import getdata from "../components/get.js";
import postdata from "../components/post.js";
import nav from "../components/navbar.js";

document.getElementById("header").innerHTML = nav();

const isexist = async (data) => {
  try {
    let res = await fetch(`http://localhost:3000/cart/${data.id}`);
    let dataa = await res.json();

    window.location.href = "../html/cart.html";
  } catch (error) {
    postdata("http://localhost:3000/cart", { ...data, qty: 1 });
  }
};

const ui = (data) => {
  document.getElementById("product").innerHTML = "";
  data.map((pro) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("id", "imgdiv");

    let image = document.createElement("img");
    image.src = pro.image;
    image.setAttribute("id", "img");

    let title = document.createElement("h2");
    title.innerHTML = pro.title;
    title.setAttribute("id", "title");

    let gender = document.createElement("p");
    gender.innerHTML = `Gen : ${pro.gender}`;
    gender.setAttribute("id", "gender");

    let category = document.createElement("p");
    category.innerHTML = `Cat : ${pro.category}`;
    category.setAttribute("id", "cato");

    let price = document.createElement("p");
    price.innerHTML = `₹ : ${pro.price}`;
    price.setAttribute("id", "price");

    let btn = document.createElement("div");
    btn.setAttribute("id", "btn");

    let add = document.createElement("button");
    add.innerHTML = "Add to cart";
    add.setAttribute("id", "add");

    add.addEventListener("click", () => {
      isexist(pro);
    });

    btn.append(add);

    imgdiv.append(image);

    box.append(imgdiv, title, gender, category, price, btn);
    document.getElementById("product").append(box);
  });
};

const searchno=async (val)=>{
  let res = await getdata("http://localhost:3000/product");
  let Productss = await res;
  let tempa= Productss.filter((pro)=>pro.title.includes(val))
  console.log(tempa);
  ui(tempa)
}
const hebdelsearch=(e)=>{
  e.preventDefault();
  let temp= document.querySelector(".search").value
  console.log(temp);
  searchno(temp);
}

const get = async () => {
  let res = await getdata("http://localhost:3000/product");
  let data = await res;
  ui(data);
  document.querySelector('#forSearch').addEventListener("submit",hebdelsearch)
  document.querySelector('#search-btn').addEventListener("click",hebdelsearch)
  // ,{
  //     method:"GET",
  //     headers:{"Content-Type":"application/json"},
  //     body:JSON.stringify(data),
  // })
};

get();
