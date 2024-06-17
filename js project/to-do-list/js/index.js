import deletedata from "../components/delete.js";
import postdata from "../components/post.js";
import dataupadte from "../components/update.js";

let id = -1;

const add = (e) => {
  e.preventDefault();

  let hi = {
    task: document.getElementById("task").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
  };

  const selectedDate = new Date(hi.date);
  const currentDate = new Date();

  // Check if the selected date is in the past
  if (selectedDate < currentDate.setHours(0, 0, 0, 0)) {
    alert("Please select a future date.");
    return;
  }

  if (id == -1) {
    postdata(`http://localhost:3000/todos`, hi);
  } else {
    dataupadte(`http://localhost:3000/todos/${id}`, hi);
  }
  get();

  
  console.log(hi);
};
document.getElementById("for").addEventListener("submit", add);

const edit = (data) => {
  document.getElementById("task").value = data.task;
  document.getElementById("date").value = data.date;
  document.getElementById("time").value = data.time;
  id = data.id;
};




const ui = (data) => {
  
  document.getElementById("show").innerHTML = "";
  data.map((tas, i) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let num = document.createElement("span");
    num.innerHTML = `${i + 1}.`;

    let first = document.createElement("div");
    first.setAttribute("id", "first");

    let task = document.createElement("h3");
    task.innerHTML = tas.task;
    task.setAttribute("id", "tasks");

    let date = document.createElement("h3");
    date.innerHTML = tas.date;
    date.setAttribute("id", "dates");

    let time = document.createElement("h3");
    time.innerHTML = tas.time;
    time.setAttribute("id", "times");

    

    let second = document.createElement("div");
    second.setAttribute("id", "second");

    let del = document.createElement("span");
    del.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    del.setAttribute("id", "del");

    del.addEventListener("click", () => {
      deletedata(`http://localhost:3000/todos/${tas.id}`);
    });

    let update = document.createElement("span");
    update.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    update.setAttribute("id", "update");
    update.addEventListener("click", () => {
      edit(tas);
    });

    first.append(num, task, date, time);
    second.append(del, update);

    box.append(first, second);
    document.getElementById("show").append(box);
  });
};

const get = async () => {
  let res = await fetch("http://localhost:3000/todos");
  let data = await res.json();
  console.log(data);
  ui(data);
};

get();





