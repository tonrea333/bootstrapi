
const randomBoot = document.querySelector(".btn.btn-secondary");
const randomPicture = document.querySelector(".card-img-top");
const tempButton = document.querySelector("#weatherbn");

console.log(randomPicture)
randomBoot.addEventListener("click", onClick);

function onClick() {


    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function (bootdata) {
            return bootdata.json();
        })
        .then(function (data) {
            console.log(data, "data")

            const x = data.message

            randomPicture.src = x
        })
}

tempButton.addEventListener("click", weatherClick);

function weatherClick() {
    const tempLocation = document.querySelector('input[type="text"]');
    const temperatureWeather = document.querySelector("#temperature")
    const windWeather = document.querySelector("#wind");
    const forecastWeather = document.querySelector("#forecast");
    const descriptionWeather = document.querySelector("#description");
    const tempValue = tempLocation.value;
    console.log(tempValue, "value")
    const cityHold = "https://goweather.herokuapp.com/weather/" + tempValue;
    console.log(cityHold, 'weather')

    fetch(cityHold)
        .then(function (bootdata) {
            return bootdata.json();
        })
        .then(function (data) {
            console.log(data, "weather")
          const a = data.temperature;
          const b =  data.wind;
          const c = data.description;
          const d = data.forecast

          temperatureWeather.innerText = a;
           windWeather.innerText = b;
           descriptionWeather.innerText = c;
           forecastWeather.innerText =  d;

           
           
            console.log(data.temperature)
           
            
            
            
            



        })

    //function to remove text in weather input field

    function removeText(tempLocation) {
      tempLocation.value = "";
    } removeText(tempLocation)
}