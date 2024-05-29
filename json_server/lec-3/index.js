const postdata = (data) => {
  fetch("http://localhost:3000/student", {
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify(data),
  }).then((data) => {});
};

let id = -1;
const add = (e) => {
  e.preventDefault();
  let hi = {
    name: document.getElementById("name").value,
    rollno: document.getElementById("rollno").value,
    html: parseInt(document.getElementById("html").value),
    css: parseInt(document.getElementById("css").value),
    js: parseInt(document.getElementById("js").value),
    react: parseInt(document.getElementById("react").value),
    node: parseInt(document.getElementById("node").value),
  };
  console.log(hi);
  console.log(id);
  if (id == -1) {
    postdata(hi);
  } else {
    updatedata(id, hi);
  }
};
document.getElementById("for").addEventListener("submit", add);

const edit = (data) => {
  document.getElementById("name").value = data.name;
  document.getElementById("rollno").value = data.rollno;
  document.getElementById("html").value = data.html;
  document.getElementById("css").value = data.css;
  document.getElementById("js").value = data.js;
  document.getElementById("react").value = data.react;
  document.getElementById("node").value = data.node;
  id = data.id;
};

const jash_jatu = (data) => {
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

    let total = document.createElement("td");
    total.innerHTML = ele.html + ele.css + ele.js + ele.react + ele.node;
    total.setAttribute("id", "total");

    let to=ele.html + ele.css + ele.js + ele.react + ele.node

    let result = document.createElement("td");
    result.innerHTML = (ele.html + ele.css + ele.js + ele.react + ele.node) / 5;
    result.setAttribute("id", "result");

    let show = document.createElement("td");
    if (to <= 200) {
      show.innerHTML = "Fail";
      show.style.backgroundColor = "red";
    } else {
      show.innerHTML = "Pass";
      show.style.backgroundColor = "green";
    }

    let del = document.createElement("td");
    del.innerHTML = "Delete";
    del.setAttribute("id", "del");

    del.addEventListener("click", () => deldata(ele.id));

    let up = document.createElement("td");
    up.innerHTML = "Update";
    up.setAttribute("id", "update");

    up.addEventListener("click", () => edit(ele));

    box.append(
      name,
      rollno,
      html,
      css,
      js,
      react,
      node,
      total,
      result,
      show,
      del,
      up
    );
    document.getElementById("show").append(box);
  });
};

const updatedata = (idd, data) => {
  fetch(`http://localhost:3000/student/${idd}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

const get = () => {
  fetch("http://localhost:3000/student")
    .then((res) => res.json())
    .then((data) => jash_jatu(data));
};

const deldata = (id) => {
  fetch(`http://localhost:3000/student/${id}`, {
    method: "DELETE",
  });
};
get();
