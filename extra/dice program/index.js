const dice = () => {
    document.getElementById('box1').innerHTML = "";
    let d_num = Math.ceil(Math.random() * 6)
    document.getElementById('box1').innerHTML = d_num;
}
document.getElementById('btn').addEventListener('click', dice)

