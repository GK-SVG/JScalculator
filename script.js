function getHistory() {
    return document.getElementById('hv').innerText;
}

function printHistory(num) {
    document.getElementById('hv').innerText = num;
}

function getOutput() {
    return document.getElementById('opv').innerText;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById('opv').innerText = num;
    } else {
        document.getElementById('opv').innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString('en');
    return value
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}

var operator = document.getElementsByClassName('operator');
for (let index = 0; index < operator.length; index++) {
    operator[index].addEventListener('click', function () {
        if (this.id == "clear") {
            printOutput("");
            printHistory("");
        } else
        if (this.id == "back") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } else {
            var output = getOutput();
            var history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
}
var number = document.getElementsByClassName('number');
for (let index = 0; index < number.length; index++) {
    number[index].addEventListener('click', function () {
        var output = reverseNumberFormat(getOutput());
        if (output != NaN) { //output is a number
            output = output + this.id;
            printOutput(output);
        }
    })
}