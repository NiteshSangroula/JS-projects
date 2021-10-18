const btn = document.querySelectorAll('.btn-display');
const output = document.querySelector('.display-screen');
const operator = document.querySelectorAll('.btn-operator');
const answer = document.querySelector('.btn-ans');

let operations = '';

for (let i = 0; i <= 13; i++) {
    btn[i].addEventListener('click', function() {

        //Displays the clicked element in display-screen
        //stores the string in an array.
        operations += btn[i].textContent;
        output.textContent = operations;
    });
}

let index = 0;
let flag = 0;
const num = [];
const operators = [];

for (let i = 0; i <= 3; i++) {
    operator[i].addEventListener('click', function() {

        //It stores the number before the clicked
        //operaters in an array and also the clicked operator
        num[index] = Number((operations.substr(flag, operations.length - (flag + 1))));
        operators[index] = operator[i].textContent;
        index += 1;
        flag = operations.length;
    });
}

answer.addEventListener('click', function() {
    num[num.length] = Number((operations.substr(flag, operations.length )));

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] == '/') {
            num[i] = num[i] / num[i + 1];
            console.log(num);
            num.splice(i + 1, 1);
            operators.splice(i, 1);
            console.log('yes');
            console.log(num);
        }
    }

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] == '*') {
            num[i] = num[i] * num[i + 1];
            num.splice(i + 1, 1);
            operators.splice(i, 1);
            console.log('yes');
            console.log(num);
        }
    }

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] == '+') {
            num[i] = num[i] + num[i + 1];
            num.splice(i + 1, 1);
            operators.splice(i, 1);
            console.log('yes');
            console.log(num);
        }
    }

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] == '-') {
            num[i] = num[i] - num[i + 1];
            num.splice(i + 1, 1);
            operators.splice(i, 1);
            console.log('yes');
            console.log(num);
        }
    }

    output.textContent = num[0];
    operations = num[0];
    console.log(num[0]);
    
});

