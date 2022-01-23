const API_KEY = "7ae9c5a3b23f30ef456ed4a9fa1f7a90";
function onGeoSuecess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weatherContainer = document.querySelector('#weather-container');
    const city = weatherContainer.querySelector('.city');
    const weather = weatherContainer.querySelector('.weather');
    const currentTemp = weatherContainer.querySelector('.temperature');
    city.textContent = data.name;
    weather.textContent = data.weather[0].main;
    currentTemp.textContent = `/ ${Math.floor(data.main.temp)}`;
    // console.log(currentTemp)
  });

}
function onGeoError(){
  alert(`Can't find your positon.`)
}
navigator.geolocation.getCurrentPosition(onGeoSuecess,onGeoError);
 