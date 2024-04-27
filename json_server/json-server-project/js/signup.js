import postdata from "../components/post.js";

const isexist1 = (use) => {
  try {
    fetch(`http://localhost:3000/user?username=${use.username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length == 0) {
          isexist2(use);
        } else {
          alert(`${use.username} Username is already exist.`);
        }
      });
  } catch (error) {
    console.log(error);
  }
};

const isexist2 = (use) => {
  try {
    fetch(`http://localhost:3000/user?email=${use.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length == 0) {
          postdata("http://localhost:3000/user", use);
        } else {
          alert(`${use.email} Email is already exist.`);
        }
      });
  } catch (error) {
    console.log(error);
  }
};

const user = (e) => {
  e.preventDefault();

  let use = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  console.log(use);
  isexist1(use);
  window.location.href = "../html/index.html";
};

document.querySelector(".form").addEventListener("submit", user);
