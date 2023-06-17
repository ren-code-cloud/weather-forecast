const apiKey = '2e09f41be277ddc6640bebdb66b9660c';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inputValue = document.querySelector(".__inputValue");
const btnSearch = document.querySelector('.search__button');
const country = document.getElementById("__country");
const cities = document.getElementById("__city");
const details = document.querySelectorAll("[data-col]");

btnSearch.addEventListener("click", () => {
   weather(inputValue.value);
})
const weather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
  const dataArray = [data.main.temp+"c", data.main.temp_max+"c",  data.main.temp_min + "c",  data.main.humidity,data.main.pressure, data.main.feels_like ]
  
  cities.innerHTML = data.name;
  details.forEach((elements, index) => {
    return details[index].innerHTML = dataArray[index];
  })
  /*
  details[0].innerHTML = data.main.temp;
  details[1].innerHTML = data.main.temp_max;
  details[2].innerHTML = data.main.temp_min;
  details[3].innerHTML = data.main.humidity;
  details[4].innerHTML = data.main.pressure;
  details[5].innerHTML = data.main.feels_like;
  */
  console.log(city)
  if(data.sys.country === "PH") {
     country.innerHTML = "Philippines";
  }
}