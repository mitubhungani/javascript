let datas = []

const show = (e) => {
    e.preventDefault();
    let Name = document.getElementById('ename').Value;
    let job = document.getElementById('jrole').Value;
    let dept = document.getElementById('edept').Value;
    let salary = document.getElementById('esal').Value;
    let year = document.getElementById('eyear').Value;
    let email = document.getElementById('email').Value;
    let role_type;
    let del;

    if (year > 5) {
        role_type = "s";
    }
    else {
        role_type = "j";
    }

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerHTML = Name;
    let td2 = document.createElement('td');
    td2.innerHTML = job;
    let td3 = document.createElement('td');
    td3.innerHTML = dept;
    let td4 = document.createElement('td');
    td4.innerHTML = salary;
    let td5 = document.createElement('td');
    td5.innerHTML = year;
    let td6 = document.createElement('td');
    td6.innerHTML = email;
    let td7 = document.createElement('td');
    td7.innerHTML = role_type;
    let td8 = document.createElement('td');
    td8.innerHTML = "Delete";
    td8.classList.add('backgroung-color:red');
    td8.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    });
    td8.addEventListener("click", dis)

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

    let data = {
        Name: Name,
        job: job,
        dept: dept,
        salary: salary,
        year: year,
        email: email,
        role_type: role_type,
        del: del,
    }

    datas.push(data);

    document.getElementById('table-main').append(tr);



};

const dis = () => {
    let n = datas.length;
    let t_salary = 0;
    for (let i = 0; i < n; i++) {
        t_salary += datas[i].salary
    }

    document.getElementById('temp').innerHTML = `total:-${n}`;
    document.getElementById('tsal').innerHTML = `total:-${t_salary}`;
}

document.getElementById('box').addEventListener('submit', show)
document.getElementById('box').addEventListener('submit', dis)