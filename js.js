var ul = document.getElementsByTagName("ul")

var seven = ul[0].children[0]
var eight = ul[0].children[1]
var nine = ul[0].children[2]
var four = ul[1].children[0]
var five = ul[1].children[1]
var six = ul[1].children[2]
var one = ul[2].children[0]
var two = ul[2].children[1]
var three = ul[2].children[2]
var C = ul[3].children[0]
var zero = ul[3].children[1]
var equals = ul[3].children[2]

var plus = ul[0].children[3]
var minus = ul[1].children[3]
var multiply = ul[2].children[3]
var divide = ul[3].children[3]

var operationsInput = document.getElementById("operationsInput")
operationsInput.disabled = true

var arr = [zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, multiply, divide]

arr.forEach(element => {
    element.addEventListener("click", function () {
        console.log(element.innerHTML)
        operationsInput.value = operationsInput.value + element.innerHTML
    })

});

function addition(a, b) {
    return (a + b)
}
function substruction(a, b) {
    return (a - b)
}
function multiplication(a, b) {
    return (a * b)
}
function division(a, b) {
    return (a / b)
}

function splitOperation(operation) {
    var arr = [];
    var number = "";
    var counter = 0;
    for (var i = 0; i < operation.length; i++) {
        if (operation[i] === "+" || operation[i] === "-" || operation[i] === "*" || operation[i] === "/") {
            arr.push(number)
            arr.push(operation[i])
            number = ""
            counter = i + 1;
        }
        else {
            number = number + operation[i]
        }
    }
    arr.push(operation.substring(counter))
    return arr
}

function calculate(arrOperation) {
    var answer = 0;
    switch (arrOperation[1]) {
        case "+":
            answer = addition(parseInt(arrOperation[0]), parseInt(arrOperation[2]))
            break;
        case "-":
            answer = substruction(parseInt(arrOperation[0]), parseInt(arrOperation[2]))
            break;
        case "*":
            answer = multiplication(parseInt(arrOperation[0]), parseInt(arrOperation[2]))
            break;
        case "/":
            answer = parseInt(division(parseInt(arrOperation[0]), parseInt(arrOperation[2])))
            break;
        default:
            break;
    }
    for (var i = 3; i <= (arrOperation.length - 1); i = i + 2) {
        switch (arrOperation[i]) {
            case "+":
                answer = addition(answer, parseInt(arrOperation[i + 1]))
                break;
            case "-":
                answer = substruction(answer, parseInt(arrOperation[i + 1]))
                break;
            case "*":
                answer = multiplication(answer, parseInt(arrOperation[i + 1]))
                break;
            case "/":
                answer = parseInt(division(answer, parseInt(arrOperation[i + 1])))
                break;
            default:
                break;
        }
    }
    return answer
}

document.body.addEventListener("keydown", function (e) {
    if ((e.keyCode <= 111 && e.keyCode >= 96) || e.keyCode == 8 || e.keyCode == 13 || e.key === "c" || e.key === "C") {
        if (e.key === "Enter") {
            var arrOperation = splitOperation(operationsInput.value)
            var answer = calculate(arrOperation)
            operationsInput.value = answer
        }
        else if (e.key === "Backspace") operationsInput.value = operationsInput.value.substring(0, operationsInput.value.length - 1)
        else if (e.key === "c" || e.key === "C") operationsInput.value = ""
        else operationsInput.value = operationsInput.value + e.key
    }
})

equals.addEventListener("click", function () {
        var arrOperation = splitOperation(operationsInput.value)
        var answer = calculate(arrOperation)
        operationsInput.value = answer
})

C.addEventListener("click", function () {
    operationsInput.value = ""
})

