function ans() {
    let a = parseFloat(document.getElementById('a').value)

    if (a % 2 == 0) {
        document.getElementById('show').innerHTML = "yes";
    }
    else {
        document.getElementById('show').innerHTML = "no";
    }
}