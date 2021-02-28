const months = [
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
    "December",
    
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday", 
    "Wednesday",
    "Thursday", 
    "Friday", 
    "Saturday",
];

// defining the name to variable 
const dayLeft = document.querySelector(".dayLeft");
const deadline = document.querySelector(".deadline");
const items =  document.querySelectorAll(".deadline-format h4")

//Date
// Date = year, Month, Date, hours, minutes 
let futureDate = new Date(2021, 11, 24, 11,59,59);
console.log(futureDate);

const year = futureDate.getFullYear();

const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];


dayLeft.textContent = `Count down till Christmas - ${weekday} ${month}  ${date}, ${year} at ${hours}:${minutes}pm!`;
