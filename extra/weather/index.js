let gio = navigator.geolocation.getCurrentPosition((pos) => {
  let lat = pos.coords.latitude;
  let log = pos.coords.longitude;
  getdata1(lat, log);
});

const getdata1 = async (lat, log) => {
  let link = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=f3a70117f07829317e62377b2bc195a4&units=metric`
  );
  let data = await link.json();

  console.log(data);

  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}`;
  document.querySelector(".city").innerHTML = `${data.name}`;
  document.querySelector(".humidity").innerHTML = `${Math.round(
    data.main.humidity
  )}`;
  document.querySelector(".wind").innerHTML = `${Math.round(data.wind.speed)}`;
};

const getdata2 = async (city) => {
  let link = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=f3a70117f07829317e62377b2bc195a4&units=metric&q=${city}`);
  let data = await link.json();

  console.log(data);

  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}`;
  document.querySelector(".city").innerHTML = `${data.name}`;
  document.querySelector(".humidity").innerHTML = `${Math.round(data.main.humidity)}`;
  document.querySelector(".wind").innerHTML = `${Math.round(data.wind.speed)}`;
};

document.querySelector(".bi").addEventListener("click", (e)=>{
    e.preventDefault()
    let city=document.querySelector(".city_nm").value
    console.log(city);
    getdata2(city)
})