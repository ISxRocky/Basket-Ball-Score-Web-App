let num1 = 0
let num2 = 0
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function plusOneH(){
    num1++;
    document.getElementById("num1-el").textContent = num1
}
function plusOneA(){
    num2++;
    document.getElementById("num2-el").textContent = num2
}
function plusTwoH(){
    num1 += 2;
    document.getElementById("num1-el").textContent = num1
}
function plusTwoA(){
    num2 += 2;
    document.getElementById("num2-el").textContent = num2
}
function plusThreeH(){
    num1 += 3;
    document.getElementById("num1-el").textContent = num1
}
function plusThreeA(){
    num2 += 3;
    document.getElementById("num2-el").textContent = num2
}

function reset(){
    num1 = 0
    num2 = 0
    document.getElementById("num1-el").textContent = num1
    document.getElementById("num2-el").textContent = num2
}