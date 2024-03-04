function ans() {
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let c = parseFloat(document.getElementById('c').value)
    let d = parseFloat(document.getElementById('d').value)

    document.getElementById('show').innerHTML = a - b - c - d;
}