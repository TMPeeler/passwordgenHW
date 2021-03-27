//I am prompted to create a new password
//Then I am prompted for the length of the password which should be no less than 8 characters and no more than 128 characters
//Then I am prompted for character types to be used in the password which includes lowercase, uppercase, numbers, and special characters
//Then I put in my user input
//Then my input is validated and at least one character type should be used in the password
//Then the password is generated
//Then the password is displayed either in an alert or written into the page

//check for length of password
//check for character types
//the for loop runs as many times as we give it characters in the password
//need a variable in the scope of the function that holds the password so it can be returned 
//that variable equals 
// need a variable where if they press yes or no it returns a boolean value to that variable
// var lowercaseChoice = 

//prompt user to generate password (window.prompt("blah blah blah"))
//if user says "yes" to generate password, proceed, if not then cancel.
//prompt the user for password length and store it as a variable. If it's not a number between 8 and 128, cancel, if not then proceed.
//prompt the user to include lowercase characters. if yes, return and store a boolean value of true to include at least one lowercase character, if not then proceed and do not return a value.
//prompt the user to include uppercase characters. if yes, return and store a boolean value of true to include at least one uppercase character, if not then proceed and do not return a value.
//prompt the user to include number characters. if yes, return and store a boolean value of true to include at least one number character, if not then proceed and do not return a value.
//prompt the user to include special characters. if yes, return and store a boolean value of true to include at least one special character, if not then proceed and do not return a value.
//if the user has not selected at least one character type, cancel. But if the user has selected at least one character type, proceed.
//based on the criteria for the password, run a for loop as many times as there are characters in the password (variable of password length) 


var lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var numbers = "123456789".split('');
var specialCharacter = "!@#$%^&*[{}]':;".split('');
var printedPass = [];
var allArrays = [].concat(lowerCase, upperCase, numbers, specialCharacter)


//method that concats arrays together

var passwordGenerator = function() {
// this part prompts the user to create a new password
    var userChoice = window.confirm("Would you like to make a new password?");
// if the user presses cancel then the process ceases here
    if (!userChoice) {
            return;
        } 
// the user is prompted to include character types in their password and then a boolean is stored 
    var lowercaseChoice = window.confirm("Would you like to include lowercase characters in your password?");
    var upperCaseChoice = window.confirm("Would you like to include uppercase characters in your password?");
    var numbersChoice = window.confirm("Would you like to include numbers in your password?");
    var specialCharacterChoice = window.confirm("Would you like to include special characters in your password");
    if (lowercaseChoice || upperCaseChoice || numbersChoice || specialCharacterChoice) {
    } else {
        window.alert("Please include at least one character type");
        return;
    }
// as long as the user picked one of the character types, the password generator will ask how many characters they want
// the boolean values have been stored and now the user is prompted to declare how many characters their password will be
    var passwordLength = window.prompt("How many characters would you like your password to be? Between 8 and 128 characters");
     if (passwordLength >= 8 && passwordLength <= 128) {
        window.passwordValue = passwordLength;
        generatePassword();
     }else{
         window.alert("Password must be between 8 and 128 characters");
         return;
     }
}
// this part generates the password by saying that we're going to start at 0 and randomly pick indexes from a concated array of all my other arrays 
// and it's going to continue to pick values 


function generatePassword(allArrays) {
    for(i = 0; i < passwordLength; i++) {
        var randomPass = Math.floor(Math.random*(passwordLength)) //random number picker 
        randomPass = allArrays[randomPass] // this says that my new variable is the index number of my allArrays array
        passwordText.append(randomPass); //this puts my array number 
    }
}
// function generatePassword(allArrays) {
//     for(i = 0; i < passwordLength; i++) {
//         var randomPass = Math.floor(Math.random*(passwordLength)) //random number picker 
//         randomPass = allArrays[randomPass] // this says that my new variable is the index number of my allArrays array
//         passwordText.append(randomPass); //this puts my array number 
//     }
// }
//
var passwordPrint = function() {
    var password = passwordGenerator();
    var passwordText = document.getElementById("#actualpassword");
    passwordText.textContent = password;
}
passwordGenerator();

 console.log(typeof passwordLength)