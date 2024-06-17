let localcart = JSON.parse(localStorage.getItem("carts")) || [];

let cart=0
let qtotal=0

const handleqty =(hi,data) => {
  if(hi=="-"){
    if(data.qty>1){
      data.qty-=1
    }
    else{
      cart-=data.price
    }
  }
  else{
    data.qty+=1
  }
  show(localcart);
}

const show = (data) => {
  document.getElementById("main").innerHTML = "";
  cart=0
  data.map((pro, i) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let head = document.createElement("div");
    head.setAttribute("id", "head");

    let img = document.createElement("img");
    img.src = pro.img;
    img.setAttribute("id", "img");

    let center = document.createElement("div");
    center.setAttribute("id", "center");

    let title = document.createElement("h2");
    title.innerHTML = pro.title;
    title.setAttribute("id", "title");

    let price = document.createElement("p");
    price.innerHTML = `Rs: ${pro.price}`;
    price.setAttribute("id", "price");

    let category = document.createElement("span");
    category.innerHTML = pro.category;
    category.setAttribute("id", "category");

    let td3 = document.createElement("td");
    td3.setAttribute("id", "btndiv");

    let btn1 = document.createElement("button");
    btn1.innerHTML = "-";
    btn1.setAttribute("id", "minus");
    btn1.addEventListener("click", () => handleqty("-", pro));

    let qty = document.createElement("span");
    qty.innerHTML = pro.qty;
    qty.setAttribute("id", "qty");

    let btn2 = document.createElement("button");
    btn2.innerHTML = "+";
    btn2.setAttribute("id", "add");
    btn2.addEventListener("click", () => handleqty("+", pro));

    let total = document.createElement("div");
    total.setAttribute("id", "total");

    let totalprice = document.createElement("p");
    totalprice.setAttribute("id", "totalprice");
    totalprice.innerHTML = `Total: ${pro.price * pro.qty}`;

    let left = document.createElement("div");
    left.setAttribute("id", "left");

    let del = document.createElement("btn");
    del.innerHTML = `<i class="bi bi-trash-fill"></i>`;
    del.setAttribute("id", "del");
    del.addEventListener("click", () => {
      localcart.splice(i, 1);
      localStorage.setItem("carts", JSON.stringify(localcart));
      show(localcart);
    });

    head.append(img);

    center.append(title, price, category);
    td3.append(btn1, qty, btn2);
    total.append(totalprice);
    left.append(del);
    box.append(head, center,td3, total, left);
    document.getElementById("main").append(box);
  });
};

show(localcart);
