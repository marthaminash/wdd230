let latestDate = new Date(document.lastModified).toLocaleString();
document.getElementById('placeholder').innerHTML = "Last Updated: " + latestDate;

let date = new Date(year, month, day);
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekDays[date.getDay()];

const monthArray = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
let currentMonth = monthArray[date.getMonth()];

let currentDate = date.getDate();
let currentYear = date.getYear();


let dateParagraph = `${day}, ${currentDate} ${currentMonth} ${currentYear}`;

document.getElementById('dateParagraph').innerHTML = "Hi";


const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})