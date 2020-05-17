function getHistory(){
    return document.getElementById('hv').innerText;
}
function printHistory(num){
    document.getElementById('hv').innerText=num;
}
function getOutput(){
    return document.getElementById('opv').innerText;
} 
function printOutput(num){
    document.getElementById('opv').innerText=num;
}
printOutput('9878')