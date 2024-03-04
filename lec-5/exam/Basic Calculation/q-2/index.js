function sum() {
    let a = parseFloat(document.getElementById("a").value)
    let b = parseFloat(document.getElementById("b").value)
    let c = parseFloat(document.getElementById("c").value)
    let d = parseFloat(document.getElementById("d").value)
    let e = parseFloat(document.getElementById("e").value)

    document.getElementById("sum").innerHTML = (a + b + d) - (c + e)
}