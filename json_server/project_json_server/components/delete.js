const DeleteProduct =()=>{
    try {
        fetch(`http://localhost:3000/cart/${id}`,{
            method: 'DELETE' ,
        })
    } catch (error) {
        console.log(error.massage);
    }
}

export default DeleteProduct