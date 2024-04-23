import nav from "../components/navbar.js";

document.getElementById("navbar").innerHTML = nav();

const isexist=(user)=>{
    try {
        fetch(`http://localhost:3000/user?email=${user.email}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.length===0){
                alert("User not exist");
            }
            else{
                alert("User exist check password")
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const isvalid=(user)=>{
    fetch(`http://localhost:3000/user?email=${user.email}&password=${user.password}`)
    .then((res)=>res.json())
    .then((data)=>{
        if(data.length===1){
            window.location.href="../index.html"
        }
        else{
            isexist(user)
        }
    })
}

const headeuser =(e)=>{
    e.preventDefault()
    let user={
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }   
    isvalid(user)
}

document.getElementById("for").addEventListener('submit',headeuser); 