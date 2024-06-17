const postdata=(url,data)=>{
    fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data),
    })
    .then((res)=>res.json())
    .then((data)=>{})
}

export default postdata;