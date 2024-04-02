let product = JSON.parse(localStorage.getItem("products")) || []
let cart = JSON.parse(localStorage.getItem("carts")) || []

const cartlist=()=>{
    let cart= 0
    if(cart.length==0){
        document.getElementById("cartitem").innerHTML="no"
    }
    else
    document.getElementById( "cartitem" ).innerHTML = product
}

document.getElementById("main").addEventListener("submit",cartlist)