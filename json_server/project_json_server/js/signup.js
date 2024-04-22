import nav from "../components/navbar.js";

document.getElementById("navbar").innerHTML = nav();

//signup form validation
() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
};

// post

const userpost = (url,data) => {
  try {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

const isexists1 = (user) => {
  try {
    fetch(`http://localhost:3000/user?username=${user.username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length == 0) {
          isexists(user)
        } else {
          alert(`${user.username} Username is already exists.`);
        }
      });
    } catch (error) {
      console.log(error);
    }
};

const isexists = (user) => {
  try {
    fetch(`http://localhost:3000/user?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length == 0) {
          userpost("http://localhost:3000/user", user);
        } else {
          alert(`${user.email} Email id is already exists.`);
        }
      });
    } catch (error) {
      console.log(error);
    }
};


//velidation
const user = (e) => {
  e.preventDefault();

  let user = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  isexists1(user);
  
};

document.getElementById("for").addEventListener("submit", user);
