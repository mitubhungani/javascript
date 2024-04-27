import nav from "../admin-components/admin-nav.js";
import deletedata from "../admin-components/delete.js";

document.getElementById("header").innerHTML = nav();

const proui = (data) => {
  document.querySelector(".show-products").innerHTML = "";
  data.map((pro, i) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let span = document.createElement("td");
    span.innerHTML = `${i + 1}.`;
    span.setAttribute("id", "label");

    let image = document.createElement("img");
    image.src = pro.image;
    image.setAttribute("id", "img");

    let title = document.createElement("td");
    title.innerHTML = pro.title;
    title.setAttribute("id", "title");

    let gender = document.createElement("p");
    gender.innerHTML = pro.gender;
    gender.setAttribute("id", "gender");

    let category = document.createElement("p");
    category.innerHTML = pro.category;
    category.setAttribute("id", "cato");

    let price = document.createElement("p");
    price.innerHTML = `Price: ${pro.price}`;
    price.setAttribute("id", "price");

    // let update = document.createElement("span");
    // update.innerHTML = `<i class="fa-solid fa-pen-to-square fa-lg"></i>`;
    // update.setAttribute("id", "updateBtn");
    // update.addEventListener("click", () => {
    //   // window.location.href = "../html/updateproduct.html";
    //   edit(pro);
    // });
    // // update.addEventListener("click", ()=>{window.location.href='./editProduct.html?productId='+pro._id})

    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can fa-lg"></i>`;
    deleteBtn.setAttribute("id", "deleteBtn");

    deleteBtn.addEventListener("click", () => {
      deletedata(`http://localhost:3000/product/${pro.id}`);
    });

    box.append(span, image, title, gender, category, price, deleteBtn);
    document.querySelector(".show-products").append(box);
  });
};
//getdata("http://localhost:3000/product")
const get = async () => {
  let res = await fetch("http://localhost:3000/product");
  let data = await res.json();
  proui(data);
  document.getElementById("for").addEventListener("submit", show);
};
get();

// ----------------------------------------------------------------

// import nav from "../admin-components/admin-nav.js";
// import getdata from "../admin-components/get.js";
// import postdata from "../admin-components/post.js";

// document.getElementById("header").innerHTML = nav();

// const data = (e) => {
//   e.preventDefault();
//   let radio1 = document.getElementById("radio1");
//   let radio2 = document.getElementById("radio2");

//   let gender = "null";

//   if (radio1.checked) {
//     gender = radio1.value;
//   }
//   if (radio2.checked) {
//     gender = radio2.value;
//   }

//   let go = {
//     title: document.getElementById("title").value,
//     image: document.getElementById("image").value,
//     category: document.getElementById("category").value,
//     gender: gender,
//     price: document.getElementById("price").value,
//   };
//   console.log(go);
//   postdata("http://localhost:3000/product", go);
// };
// document.getElementById("for").addEventListener("submit", data);

// const catui = (data) => {
//   document.getElementById(
//     "category"
//   ).innerHTML = `<option selected hidden value="">Select Category</option>`;
//   console.log(data);
//   data.map((pro) => {
//     console.log(pro);
//     let opt = document.createElement("option");
//     opt.innerHTML = pro.category;
//     opt.setAttribute("id", "cate");
//     document.getElementById("category").append(opt);
//   });
// };

// const post = async () => {
//   let res = await getdata("http://localhost:3000/category");
//   let data = await res;
//   console.log(data);
//   catui(data);
// };
// post();
