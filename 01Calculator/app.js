let text = ""; // this is the one that appears on the text box
let operation = "";
let total = 0;
let previousOperation = "";

// got sound from howler free sound library
const clickSound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
const playSound = () => {
    clickSound.currentTime = 0;
    clickSound.play();
}

const screen = document.querySelector("#input");


const operationsList = document.querySelectorAll(".operations");

const numbers = document.querySelectorAll(".numbers");


numbers.forEach(element => {
    element.addEventListener("click", (e) => {
        playSound();
        text += element.innerText;
        console.log(`text: ${text} and total ${total}`)
        screen.innerText = text;
    })
});

operationsList.forEach(element => {
    element.addEventListener("click", () => {
        playSound();
        operation = element.innerText;
        performOperation();
        previousOperation = operation;
    })
});

const performOperation = () => {
    console.log("high");
    if (text == "") {
        return;
    }
    if (total == 0) {
        total = parseFloat(text);
        text = "";
        return;
    }
    if (previousOperation == "+") {
        total += parseFloat(text);
    } else if (previousOperation == "−") {
        total -= parseFloat(text);
    } else if (previousOperation == "×") {
        total *= parseFloat(text);
    } else if (previousOperation == "÷") {
        total /= parseFloat(text);
    }
    text = "";
    console.log(`operationfn - text: ${text} and total: ${total}`)
    return;
}

const equals = document.querySelector("#equals")
equals.addEventListener("click", () => {
    playSound();
    performOperation();
    screen.innerText = total.toFixed(3);
    total = 0;
})

const deleteAll = document.querySelector("#deleteAll")
deleteAll.addEventListener("click", () => {
    playSound();
    text = "";
    total = 0;
    operation = "";
    previousOperation = "";
    screen.innerText = 0;
})

const deleteOne = document.querySelector("#delete")
deleteOne.addEventListener("click", () => {
    playSound();
    if (text.length == 0 || text.length == 1) {
        text = "";
        screen.innerText = 0;
        return;
    }
    text = text.slice(0, text.length-1);
    screen.innerText = text;
})

const decimalPoint = document.querySelector("#decimal");
decimalPoint.addEventListener("click", () => {
    playSound();
    text += ".";
    screen.innerText = text;
})