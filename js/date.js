var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

function timer() {
    var start = new Date(2021, 5, 13, 20, 53);
    var current = new Date();

    var totalDays = Math.floor((current - start) / (1000 * 60 * 60 * 24));
    var years = Math.floor(totalDays / 365);
    var remainingDays = totalDays % 365;
    var months = Math.floor(remainingDays / 30);
    var days = remainingDays % 30;

    document.getElementById("d").innerHTML = years;
    document.getElementById("h").innerHTML = months;
    document.getElementById("m").innerHTML = days;
}

function fadein() {
    if (val < 1) {
        val += 0.025;
        dv.style.opacity = val;
    } else {
        clearInterval(fadeinInterval);
        if (ok == 2) {
            ok += 1;
        }
    }
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);

fadeInterval = setInterval(function() {
    if (ok == 2) {
        clearInterval(fadeInterval);
        fadeinInterval = setInterval(fadein, 50);
    }
}, 50);
