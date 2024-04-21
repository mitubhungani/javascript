
const add = (e) => {
  e.preventDefault();
  let hi = {
    name: document.getElementById("name").value,
    rollno: document.getElementById("rollno").value,
    html: document.getElementById("html").value,
    css: document.getElementById("css").value,
    js: document.getElementById("js").value,
    react: document.getElementById("react").value,
    node: document.getElementById("node").value,
  };
  console.log(hi);
};

const jashu_jatu = (data) => {
  data.map((ele, i) => {
    let box = document.createElement("tr");
    box.setAttribute("id", "box");

    let name = document.createElement("td");
    name.innerHTML = ele.name;
    name.setAttribute("id", "name");

    let rollno = document.createElement("td");
    rollno.innerHTML = ele.rollno;
    rollno.setAttribute("id", "rollno");

    let html = document.createElement("td");
    html.innerHTML = ele.html;
    html.setAttribute("id", "html");

    let css = document.createElement("td");
    css.innerHTML = ele.css;
    css.setAttribute("id", "css");

    let js = document.createElement("td");
    js.innerHTML = ele.js;
    js.setAttribute("id", "js");

    let react = document.createElement("td");
    react.innerHTML = ele.react;
    react.setAttribute("id", "react");

    let node = document.createElement("td");
    node.innerHTML = ele.node;
    node.setAttribute("id", "node");

    box.append(name, rollno, html, css, js, react, node);
    document.getElementById("show").append(box);
  });
};

document.getElementById("for").addEventListener("submit", add);