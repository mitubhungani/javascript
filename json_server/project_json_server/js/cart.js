import DeleteProduct from "../components/delete.js";
import getdata from "../components/get.js";
import nav from "../components/navbar.js";

document.getElementById("navbar").innerHTML = nav();



const ui = (data) => {
  data.map((pro, i) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = i;

    let td2 = document.createElement("td");

    let img = document.createElement("td");
    img.src = pro.image;

    let title = document.createElement("h2");
    title.innerHTML = pro.title;
    title.setAttribute("id", "title");

    td2.append(img, title);

    // let td3 =document.createElement("td")

    // let price=document.createElement("p")
    // price.innerHTML=pro.price
    // price.setAttribute("id","price")

    let td3 = document.createElement("td");

    let btn1 = document.createElement("button");
    btn1.innerHTML = "-";

    let qty = document.createElement("span");
    qty.innerHTML = pro.qty;

    let btn2 = document.createElement("button");
    btn2.innerHTML = "+";

    btn2.addEventListener("click", () => qty("+", pro));
    btn1.addEventListener("click", () => qty("-", pro));

    td3.append(btn1, qty, btn2);

    let td4 = document.createElement("td");

    let total = document.createElement("p");
    total.setAttribute("id", "total");
    total.innerHTML = pro.price * pro.qty;

    td4.append(total);

    let td5 = document.createElement("td");

    let del = document.createElement("button");
    del.innerHTML = "Delete";

    del.addEventListener("click", () => {
      DeleteProduct(pro, id);
    });

    td5.append(del);
    tr.append(td1, td2, td3, td4, td5);
    document.getElementById("cart").append(tr);
  });
};
