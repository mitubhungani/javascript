let localcart = JSON.parse(localStorage.getItem("carts")) || [];

const show = (data) => {
  document.getElementById("main").innerHTML = "";
  data.map((pro, i) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let head = document.createElement("div");
    head.setAttribute("id", "head");

    let img = document.createElement("img");
    img.src = pro.img;
    img.setAttribute("id", "img");

    
    // let cart= document.createElement("btn")
    // cart.innerHTML=`<i class="bi bi-basket"></i>`
    // cart.setAttribute("id","cart")

    // cart.addEventListener("click", ()=>{
    //     let cartqty={...pro,qty:1}
    //     console.log(pro);
    //     localcart.push(cartqty)
    //     localStorage.setItem("carts",JSON.stringify(localcart))
    // });

    let center = document.createElement("div");
    center.setAttribute("id", "center");



    let title = document.createElement("h2");
    title.innerHTML = pro.title;
    title.setAttribute("id", "title");


    let price = document.createElement("p");
    price.innerHTML = `Rs: ${pro.price}`;
    price.setAttribute("id", "price");

    // let menu = document.createElement("div");
    // menu.setAttribute("id", "menu");

    let category = document.createElement("span");
    category.innerHTML = pro.category;
    category.setAttribute("id", "category");

    let midcenter=document.createElement("div")
    midcenter.setAttribute("id","midcenter")

    let minus = document.createElement("btn");
    minus.innerHTML=`<i class="bi bi-dash"></i>`
    minus.setAttribute("id","minus")

    let qty=document.createElement("input")
    qty.innerHTML="1"
    qty.type= "number"
    qty.setAttribute("id","qty")

    let plus = document.createElement("btn");
    plus.innerHTML=`<i class="bi bi-plus"></i>`
    plus.setAttribute("id","plus")

    let left=document.createElement('div')
    left.setAttribute("id","left");

    let del=document.createElement("btn")
    del.innerHTML=`<i class="bi bi-trash-fill"></i>`
    del.setAttribute("id","del")

    head.append(img);

    center.append(title,price,category);
    midcenter.append(minus,qty,plus)
    left.append(del)
    box.append(head,center,midcenter,left);

    // menu.append(category, buy);

    // box.append(head, title, price, menu);
    document.getElementById("main").append(box);
  });
};

show(localcart);

// let localcart = JSON.parse(localStorage.getItem("carts")) || [];

// const show = (data) => {
//   document.getElementById("main").innerHTML = "";
//   data.map((pro, i) => {
//     let box = document.createElement("div");
//     box.setAttribute("id", "box");

//     let head = document.createElement("div");
//     head.setAttribute("id", "head");

//     let title = document.createElement("h2");
//     title.innerHTML = pro.title;
//     title.setAttribute("id", "title");

//     // let cart= document.createElement("btn")
//     // cart.innerHTML=`<i class="bi bi-basket"></i>`
//     // cart.setAttribute("id","cart")

//     // cart.addEventListener("click", ()=>{
//     //     let cartqty={...pro,qty:1}
//     //     console.log(pro);
//     //     localcart.push(cartqty)
//     //     localStorage.setItem("carts",JSON.stringify(localcart))
//     // });

//     let img = document.createElement("img");
//     img.src = pro.img;
//     img.setAttribute("id", "img");

//     let price = document.createElement("p");
//     price.innerHTML = `Rs: ${pro.price}`;
//     price.setAttribute("id", "price");

//     let menu = document.createElement("div");
//     menu.setAttribute("id", "menu");

//     let category = document.createElement("span");
//     category.innerHTML = pro.category;
//     category.setAttribute("id", "category");

//     let buy = document.createElement("button");
//     buy.innerHTML = "Buy";
//     buy.setAttribute("id", "buybtn");

//     head.append(title);

//     menu.append(category, buy);

//     box.append(head, img, price, menu);
//     document.getElementById("main").append(box);
//   });
// };

// show(localcart);
