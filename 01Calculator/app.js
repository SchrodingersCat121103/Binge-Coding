let text = ""; // this is the one that appears on the text box
let operation = "";
let total = 0;
let previousOperation = "";

const screen = document.querySelector("#input");


const operationsList = document.querySelectorAll(".operations");

const numbers = document.querySelectorAll(".numbers");


numbers.forEach(element => {
    element.addEventListener("click", (e) => {
        text += element.innerText;
        console.log(`text: ${text} and total ${total}`)
        screen.innerText = text;
    })
});

operationsList.forEach(element => {
    element.addEventListener("click", () => {
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
    performOperation();
    screen.innerText = total.toFixed(3);
    total = 0;
})

const deleteAll = document.querySelector("#deleteAll")
deleteAll.addEventListener("click", () => {
    text = "";
    total = 0;
    operation = "";
    previousOperation = "";
    screen.innerText = 0;
})

const deleteOne = document.querySelector("#delete")
deleteOne.addEventListener("click", () => {
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
    text += ".";
    screen.innerText = text;
})