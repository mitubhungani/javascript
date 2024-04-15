const get =()=>{
  fetch("http://localhost:3000/product")
  .then((res)=>res.json())
  .then((datas)=>ui(datas))
}
const post =(datas)=>{
  fetch("http://localhost:3000/product",{
    method:"POST",
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify(datas)
  })
}

const update=(id,datas)=>{
  fetch(`${id}`,{
    method:"PATCH",
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(datas)
  })
}

const dele=(id)=>{
  fetch(`http://localhost:3000/product/${id}`,{
    method:"DELETE"
  })
}


const show = (e) => {
  e.preventDefault();
  let hi = {
    title: document.getElementById("title").value,
    image: document.getElementById("img").value,
    price: document.getElementById("price").value,
  };
  console.log(hi);
  post(hi)
  get()
};
document.getElementById("for").addEventListener("submit", show);

const ui = (data) => {
  document.getElementById("main").innerHTML = "";
  data.map((ele) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let title = document.createElement("p");
    title.innerHTML = ele.title;
    title.setAttribute("id", "title");

    let image = document.createElement("img");
    image.src = ele.image;
    image.setAttribute("id", "img");

    let price = document.createElement("p");
    price.innerHTML = ele.price;
    price.setAttribute("id", "price");

    let btn=document.createElement("div")
    btn.setAttribute("id","btn")

    let up = document.createElement("button");
    up.innerHTML = "Update";
    up.setAttribute("id", "up");

    

    let del = document.createElement("button");
    del.innerHTML = "Delete";
    del.setAttribute("id", "del");

    del.addEventListener("click", () => {dele(ele.id)});

    btn.append(up,del)

    box.append(title, image, price,btn);
    document.getElementById("main").append(box);
  });
};

document.getElementById("main").addEventListener("submit", ui);
get()