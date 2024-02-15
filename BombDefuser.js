let defuserE1 = document.getElementById("defuser");
let timerE1 = document.getElementById("timer");
let counter = 10;

let uniqueId = setInterval(function() {
    counter = counter - 1;
    timerE1.textContent = counter;

    if (counter === 0) {
        timerE1.textContent = "BOOM";
        clearInterval(uniqueId);
    }
}, 1000);




defuserE1.addEventListener("keydown", function() {
    let bombDefuserText = defuserE1.value;
    if (event.key === "Enter" && bombDefuserText === "defuse" && counter !== 0) {
        timerE1.textContent = "You did it!";
        clearInterval(uniqueId);
    }
});