// const assignUID = require('../script.js');
// import { assignUID } from './script.js';

// document.getElementById("nameSpan").innerHTML = uName;

for (let i = 1; i <= 8; i++) {
    let tmp = `
    <div class="grid-item">
        <div class="card-container">
            <div class="card _${i}">
                <div id="img-one" class="card front">
                    <img class="cardImg" onclick="" src="./images/card_${i}.png" alt="Avatar">
                </div>
                <div class="card back">
                    <img class="cardImg" onclick="" src="./images/card_white.png" alt="Avatar">
                </div>
            </div>
        </div>
    </div>`;
    document.getElementById("card-container").innerHTML += tmp;
}

let qns = [
    ["Children in India have the right to free and compulsory education between the ages of 6 and 14.", 1], 
    ["Children under the age of 14 are allowed to work for jobs.", 0],
    ["Children should not be forced to work in jobs that are not suitable for their age and strength.", 1],
    ["Every child has the right to early childhood care and education until they turn six.", 1], 
    ["Children in India have the right to be protected from discrimination based on their religion or caste.", 1],
    ["Children can be forced into  labor in India.", 0],
    ["Children have the right to be protected from social injustice and exploitation.", 1],
    ["The government has a duty to improve public health and nutrition for children.", 1]
    ];

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
 
            // Generate random number 
            var j = Math.floor(Math.random() * (i + 1));
 
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
 
        return array;
    }

var score = 0;
var life = 4;
let ncard = 8;

// document.getElementById("scoreH").innerHTML = score;
// document.getElementById("lifeH").innerHTML = "󰣐 ".repeat(life);

function showPop(data) {
    const pop = document.querySelector('.pop_box');
    document.querySelector(".overlay").style.display = "block";
    pop.classList.add('js_pop_box');
    displayResult(data);
}
function removePop() {
    const overlay = document.querySelector('.overlay');
    const pop = document.querySelector('.pop_box');
    overlay.classList.remove('js_overlay');
    pop.classList.remove('js_pop_box');
    document.querySelector(".overlay").style.display = "none";
}
function displayResult(data) {
    let result_image = document.querySelector('.result_image');
    if(data == 0){
        result_image.innerHTML = `<img class="imgg" src="images/lose.png" alt="">`;
    }else{
        result_image.innerHTML = `<img class="imgg" src="images/won.png" alt="">`;
    }
    
}
const exit_btn = document.querySelector('.exit_btn');
exit_btn.addEventListener("click", function () {
    window.location.reload();
});
const retry_btn = document.querySelector('.retry_btn');
retry_btn.addEventListener("click", function () {
    window.location.reload();
});

function animateLife(life) {
    // Select all heart elements
    const hearts = document.querySelectorAll('.heart');
    
    // Add 'lost' class to the heart that needs to be hidden
    hearts[life].classList.add('lost');
}

document.addEventListener("DOMContentLoaded", function () {
    let questions = shuffleArray(qns);
    const dialog = document.getElementById("dialog");
    const ques = document.getElementById("ques");
    const true_btn = document.getElementById("true-btn");
    const false_btn = document.getElementById("false-btn");
    var x;
    var y;

    for (let i = 1; i <= 8; ++i) {
        const card = document.querySelector(`.card._${i}`);
    
        card.addEventListener('click', function () {
            ques.innerText = questions[i-1][0];
            dialog.style.display = 'block';
            card.classList.toggle('flipped');
            x = card;
            y = i;
        });
    }


    false_btn.addEventListener("click", function () {
        dialog.style.display = "none";
        x.style.display = "none";
        if(questions[y-1][1] == 1) {
            life=life-1;
            animateLife(life);
        } else {
            score+=10
        }
        ncard--;
        // document.querySelector(".score").innerHTML = `SCORE: ${score}`;
        
        if(ncard==0 || life <= 0){
            let r = 0;
            if(life > 0 && ncard==0){
                r = 1;
            }
            showPop(r);
        }
    });

    true_btn.addEventListener("click", function () {
        dialog.style.display = "none";
        x.style.display = "none";
        if(questions[y-1][1] == 0) {
            life=life-1;
            animateLife(life);
        } else {
            score+=10
        }
        // document.querySelector(".score").innerHTML = `SCORE: ${score}`;
        // document.querySelector(".Life").innerHTML = `<img class="heart_img" src="./heart.png" alt="">`.repeat(life);
        ncard--;

        if(ncard==0 || life <= 0){
            let r = 0;
            if(life > 0 && ncard==0){
                r = 1;
            }
            showPop(r);
        }
    });
});