let latestDate = new Date(document.lastModified).toLocaleString();
document.getElementById("placeholder").innerHTML =
  "Last Updated: " + latestDate;

let date = new Date();
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = weekDays[date.getDay()];

const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let currentMonth = monthArray[date.getMonth()];

let currentDate = date.getDate();
let currentYear = date.getYear();

let dateParagraph = `${day}, ${currentDate} ${currentMonth} ${currentYear}`;

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


/*Lazy Images*/

const lazyImages = document.querySelectorAll("img[data-src]");
const windowHeight = document.documentElement.clientHeight;
const loadMoreBlock = document.querySelector(".load-more")

let lazyImagePositions = [];
if(lazyImages.length > 0){
  lazyImages.forEach(img =>{
    if(img.dataset.src){
      lazyImagePositions.push(img.getBoundingClientRect().top + pageYOffset)
      lazyScrollCheck();
    }
  })
};

window.addEventListener("scroll", lazyScroll);

function lazyScroll(){
  if(document.querySelectorAll("img[data-src]").length > 0){
    lazyScrollCheck();
  }
}

function lazyScrollCheck(){
  let imgIndex = lazyImagePositions.findIndex(
    item => pageYOffset > item - windowHeight
  )
  if(imgIndex >= 0){
    if(lazyImages[imgIndex].dataset.src){
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      lazyImages[imgIndex].removeAttribute("data-src");
    }
    delete lazyImagePositions[imgIndex]
  }
};


