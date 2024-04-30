// import nav from "../components/navbar.js";
// import DeleteProduct from "../components/delete.js";
// import getdata from "../components/get.js";
// import updatedata from "../components/update.js";

// document.getElementById("header").innerHTML = nav();

// const handleqty = (hi, data) => {
//   if (hi == "-") {
//     if (data.qty >= 2) {
//       data.qty -= 1;
//       updatedata(`http://localhost:3000/cart/${data.id}`, data);
//     } else if (data.qty == 1) {
//       DeleteProduct(`http://localhost:3000/cart/${data.id}`);
//     }
//   } else {
//     data.qty += 1;
//     updatedata(`http://localhost:3000/cart/${data.id}`, data);
//   }
// };

// let cart=0

// const ui = (data) => {
//   data.map((pro, i) => {
//     let tr = document.createElement("tr");
//     tr.setAttribute("id","box")

//     let td1 = document.createElement("td");
//     td1.innerHTML = i + 1;
//     td1.setAttribute("id","index")

//     let td2 = document.createElement("td");
//     td2.setAttribute("id","imgdiv")

//     let img = document.createElement("img");
//     img.src = pro.image;
//     img.setAttribute("id", "img");

//     let title = document.createElement("h2");
//     title.innerHTML = pro.title;
//     title.setAttribute("id", "title");

//     td2.append(img, title);

//     // let td3 =document.createElement("td")

//     // let price=document.createElement("p")
//     // price.innerHTML=pro.price
//     // price.setAttribute("id","price")

//     let td3 = document.createElement("td");
//     td3.setAttribute("id","btndiv")

//     let btn1 = document.createElement("button");
//     btn1.innerHTML = "-";
//     btn1.addEventListener("click", () => handleqty("-", pro));

//     let qty = document.createElement("span");
//     qty.innerHTML = pro.qty;

//     let btn2 = document.createElement("button");
//     btn2.innerHTML = "+";
//     btn2.addEventListener("click", () => handleqty("+", pro));

//     td3.append(btn1, qty, btn2);

//     let td4 = document.createElement("td");

//     let total = document.createElement("p");
//     total.setAttribute("id", "total");
//     total.innerHTML = pro.price * pro.qty;

//     td4.append(total);

//     let td5 = document.createElement("td");

//     let del = document.createElement("button");
//     del.innerHTML = "Delete";

//     del.addEventListener("click", () => {
//       DeleteProduct(`http://localhost:3000/cart/${pro.id}`);
//     });

//     td5.append(del);
//     tr.append(td1, td2, td3, td4, td5);
//     document.getElementById("cart").append(tr);
//     cart+=pro.price*pro.qty;
//     document.getElementById("side").innerHTML=cart
//   });
// };

// checkbtn.addEventListener('click', ()=> {
//   alert("pheli fursat me nikal");
// })

// const get = async () => {
//   let res = await getdata("http://localhost:3000/cart");
//   let data = await res;
//   ui(data);
// };

// get();

// import nav from "../components/navbar.js";
// import DeleteProduct from "../components/delete.js";
// import getdata from "../components/get.js";
// import updatedata from "../components/update.js";

// document.getElementById("header").innerHTML = nav();

// const handleqty = (hi, data) => {
//   if (hi == "-") {
//     if (data.qty >= 2) {
//       data.qty -= 1;
//       updatedata(`http://localhost:3000/cart/${data.id}`, data);
//     } else if (data.qty == 1) {
//       DeleteProduct(`http://localhost:3000/cart/${data.id}`);
//     }
//   } else {
//     data.qty += 1;
//     updatedata(`http://localhost:3000/cart/${data.id}`, data);
//   }
// };

// let cart = 0;

// const ui = (data) => {
//   data.map((pro, i) => {
//     let tr = document.createElement("tr");
//     tr.setAttribute("id", "box");

//     let td1 = document.createElement("td");
//     td1.innerHTML = i + 1;
//     td1.setAttribute("id", "index");

//     // let td2 = document.createElement("td");
//     // td2.setAttribute("id","imgdiv")

//     let img = document.createElement("img");
//     img.src = pro.image;
//     img.setAttribute("id", "img");

//     let title = document.createElement("h2");
//     title.innerHTML = pro.title;
//     title.setAttribute("id", "title");

//     // td2.append(img, title);

//     // let td3 =document.createElement("td")

//     // let price=document.createElement("p")
//     // price.innerHTML=pro.price
//     // price.setAttribute("id","price")

//     let td3 = document.createElement("td");
//     td3.setAttribute("id", "btndiv");

//     let btn1 = document.createElement("button");
//     btn1.innerHTML = "-";
//     btn1.setAttribute("id", "minus");
//     btn1.addEventListener("click", () => handleqty("-", pro));

//     let qty = document.createElement("span");
//     qty.innerHTML = pro.qty;
//     qty.setAttribute("id", "qty");

//     let btn2 = document.createElement("button");
//     btn2.innerHTML = "+";
//     btn2.setAttribute("id", "add");
//     btn2.addEventListener("click", () => handleqty("+", pro));

//     td3.append(btn1, qty, btn2);

//     // let td4 = document.createElement("td");

//     let total = document.createElement("p");
//     total.setAttribute("id", "total");
//     total.innerHTML = `Total : ${pro.price * pro.qty}`;

//     // td4.append(total);

//     let td5 = document.createElement("td");
//     td5.setAttribute("id", "td5");

//     let del = document.createElement("button");
//     del.innerHTML = "Delete";
//     del.setAttribute("id", "del");

//     del.addEventListener("click", () => {
//       DeleteProduct(`http://localhost:3000/cart/${pro.id}`);
//     });

//     td5.append(del);
//     tr.append(td1, img, title, td3, total, td5);
//     document.getElementById("cart").append(tr);
//     cart += pro.price * pro.qty;

//     document.getElementById("side").innerHTML = cart;
//   });
// };

// checkbtn.addEventListener("click", () => {
//   alert("pheli fursat me nikal");
// });

// const get = async () => {
//   let res = await getdata("http://localhost:3000/cart");
//   let data = await res;
//   ui(data);
// };

// get();

import nav from "../components/navbar.js";
import deletedata from "../components/delete.js";
import getdata from "../components/get.js";
import updatedata from "../components/update.js";

document.getElementById("header").innerHTML = nav();

let cart = 0;
let qtotal = 0;

const handleqty = async (hi, data) => {
  if (hi == "-") {
    if (data.qty > 1) {
      data.qty -= 1;
      await updatedata(`http://localhost:3000/cart/${data.id}`, data);
    } else {
      await deletedata(`http://localhost:3000/cart/${data.id}`);
      cart -= data.price; // Decrement cart total
    }
  } else {
    data.qty += 1;
    await updatedata(`http://localhost:3000/cart/${data.id}`, data);
  }
  get(); // Reload data to update UI
};

function updateCheckoutVisibility() {
  const checkoutButton = document.getElementById("checkbtn");
  checkoutButton.style.display = cart > 0 ? "block" : "none";
}

const ui = (data) => {
  document.getElementById("cart").innerHTML = ""; // Clear previous content
  cart = 0; // Reset cart total before rebuilding UI
  data.forEach((pro, i) => {
    let tr = document.createElement("tr");
    tr.setAttribute("id", "box");

    let td1 = document.createElement("td");
    td1.innerHTML = i + 1;
    td1.setAttribute("id", "index");

    let img = document.createElement("img");
    img.src = pro.image;
    img.setAttribute("id", "img");

    let title = document.createElement("h2");
    title.innerHTML = pro.title;
    title.setAttribute("id", "title");

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

    td3.append(btn1, qty, btn2);

    let total = document.createElement("p");
    total.setAttribute("id", "total");
    total.innerHTML = `Total: ${pro.price * pro.qty}`;

    let td5 = document.createElement("td");
    td5.setAttribute("id", "td5");

    let del = document.createElement("button");
    del.innerHTML = "Delete";
    del.setAttribute("id", "del");
    del.addEventListener("click", async () => {
      await deletedata(`http://localhost:3000/cart/${pro.id}`);
      get(); // Reload data to update UI
    });

    td5.append(del);
    tr.append(td1, img, title, td3, total, td5);
    document.getElementById("cart").append(tr);
    cart += pro.price * pro.qty;
  });
  checkbtn.addEventListener("click", () => {
    alert("pheli fursat me nikal");
  });

  document.getElementById("side").innerHTML = cart;
  updateCheckoutVisibility(); // Update checkout button visibility
};

const get = async () => {
  let res = await getdata("http://localhost:3000/cart");
  let data = await res;
  ui(data);
};

get();
