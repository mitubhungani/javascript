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
