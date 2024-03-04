function change() {

    let a = parseFloat(document.getElementById("a").value)
    let b = parseFloat(document.getElementById("b").value)

    a = a + b;
    b = a - b;
    a = a - b;

    document.getElementById("c").innerHTML = a
    document.getElementById("d").innerHTML = b
}