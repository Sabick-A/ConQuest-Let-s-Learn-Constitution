// const assignUID = require('../script.js');
// import { assignUID } from './script.js';

// document.getElementById("nameSpan").innerHTML = uName;

for (let i = 1; i <= 8; ++i) {
    document.getElementById("card-container").innerHTML += '<div class="grid-item"><div class="card-container"><div class="card _' + i + '"><div id="img-one" class="card front"><img class="cardImg" onclick="" src="./images/card_' + i + '.png" alt="Avatar"></div><div class="card back"><img class="cardImg" onclick="" src="./images/card_white.png" alt="Avatar"></div></div></div></div>';
    console.log(i);
}

let questions = [
    ["Children in India have the right to free and compulsory education between the ages of 6 and 14.", 1], 
    ["Children under the age of 14 are allowed to work for jobs.", 0],
    ["Children should not be forced to work in jobs that are not suitable for their age and strength.", 1],
    ["Every child has the right to early childhood care and education until they turn six.", 1], 
    ["Children in India have the right to be protected from discrimination based on their religion or caste.", 1],
    ["Children can be forced into  labor in India.", 0],
    ["Children have the right to be protected from social injustice and exploitation.", 1],
    ["The government has a duty to improve public health and nutrition for children.", 1]
    ];

var score = 0;
var life = 3;

document.getElementById("scoreH").innerHTML = score;
document.getElementById("lifeH").innerHTML = "󰣐 ".repeat(life);

document.addEventListener("DOMContentLoaded", function () {
    const dialog = document.getElementById("dialog");
    const ques = document.getElementById("ques");
    const true_btn = document.getElementById("true-btn");
    const false_btn = document.getElementById("false-btn");
    var x;
    var y;

    for (let i = 1; i <= 8; ++i) {
        const card = document.querySelector(`.card._${i}`);
    
        card.addEventListener('click', function () {
            ques.innerText = questions[i][0];
            dialog.style.display = 'block';
            card.classList.toggle('flipped');
            x = card;
            y = i;
        });
        console.log(i);
    }


    false_btn.addEventListener("click", function () {
        dialog.style.display = "none";
        x.style.display = "none";
        if(questions[y][1] == 1) {
            life=life-1;
        } else {
            score+=10
        }
        document.getElementById("scoreH").innerHTML = score;
        document.getElementById("lifeH").innerHTML = "󰣐 ".repeat(life);
    });

    true_btn.addEventListener("click", function () {
        dialog.style.display = "none";
        x.style.display = "none";
        if(questions[y][1] == 0) {
            life=life-1;
        } else {
            score+=10
        }
        document.getElementById("scoreH").innerHTML = score;
        document.getElementById("lifeH").innerHTML = "󰣐 ".repeat(life);
    });
});