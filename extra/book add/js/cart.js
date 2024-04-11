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

    let del = document.createElement("button");
    del.innerHTML = "Delete";
    del.setAttribute("id", "del");

    del.addEventListener("click", () => {
      data.splice(i, 1);
      ui(data);
      localStorage.setItem("carts", JSON.stringify(localcart));
    });

    bott.append(del);
    image.append(img);
    pri.append(price);
    box.append(title, image, pri, bott);

    document.querySelector(".main").append(box);
  });
};

ui(localcart);

// document.querySelector(".main").addEventListener("submit");
