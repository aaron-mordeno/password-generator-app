const characters = [["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]];

// nested arrays are as follows:
// characters[0] contain letters
// characters[1] contain numbers
// characters[2] contain symbols

let lengthEl = document.getElementById("length");
let numbersEl = document.getElementById("numbersCheckbox");
let symbolsEl = document.getElementById("symbolsCheckbox");

let passwordOneEl = document.getElementById("password1");
let passwordTwoEl = document.getElementById("password2");


function generatePassword() {
    let password1 = "";
    let password2 = "";

    if (numbersEl.checked === true && symbolsEl.checked === true) {

        // r = random integer to determine which nested array to generate character from
        // l = length of nested array
        // for loop runs the amount of times inputted for password length

        for (let i = 0; i < lengthEl.value; i++) {
            let r = Math.floor(Math.random() * 3);
            let l = Math.floor(Math.random() * characters[r].length);
            password1 += characters[r][l];
        }

        for (let i = 0; i < lengthEl.value; i++) {
            let r = Math.floor(Math.random() * 3);
            let l = Math.floor(Math.random() * characters[r].length);
            password2 += characters[r][l];
        }
        
    } else if (numbersEl.checked === true && symbolsEl.checked === false) {

        for (let i = 0; i < lengthEl.value; i++) {
            let r = Math.floor(Math.random() * 2);
            let l = Math.floor(Math.random() * characters[r].length);
            password1 += characters[r][l];
        }

        for (let i = 0; i < lengthEl.value; i++) {
            let r = Math.floor(Math.random() * 2);
            let l = Math.floor(Math.random() * characters[r].length);
            password2 += characters[r][l];
        }

    } else if (numbersEl.checked === false && symbolsEl.checked === true) {

        // r is either rounded down to 0, or rounded up to 2 to prevent the characters[1] nested array, which contains numbers, from being selected

        for (let i = 0; i < lengthEl.value; i++) {
            let r = Math.random() * 3;
            if (r < 1.5) {
                r = 0
            } else {
                r = 2
            };
            let l = Math.floor(Math.random() * characters[r].length);
            password1 += characters[r][l];
        }

        for (let i = 0; i < lengthEl.value; i++) {
            let r = Math.random() * 3;
            if (r < 1.5) {
                r = 0
            } else {
                r = 2
            };
            let l = Math.floor(Math.random() * characters[r].length);
            password2 += characters[r][l];
        }

    } else {

        for (let i = 0; i < lengthEl.value; i++) {
            let r = 0;
            let l = Math.floor(Math.random() * characters[r].length);
            password1 += characters[r][l];
        }

        for (let i = 0; i < lengthEl.value; i++) {
            let r = 0;
            let l = Math.floor(Math.random() * characters[r].length);
            password2 += characters[r][l];
        }

    }

    passwordOneEl.textContent = password1;
    passwordTwoEl.textContent = password2;
}

passwordOneEl.addEventListener('click', (event)  => {
    const content = passwordOneEl.textContent;
    navigator.clipboard.writeText(content);
    document.getElementById("copy").textContent = "Copied to clipboard " + content;
})

passwordTwoEl.addEventListener('click', (event)  => {
    const content = passwordTwoEl.textContent;
    navigator.clipboard.writeText(content);
    document.getElementById("copy").textContent = "Copied to clipboard " + content;
})