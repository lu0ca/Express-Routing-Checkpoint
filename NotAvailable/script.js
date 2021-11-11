const Temps = new Date();
const days = Temps.getDay();
const hours = Temps.getHours();
const month = Temps.getMonth();
const year = Temps.getFullYear();
var day = Temps.getDate();
switch (month) {
    case 0:
        b = "Jan";
        break;
    case 1:
        b = "Feb";
        break;
    case 2:
        b = "Mar";
        break;
    case 3:
        b = "Apr";
        break;
    case 4:
        b = "May";
        break;
    case 5:
        b = "Jun";
        break;
    case 6:
        b = "July";
        break;
    case 7:
        b = "Aug";
        break;
    case 8:
        b = "Sep";
        break;
    case 9:
        b = "Oct";
        break;
    case 10:
        b = "Nov";
        break;
    case 11:
        b = "Dec";
        break;
}
if (days === 5) {
    day = day + 3;
} else if (days === 6) {
    day = day + 2;
} else {
    day = day + 1;
}

var countDownDate = new Date(`${b} ${day}, ${year} 09:00:00`);

console.log(b, day, year);

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (days === 0) {
        document.getElementById(
            "Timer"
        ).innerHTML = `It Still   ${hours}h : ${minutes}m : ${seconds}s To Open `;
    } else document.getElementById("Timer").innerHTML = `It Still ${days}d - ${hours}h : ${minutes}m : ${seconds}s To Open `;
}, 1000);
