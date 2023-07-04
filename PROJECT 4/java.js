
let intro = {
    name: "Aditya",
    class: "11th",
    age: 16,
    subject: "PCM"
}

console.log(intro);

let hlo = ["Ayush", "Chouhan", 16];

for (let i = 0; i < hlo.length; i++) {
    console.log(hlo[i]);
}

let a = 69;
let b = 96;

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let sum = document.getElementById("sum")
let btn = document.getElementById("btn")
num1.innerHTML = `<b> ${a} </b>`;
    num2.innerHTML = `<b> ${b} </b>`;
    function add() {
        let add = a + b;
        sum.textContent = add
    }

function box() {
    btn.textContent = "You have open the box!"
}


