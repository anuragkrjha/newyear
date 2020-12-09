
const newyear = "1 jan 2021";

function countdown() {
    const newyeardate = new Date(newyear);
    const currentdate = new Date();

   const totalseconds = Math.floor(newyeardate - currentdate) / 1000;

   
   const day = Math.floor(totalseconds / 3600 /24);
  const hour = Math.floor(totalseconds /3600) % 24;
   const minute = Math.floor(totalseconds /60) % 60;
    const second = Math.floor(totalseconds) % 60;


   const daysEl = document.getElementById("days").innerHTML = day; 
   const hoursEl = document.getElementById("hours").innerHTML = hour;
   const minsEl = document.getElementById("mins").innerHTML = minute;
  const secondEl = document.getElementById("seconds").innerHTML = second;
   
   
}

countdown();
setInterval(countdown, 1000);



