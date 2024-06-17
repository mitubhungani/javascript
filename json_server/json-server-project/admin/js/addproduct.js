import nav from "../admin-components/admin-nav.js";
import getdata from "../admin-components/get.js";
import postdata from "../admin-components/post.js";

document.getElementById("header").innerHTML = nav();

let existingProducts = [];

// Function to fetch all products and store them in `existingProducts`
const fetchProducts = async () => {
  existingProducts = await getdata("http://localhost:3000/product");
};

// Call fetchProducts when the page loads
fetchProducts();

const data = async (e) => {
  e.preventDefault();

  let radio1 = document.getElementById("radio1");
  let radio2 = document.getElementById("radio2");

  let gender = "null";

  if (radio1.checked) {
    gender = radio1.value;
  }
  if (radio2.checked) {
    gender = radio2.value;
  }

  let newProduct = {
    title: document.getElementById("title").value,
    image: document.getElementById("image").value,
    category: document.getElementById("category").value,
    gender: gender,
    price: document.getElementById("price").value,
  };

  // Check for duplicate
  const isDuplicate = existingProducts.some(product => 
    product.title === newProduct.title && 
    product.category === newProduct.category &&
    product.price === newProduct.price
  );

  if (isDuplicate) {
    alert("No, duplicate products are not allowed.");
  } else {
    console.log(newProduct);
    postdata("http://localhost:3000/product", newProduct);
    existingProducts.push(newProduct); // Update local cache with new product
  }
};

document.getElementById("for").addEventListener("submit", data);

const catui = (data) => {
  const categorySelect = document.getElementById("category");
  categorySelect.innerHTML = `<option selected hidden value="">Select Category</option>`;
  data.forEach((pro) => {
    let opt = document.createElement("option");
    opt.innerHTML = pro.category;
    opt.setAttribute("id", "cate");
    categorySelect.append(opt);
  });
};

const loadCategories = async () => {
  let res = await getdata("http://localhost:3000/category");
  let data = await res;
  console.log(data);
  catui(data);
};

loadCategories();
