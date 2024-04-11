// --------------menu-------------------------

document.querySelector(".menu-bar").classList.add("hidden");

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".menu-bar").classList.toggle("hidden");
});

let data = [];

const api = (data) => {
 data.map((ele) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let image = document.createElement("div");
    image.setAttribute("id", "image");

    let img = document.createElement("img");
    img.src = ele.image;
    img.setAttribute("id", "img");

    let title = document.createElement("p");
    title.innerHTML = ele.title;
    title.setAttribute("id", "title");

    // let disc = document.createElement("p");
    // disc.innerHTML = ele.description;
    // disc.setAttribute("id", "disc");

    let price = document.createElement("p");
    price.innerHTML = `RS: ${ele.price}`;
    price.setAttribute("id", "price");

    let cat = document.createElement("p");
    cat.innerHTML = ele.category;
    cat.setAttribute("id", "cat");

    image.append(img);

    box.append(image, title, price, cat);
    document.querySelector(".main").append(box);
  });
  console.log(data);
};

fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then(datas => data = datas
)
window.addEventListener('load',() => sortlow("lth"))
const sortlow = (val) => {
    console.log("hi");
    if (val == "lth") {
      let price = data.sort((a, b) => a.price - b.price);
      console.log(price);
      api(price);
    }
  };
  function hi()
{
 let time=setTimeout(api(data),2000)
 console.log(time);
}
  document.querySelector(".lth").addEventListener("click", () => sortlow("lth"));
  window.addEventListener("load",hi)

