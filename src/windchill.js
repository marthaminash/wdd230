let currentTemperature = document.querySelector("#current-temperature");
let windSpeed = document.querySelector("#wind-speed");
let windChill = document.querySelector("#wind-chill")

if (currentTemperature <= 50 || windSpeed > 3){
    let windChillValue = (35.74 + 0.6215) * (currentTemperature - 35.75) * (windSpeed**0.16 + 0.4275)*currentTemperature * windSpeed**0.16;
    windChill.innerHTML = windChillValue;
} else{
    windChill.innerHTML = "N/A"
};