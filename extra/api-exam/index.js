// --------------menu-------------------------

document.querySelector(".menu-bar").classList.add("hidden");

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".menu-bar").classList.toggle("hidden");
});

let datas=[]

const api = (data) => {
  document.querySelector(".main").innerHTML=""
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
};


const sortlow = (val) => {
    console.log(datas);
    if (val == "lth") {
      let price = datas.sort((a, b) => a.price - b.price);
      console.log(price);
      api(price);
    }
    else {
      let price = datas.sort((a, b) => b.price - a.price);
      console.log(price);
      api(price);
    }
  };
  const Search=(val)=>{
    let temp= datas.filter((ele)=>ele.title.toLowerCase().includes(val.toLowerCase()))
    console.log(temp);
    api(temp)
}
const handleSearch=(e)=>{
    e.preventDefault();

    let val=document.querySelector('.search-box').value;
    Search(val)
}
const getData =async()=>{
  let res=await fetch('https://fakestoreapi.com/products')
  let data=await res.json();
  datas=data
  console.log(data);

  api(datas)
  document.querySelector(".lth").addEventListener("click", () => sortlow("lth"));
  document.querySelector(".htl").addEventListener("click", () => sortlow("htl"));
  document.querySelector('.right').addEventListener('submit',handleSearch)
  

}

  
  

getData()