const passwordBox = document.querySelector("#password");
const lenght = 10;

const upperCase = "ABCDEFGHIJKLMPOQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()<>";

const AllChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password ="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length){

        password += AllChars[Math.floor(Math.random() * AllChars.length)];

    }

    passwordBox.value = password;

}

function copypassword() {
    passwordBox.select();
    document.execCommand("copy");

}




