const place = document.querySelectorAll('.place');
const element = document.querySelectorAll('.element');
let turn = 0;

const score = [0, 0, 0, 0, 0, 0 ,0, 0, 0];

function checkWin(a, op0, op1, op2) {
    if (a[op0] === 1 && a[op1] === 1 && a[op2] === 1) {
        console.log('Team A wins');
        document.querySelector('body').classList.add('matchOver');
    }
    else if (a[op0] === 2 && a[op1] === 2 && a[op2] === 2) {
        console.log('Team B wins');
        document.querySelector('body').classList.add('matchOver');
    }
}


for (let i = 0; i < place.length; i++) {
    place[i].addEventListener('click', function() {

        turn += 1;
        element[i].classList.remove('hidden');

        if (turn % 2 === 0) {
            element[i].classList.add('second');
            score[i] = 2;
        }
        else {
            element[i].classList.add('first');
            score[i] = 1;
        }

        checkWin(score, 0, 1, 2);
        checkWin(score, 0, 3, 6);
        checkWin(score, 0, 4, 8);
        checkWin(score, 1, 4, 7);
        checkWin(score, 2, 4, 6);
        checkWin(score, 2, 5, 8);
        checkWin(score, 3, 4, 5);
        checkWin(score, 6, 7, 8);
        
    });
}

