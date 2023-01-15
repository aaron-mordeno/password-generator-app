const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let lengthEl = document.getElementById("length")
let numbersEl = document.getElementById("numbersCheckbox")
let symbolsEl = document.getElementById("symbolsCheckbox")

let passwordOneEl = document.getElementById("password1")
let passwordTwoEl = document.getElementById("password2")

function updatePasswords() {
    passwordOneEl.textContent = generatePassword()
    passwordTwoEl.textContent = generatePassword()
}

function generatePassword() {
    let password = ""
    let allCharacters = characters

    if (numbersEl.checked === true)
        allCharacters = allCharacters.concat(numbers)
    if (symbolsEl.checked === true)
        allCharacters = allCharacters.concat(symbols)
    for (let i = 0; i < lengthEl.value; i++) {
        let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)]
        password += randomChar
    }

    return password
}

function copyToClipboard(passwordElId) {
    let content = document.getElementById(passwordElId).textContent
    navigator.clipboard.writeText(content)
    document.getElementById("copy").textContent = "Copied to clipboard " + content
}