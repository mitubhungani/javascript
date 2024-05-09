import getdata from "../components/get.js";
import postdata from "../components/post.js";
import nav from "../components/navbar.js";

document.getElementById("header").innerHTML = nav();

const isexist = async (data) => {
  try {
    let res = await fetch(`http://localhost:3000/cart/${data.id}`);
    let dataa = await res.json();

    if (dataa.length == 0) {
    } else {
      document.querySelector(".add-to-cart").classList.add("alert");
      document.querySelector(".add-to-cart div p").innerHTML =
        "Already existed";
      setTimeout(() => {
        document.querySelector(".add-to-cart").classList.add("alert-back");
      }, 2000);
      setTimeout(() => {
        document.querySelector(".add-to-cart").classList.remove("alert-back");
        document.querySelector(".add-to-cart").classList.remove("alert");
      }, 3000);
    }
  } catch (error) {
    postdata("http://localhost:3000/cart", { ...data, qty: 1 });
  }
};

document.querySelector(".head-category-div").addEventListener("click", () => {
  document.querySelector(".category-list").classList.toggle("hiddencate");
});

//show category in side bar

const sideui = (data) => {
  document.querySelector(".category-list").innerHTML = "";
  data.map((cat) => {
    let catbox = document.createElement("div");
    catbox.setAttribute("id", "catbox");

    let catinfo = document.createElement("li");
    catinfo.innerHTML = cat.category;
    catinfo.setAttribute("id", "catinfo");

    catinfo.addEventListener("click", () => {
      getcato(cat.category);
    });

    catbox.append(catinfo);
    document.querySelector(".category-list").append(catbox);
    console.log(cat);
  });
};

//get category product

const getcato = async (cate) => {
  let res = await getdata(`http://localhost:3000/product?category=${cate}`);
  let data = await res;
  ui(data);
};

getcato();

//get category

const getcat = async () => {
  let res = await getdata("http://localhost:3000/category");
  let data = await res;
  sideui(data);
};

getcat();

//ui

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

    add.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      isexist(pro);
    });

    btn.append(add);

    imgdiv.append(image);

    box.append(imgdiv, title, gender, category, price, btn);
    document.getElementById("product").append(box);
  });
};

//lth

const sortdown = async () => {
  let res = await getdata("http://localhost:3000/product");
  let Productss = await res;
  let tempa = Productss.sort((a, b) => a.price - b.price);
  console.log(tempa);
  ui(tempa);
};

document.querySelector(".lth").addEventListener("click", sortdown);

//htl

const sortup = async () => {
  let res = await getdata("http://localhost:3000/product");
  let Productss = await res;
  let tempa = Productss.sort((a, b) => b.price - a.price);
  console.log(tempa);
  ui(tempa);
};

document.querySelector(".htl").addEventListener("click", sortup);

//search

const searchno = async (val) => {
  let res = await getdata("http://localhost:3000/product");
  let Productss = await res;
  let tempa = Productss.filter((pro) => pro.title.includes(val));
  console.log(tempa);
  ui(tempa);
};
const hebdelsearch = (e) => {
  e.preventDefault();
  let temp = document.querySelector(".search").value;
  console.log(temp);
  searchno(temp);
};

//get

const get = async () => {
  let res = await getdata("http://localhost:3000/product");
  let data = await res;
  ui(data);
  document.querySelector("#forSearch").addEventListener("submit", hebdelsearch);
  document.querySelector("#search-btn").addEventListener("click", hebdelsearch);
};

get();
