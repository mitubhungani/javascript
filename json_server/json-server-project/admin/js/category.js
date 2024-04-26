import nav from "../admin-components/admin-nav.js";
import deletedata from "../admin-components/delete.js";
import getdata from "../admin-components/get.js";
import postdata from "../admin-components/post.js";
import updatedata from "../admin-components/update.js";

document.getElementById("header").innerHTML = nav();

const addcat = (e) => {
  e.preventDefault();
  let hi = {
    category: document.getElementById("category").value,
  };
  console.log(hi);
  console.log(id);
  if (id == -1) {
    postdata("http://localhost:3000/category", hi);
  } else {
    updatedata(`http://localhost:3000/category/${id}`, hi);
  }
};
getdata("http://localhost:3000/category");

let id = -1;

const edit = (data) => {
  document.getElementById("category").value = data.category;
  id = data.id;
  document.getElementById("for").addEventListener("submit", addcat);
};

const catui = (data) => {
  document.querySelector(".show").innerHTML = "";
  let box = document.createElement("div");
  box.setAttribute("id", "box");

  data.map((cat, i) => {
    let categoryname = document.createElement("p");
    categoryname.innerHTML = cat.category;
    categoryname.setAttribute("id", "cat");

    let span = document.createElement("span");
    span.innerHTML = `${i + 1}.`;
    span.setAttribute("id", "Label");

    let update = document.createElement("span");
    update.innerHTML = `<i class="fa-solid fa-pen-to-square fa-lg"></i>`;
    update.setAttribute("id", "del");

    update.addEventListener("click", () => {
      edit(cat);
    });

    let del = document.createElement("span");
    del.innerHTML = `<i class="fa-solid fa-trash-can fa-lg"></i>`;
    del.setAttribute("id", "del");

    del.addEventListener("click", () => {
      deletedata(`http://localhost:3000/category/${cat.id}`);
    });

    let add_grp = document.createElement("div");
    add_grp.setAttribute("id", "AddGroup");

    add_grp.append(span, categoryname, update, del);

    box.append(add_grp);
    document.querySelector(".show").append(box);
  });
};

const get = async () => {
  let res = await fetch("http://localhost:3000/category");
  let data = await res.json();
  catui(data);
  document.getElementById("for").addEventListener("submit", addcat);
};
get();
