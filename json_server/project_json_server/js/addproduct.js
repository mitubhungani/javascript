import nav from "../components/navbar.js";

document.getElementById("navbar").innerHTML = nav();

const productpost=(url,data)=>{
    try {
        fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data),
        })
    } catch (error) {
        console.log(error);
    }
}

const info=(e)=>{
    e.preventDefault()

    let hi={
        title:document.getElementById('title').value,
        image:document.getElementById('img').value,
        price:document.getElementById('price').value,
    }
    console.log(hi);
    productpost("http://localhost:3000/product",hi)
}
document.querySelector(".main").addEventListener("submit",info)