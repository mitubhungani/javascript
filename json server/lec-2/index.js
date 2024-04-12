const post = (datas) => {
  fetch("http://localhost:3000/product", {
    method: "POST",
    headers: { "Content-Type": "Aplication/json" },
    body: JSON.stringify(datas)
  });
};

const get = (datas) => {
  fetch("http://localhost:3000/product", {
    method: "GET"
  });
};



const show = (e) => {
  e.preventDefault();
  let hi = {
    title: document.getElementById("title").value,
    image: document.getElementById("img").value,
    price: document.getElementById("price").value,
  };
  console.log(hi);
  datas.push(hi);
  post(datas);
  ui(datas);
};
document.getElementById("for").addEventListener("submit", show);

const ui = (data) => {
  document.getElementById("main").innerHTML = "";
  data.map((ele) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let title = document.createElement("p");
    title.innerHTML = ele.title;
    title.setAttribute("id", "title");

    let image = document.createElement("img");
    image.src = ele.image;
    image.setAttribute("id", "img");

    let price = document.createElement("p");
    price.innerHTML = ele.price;
    price.setAttribute("id", "price");

    let del = document.createElement("button");
    del.innerHTML = "Delete";
    del.setAttribute("id", "del");

    box.append(title, image, price.del);
    document.getElementById("main").append(box);
  });
};

document.getElementById("main").addEventListener("submit", ui);
