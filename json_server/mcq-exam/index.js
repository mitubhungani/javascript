const get = () => {
  fetch("http://localhost:3000/qus")
    .then((res) => res.json())
    .then((datas) => ui(datas));
};
const post = (datas) => {
  fetch("http://localhost:3000/qus", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datas),
  });
};

const ui = (data) => {
  document.querySelector(".main").innerHTML = "";
  data.map((ele, i) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let qdiv = document.createElement("div");
    qdiv.setAttribute("id", "qdiv");

    let q = document.createElement("p");
    q.setAttribute("id", "q");
    q.innerHTML = ele.question;

    qdiv.append(q);

    let odiv = document.createElement("div");
    odiv.setAttribute("id", "odiv");

    let op1 = document.createElement("button");
    op1.setAttribute("id", "A");
    op1.setAttribute("class", "A");
    op1.innerHTML = ele.options.A;
    

    let op2 = document.createElement("button");
    op2.setAttribute("id", "B");
    op2.setAttribute("class", "B");
    op2.innerHTML = ele.options.B;

    let op3 = document.createElement("button");
    op3.setAttribute("id", "C");
    op3.setAttribute("class", "C");
    op3.innerHTML = ele.options.C;

    let op4 = document.createElement("button");
    op4.setAttribute("id", "D");
    op4.setAttribute("class", "D");
    op4.innerHTML = ele.options.D;

    odiv.append(op1, op2, op3, op4);
    box.append(qdiv, odiv);

    document.querySelector(".main").append(box);
    op1.addEventListener("click", () => {
      document.getElementsByClassName("A")[i].classList.add("false");
      document.getElementsByClassName("A")[i].disabled = true;
      document.getElementsByClassName("B")[i].disabled = true;
      document.getElementsByClassName("C")[i].disabled = true;
      document.getElementsByClassName("D")[i].disabled = true;
      document
        .getElementsByClassName(`${ele.correct}`)
        [i].classList.remove("false");
      document
        .getElementsByClassName(`${ele.correct}`)
        [i].classList.add("trues");
    });
    op2.addEventListener("click", () => {
      document.getElementsByClassName("B")[i].classList.add("false");
      document.getElementsByClassName("A")[i].disabled = true;
      document.getElementsByClassName("B")[i].disabled = true;
      document.getElementsByClassName("C")[i].disabled = true;
      document.getElementsByClassName("D")[i].disabled = true;
      document
        .getElementsByClassName(`${ele.correct}`)
        [i].classList.remove("false");
      document
        .getElementsByClassName(`${ele.correct}`)
        [i].classList.add("trues");
    });
    op3.addEventListener("click", () => {
      document.getElementsByClassName("C")[i].classList.add("false");
      document.getElementsByClassName("A")[i].disabled = true;
      document.getElementsByClassName("B")[i].disabled = true;
      document.getElementsByClassName("C")[i].disabled = true;
      document.getElementsByClassName("D")[i].disabled = true;
      document
        .getElementsByClassName(`${ele.correct}`)
        [i].classList.remove("false");
      document
        .getElementsByClassName(`${ele.correct}`)
        [i].classList.add("trues");
    });
    op4.addEventListener("click", () => {
      document.getElementsByClassName("D")[i].classList.add("false");
      document.getElementsByClassName("A")[i].disabled = true;
      document.getElementsByClassName("B")[i].disabled = true;
      document.getElementsByClassName("C")[i].disabled = true;
      document.getElementsByClassName("D")[i].disabled = true;
      document
        .getElementsByClassName(`${ele.correct}`)
        [i].classList.remove("false");
      document
        .getElementsByClassName(`${ele.correct}`)
        [i].classList.add("trues");
    });
  });
};

get();
