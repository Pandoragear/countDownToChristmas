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
];

// defining the name to variable 
const dayLeft = document.querySelector(".dayLeft");
const deadline = document.querySelector(".deadline");
const items =  document.querySelectorAll(".deadline-format h4")

//Date
let futureDate = new Date(2021,11,24, 59,59,59);
console.log(futureDate);

const year = futureDate.getFullYear();

const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();


dayLeft.textContent = `Count down till Christmas  ${hours}:${minutes}pm, ${year} `;
