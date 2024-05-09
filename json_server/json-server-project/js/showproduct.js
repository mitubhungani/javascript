import nav from "../components/navbar.js";
import getdata from "../components/get.js";

document.getElementById("header").innerHTML = nav();


const imgui=(data)=>{
    document.querySelector(".image-side").innerHTML=""
data.map((img)=>{
    let box= document.createElement("div")
    box.setAttribute("id","box")

    let imgbox=document.createElement("img")
    imgbox.src=img.image;
    imgbox.setAttribute("id","imgbox")

    box.append(imgbox)
    document.querySelector(".image-side").append(box)
})
}

let get= async()=>{
    let res= await getdata(`http://localhost:3000/product/${product.image}`)
    let data = await res;
    imgui(data)
}

get()