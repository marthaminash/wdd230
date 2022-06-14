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
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})
);
