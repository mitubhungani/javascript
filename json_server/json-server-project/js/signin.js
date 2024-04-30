import postdata from "../components/post.js";

const log = (e) => {
  e.preventDefault();
  let data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  console.log(data);
  isExist(data);
};
const isExist = async (dataa) => {
  try {
    let res = await fetch(
      `http://localhost:3000/user/?email=${dataa.email}&password=${dataa.password}`
    );
    let datas = await res.json();
    console.log(datas);
    if (datas.length > 0) {
      window.location.href = "../html/index.html";
    }
    // if (datas.length == 1) {
    //   alert("no");
    // }
  } catch (error) {}
};

// const isnotexist =async (dataa)=>{
//     try {
//         let res = await fetch(
//           `http://localhost:3000/user/?email=${dataa.email}&password=${dataa.password}`
//         );
//         let datas = await res.json();
//         console.log(datas);
//         if (datas.length != 0) {
//           alert("no")
//         }
//       } catch (error) {}
// }

document.querySelector(".form").addEventListener("submit", log);

// import getData from "../components/get.js"; // Ensure this module exports what you need, if used

// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector(".form");
//     form.addEventListener("submit", log);
// });

// async function log(e) {
//     e.preventDefault();

//     let data = {
//         email: document.getElementById('email').value,
//         password: document.getElementById('password').value
//     };

//     console.log(data);

//     try {
//         // Use Fetch API to send a POST request to your server
//         const response = await fetch("http://localhost:3000/user", {
//             method: 'POST', // Assuming the server expects POST method for login
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data) // Convert the JavaScript object to a JSON string
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json(); // Decode JSON response

//         // Check if user is valid
//         if (result.exists) {
//             alert("Yes"); // Assuming 'exists' is a boolean indicating user existence
//             window.location.href = "../html/index.html"; // Redirect if user exists
//         } else {
//             alert("No");
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert("Failed to connect to the server.");
//     }
// }
