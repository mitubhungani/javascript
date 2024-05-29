const post = (datas) => {
  fetch("http://localhost:3000/qus", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datas),
  });
};

const add = (e) => {
  e.preventDefault();
  let hi = {
    question: document.getElementById("que").value,
    options: {
      A:document.getElementById("A").value,
      B:document.getElementById("B").value,
      C:document.getElementById("C").value,
      D:document.getElementById("D").value,
    },

    correct:(document.getElementById("op").value),
  };
  console.log(hi);
  post(hi);

  window.location.href = "http://localhost:5500/index.html";
};

document.getElementById("afffor").addEventListener("submit", add);
