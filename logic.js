let days = document.querySelector(".days")
let hours = document.querySelector(".hours")
let min = document.querySelector(".min")
let sec = document.querySelector(".sec")
// let daytext = document.querySelector(".daytext")
// let hourtext = document.querySelector(".daytext")
// let mintext = document.querySelector(".daytext")
// let sectext = document.querySelector(".daytext")
let countdown = () => {
    let futureDate = new Date("13 May 2030");
    let currDate = new Date();
    let countdowndate = futureDate-currDate;
    // console.log(countdowndate)
    let currdays = Math.floor((countdowndate / 1000 / 60 / 60 /24));
    let currhours = Math.floor((countdowndate / 1000 / 60 / 60) % 24);
    let currmin = Math.floor((countdowndate / 1000 / 60) % 60);
    let currsec = Math.floor((countdowndate / 1000) % 60);

    days.innerHTML = `${currdays} `;
    hours.innerHTML = `${currhours} `;
    min.innerHTML = `${currmin} `;
    sec.innerHTML = `${currsec} `;
}

setInterval(countdown,1000);