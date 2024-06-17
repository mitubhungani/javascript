// --------------menu-------------------------

document.querySelector(".menu-bar").classList.add("hidden");

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".menu-bar").classList.toggle("hidden");
});

let product = JSON.parse(localStorage.getItem("products")) || [];
let localcart = JSON.parse(localStorage.getItem("carts")) || [];

const ui = (data) => {
  document.querySelector(".main").innerHTML = "";
  data.map((pro, i) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let title = document.createElement("h2");
    title.innerHTML = pro.title;
    title.setAttribute("id", "title");

    let image = document.createElement("div");
    image.setAttribute("id", "image");

    let img = document.createElement("img");
    img.src = pro.image;
    img.setAttribute("id", "img");

    let pri = document.createElement("div");
    pri.setAttribute("id", "pri");

    let price = document.createElement("p");
    price.innerHTML = `RS: ${pro.price}`;
    price.setAttribute("id", "price");

    let bott = document.createElement("div");
    bott.setAttribute("id", "bott");

    let cart = document.createElement("button");
    cart.innerHTML = "Add to Cart";
    cart.setAttribute("id", "cart");

    let del = document.createElement("button");
    del.innerHTML = "Delete";
    del.setAttribute("id", "del");

    del.addEventListener("click", () => {
      data.splice(i, 1);
      ui(data);
      localStorage.setItem("products", JSON.stringify(product));
    });

    cart.addEventListener("click", () => {
      let cartqnt = { ...pro, qty: 1 };
      console.log(pro);
      localcart.push(cartqnt);
      localStorage.setItem("carts", JSON.stringify(localcart));
    });

    bott.append(cart, del);
    image.append(img);
    pri.append(price);
    box.append(title, image, pri, bott);

    document.querySelector(".main").append(box);
  });
};

ui(product);

// document.querySelector(".main").addEventListener("submit");

const sortdown = (val) => {
  if (val == "lth") {
    let temp = product.sort((a, b) => a.price - b.price);
    console.log(temp);
    ui(temp);
  }
};

document.querySelector(".lth").addEventListener("click", () => sortdown("lth"));

const sortup = (val) => {
  if (val == "htl") {
    let temp = product.sort((a, b) => b.price - a.price);
    console.log(temp);
    ui(temp);
  }
};
document.querySelector(".htl").addEventListener("click", () => sortup("htl"));

const search = (val) => {
  let temp = product.filter((a) => a.title.includes(val));
  console.log(temp);
  ui(temp);
};

const hebdelsearch = (e) => {
  e.preventDefault();
  let temp = document.querySelector(".search-box").value;
  console.log(temp);
  search(temp);
};
document.querySelector(".right").addEventListener("click", hebdelsearch);
