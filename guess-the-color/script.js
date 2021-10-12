function select(name) {
    return document.querySelector(name);
}

const colorsList = ['red', 'yellow', 'green', 'blue', 'black', 'white'];

function chooseColor(arr) {
    for (let i = 0; i <= 5; i++) {
        if (arr === i) {
            return colorsList[i];
        }
    }
}

let highscore = 0;

const checkRes = select('.check');
checkRes.addEventListener('click', function() {

    const num = [], colors = [], usersColor = [];

    function checkColors(user, real) {
        let noOfTrue = 0;
        for (let i = 0; i <= 5; i++) {
            if (user[i] === real[i]) {
                select(`.cc--${i}`).style.backgroundColor = 'red';
                noOfTrue += 1;

            }
            else {
                select(`.cc--${i}`).style.backgroundColor = 'blue';
            }
        }
        return noOfTrue;
    }



    for (let i = 0; i <= 5; i++) {
        num[i] = Math.floor(Math.random() * 6);
        colors[i] = chooseColor(num[i]);
        usersColor[i] = select(`.color-${i}`).value;
    }

    checkColors(colors, usersColor);

    const times = checkColors(colors, usersColor);
    const Accuracy = ( times / 6 * 100 ).toFixed(2);

    if (Accuracy !== NaN)
        select('.result').textContent = String(Accuracy);


    const highScore = select('.high-score');
    console.log(highScore);

    if (Accuracy > highscore) {
        highscore = Accuracy;
        highScore.textContent = highscore;
    }

});

