//Selecting Elements
const resetBtn = document.querySelector('.reset');
const signUpBtn = document.querySelector('.sign-up-btn');

const fNameError = document.querySelector('.fName-error');
const lNameError = document.querySelector('.lName-error');
const termsError = document.querySelector('.terms-error');
const genderError = document.querySelector('.gender-error');

const emailError = document.querySelector('.email-error');
const userNameError = document.querySelector('.username-error');
const passwordError = document.querySelector('.password-error');
const phoneNumError = document.querySelector('.phone-num-error');

const phoneNum = document.querySelector('.input--3');
const genderMale = document.querySelector('.input--4');
const genderFemale = document.querySelector('.input--5');
const genderOthers = document.querySelector('.input--6');

const terms = document.getElementById('terms&condition');

const email = document.getElementById('email');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const username = document.getElementById('username');
const password = document.getElementById('password');


//checking valid mail
function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//False Initial
function fInit(input, error) {
    input.style.borderColor = 'black';
    error.classList.add('hidden');
}

//True Initial
function tInit(input, error, message) {
    input.style.borderColor = 'red';
    error.classList.remove('hidden');
    error.textContent = message;
}

//Check Validation for single characters
function checkValidation(input, error, message) {
    if(input.value === '') {
        tInit(input, error, message);
    }
    else {
        fInit(input, error);
    }
}


//Reset button with reload capability
resetBtn.addEventListener('click', function(e) {
    e.preventDefault();
    location.reload();
});


//Sign-up button
signUpBtn.addEventListener('click', function(e) {
    e.preventDefault();

    checkValidation(fName, fNameError, 'Enter at least a character');
    checkValidation(lName, lNameError, 'Enter at least a character');

    //others
    if(terms.checked === false) 
        tInit(terms, termsError, 'You must accept the terms and policy');
    else 
        fInit(terms, termsError);


    if(username.value.length < 3) 
        tInit(username, userNameError, 'userNameError must be at least of 3 characters');
    else 
        fInit(username, userNameError);


    if (password.value.length < 6) 
        tInit(password, passwordError, 'password must be of 6 characters');
    else 
        fInit(password, passwordError);


    if(genderMale.checked === false && genderFemale.checked === false && genderOthers.checked === false) 
        tInit(genderOthers, genderError, 'You have to select at least one.');
    
    else 
        fInit(genderOthers, genderError);


    if(phoneNum.value.length !== 10) 
        tInit(phoneNum, phoneNumError, 'It should have 10 digits');
    else 
        fInit(phoneNum, phoneNumError);


    if(!checkEmail(email.value)) 
        tInit(email, emailError, 'Invalid email');
    else 
        fInit(email, emailError);

});

