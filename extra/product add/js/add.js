let product = JSON.parse(localStorage.getItem("products")) || []

const data = (e) => {
    e.preventDefault();
    let data = document.getElementById("title").value
    console.log(data);
    let hi = {
        title: document.getElementById("title").value,
        img: document.getElementById("img").value,
        price: document.getElementById("price").value
    }

    console.log(hi);
    product.push(hi)
    localStorage.setItem("products", JSON.stringify(product))
    window.location.href = "/pages/index.html"
}

document.querySelector(".add-product-form").addEventListener("submit", data)