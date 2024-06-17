let product = JSON.parse(localStorage.getItem("products")) || [];

const data = (e) => {
  e.preventDefault();

  let ho = {
    title: document.getElementById("title").value,
    image: document.getElementById("image").value,
    price: document.getElementById("price").value,
  };
  console.log(ho);
  product.push(ho);

  localStorage.setItem("products", JSON.stringify(product));
};

document.querySelector(".for").addEventListener("submit", data);
