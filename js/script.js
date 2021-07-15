// Assignment Code
var generateBtn = document.querySelector("#generate");

//variable of the length of password
var passLength;

//boolean variable isStartOver is false that it will not run the function lengthOfPassword 
var isStartOver = false;

//Save function call to the variables
var startOverLengthOfPassword;
var numeric;
var specialCharacter;
var lowercaseLetter;
var uppercaseLetter;
var validationResult;

//variables that check the condition true or false in validation function
var toIncludeNumber;
var toIncludeSpecial;
var toIncludeLowercase;
var toIncludeUppercase;

//Array
var numericArray;
var specialCharacterArray;
var lowercaseArray;
var uppercaseArray

function generatePassword(){
    var passwordKeeper;
    //Method of password length
    function lengthOfPassword(){
        passLength = prompt("Enter the length of password from 8 to 128");
        //Check length
        if(passLength){
            //Check whether the length is > 8 or < 128
            //The condition meet
            if(passLength < 8 || passLength > 128){
                alert("The length of password can not less than 8 or 128");  
                //Set isStartOver to true
                isStartOver = true; 
                //Check whether is isStartOver is true or false
                //The conditio meet
                if(isStartOver === true){
                    //run the method again
                    //set isStartOver to false
                    lengthOfPassword();
                    isStartOver =false;
                }
                
            }else{
                numeric = toIncludeNumberMethod();
                specialCharacter = toIncludeSpecialrMethod();
                lowercaseLetter = toIncludeLowercaseMethod();
                uppercaseLetter = toIncludeUppercaseMethod();

                //Check input to make sure that it has at least one character type should be selected
                if(numeric === false && toIncludeSpecial === false && toIncludeLowercase === false && toIncludeUppercase === false){
                    alert("At least one character type should be selected");
                    if(confirm("Would you like to start over")){
                        lengthOfPassword();
                    }else{
                        return;
                    }
                }else{
                    validationResult = validation();
                    return validationResult;
                }    
                    
            }  
        }else{
            if(confirm("The length of password is necessary, plase start over")){
               lengthOfPassword();
            }else{
                return;
            }
        } 
    }
    //return password
    passwordKeeper = lengthOfPassword();
    return passwordKeeper;
}

//Generate Numbers
function toIncludeNumberMethod(){

    toIncludeNumber = confirm("Would you like your password includes number?");
    
    if(toIncludeNumber){
        var assignedNumber = ["0","1","2","3","4","5","6","7","8","9"]
        numericArray = new Array(passLength);
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * 10);
            numericArray[i] = assignedNumber[index];
        }
        return numericArray;
        
    }else{
        return toIncludeNumber;
    }
    
}

//Generate Special Characters
function toIncludeSpecialrMethod(){
    toIncludeSpecial = confirm("Would you like your password includes special Characters?");
    if(toIncludeSpecial){
        var assignedSpCharacter = ["!","@","#","$","%","^","&","*","(",")","?"];
        specialCharacterArray = new Array(passLength);
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * 11);
            specialCharacterArray[i] = assignedSpCharacter[index];
        }
        return specialCharacterArray;
    }else{
        return toIncludeSpecial;
    }
    
}


//Generate Lowercase Letters
function toIncludeLowercaseMethod(){
    toIncludeLowercase = confirm("Would you like your password includes lowercase letters?");
    if(toIncludeLowercase){
        var text = "abcdefghjiklmnopqrstuvwxyz";
        var letters = text.split("");
        lowercaseArray = new Array(passLength);
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * 26);
            lowercaseArray[i] = letters[index];
        }
        return lowercaseArray;
    }else{
        return toIncludeLowercase;
    }
    
}

//Generate Uppercase Letters
function toIncludeUppercaseMethod(){
    toIncludeUppercase = confirm("Would you like your password includes uppercase letters?");
    if(toIncludeUppercase){
        var text = "abcdefghjiklmnopqrstuvwxyz";
        var letters = text.toUpperCase().split("");
        uppercaseArray = new Array(passLength);
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * 26);
            uppercaseArray[i] = letters[index];
        }
        return uppercaseArray;
    }else{
        return toIncludeUppercase;
    }
    
}

//Check the input of character types
function validation(){
    if(toIncludeNumber === false && toIncludeSpecial === true && toIncludeLowercase ==true && toIncludeUppercase === true ){
        console.log("No Numeric");
        var preGenerated = specialCharacter +","+ lowercaseLetter +","+ uppercaseLetter;
        var removeComma = preGenerated.replaceAll(",","");
        var actualPassword;
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * removeComma.length);
            actualPassword = actualPassword + removeComma[index];
        }
        console.log(actualPassword);
        return actualPassword;
    }else if( toIncludeNumber === true && toIncludeSpecial === false&& toIncludeLowercase ==true && toIncludeUppercase === true){
        console.log("No Special Characters");
        var preGenerated = numeric +","+ lowercaseLetter +","+uppercaseLetter;
        var removeComma = preGenerated.replaceAll(",","");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * removeComma.length);
            actualPassword = actualPassword + removeComma[index];
        }
        console.log(actualPassword);
        return actualPassword;
    }else if(toIncludeNumber === true && toIncludeSpecial ==true && toIncludeLowercase === false &&  toIncludeUppercase === true){
        //not working correctly, it prints lowercase
        console.log("No Lowercase");
        var preGenerated = specialCharacter +","+ numeric +","+uppercaseLetter;
        var removeComma = preGenerated.replaceAll(",","");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * removeComma.length);
            actualPassword = actualPassword + removeComma[index];
        }
        console.log(actualPassword);
        return actualPassword;           
    }else if(toIncludeNumber === true && toIncludeSpecial === true && toIncludeLowercase ==true && toIncludeUppercase === false   ){
        console.log("No Uppercase");
        var preGenerated = specialCharacter +","+ lowercaseLetter +","+numeric;
        var removeComma = preGenerated.replaceAll(",","");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * removeComma.length);
            actualPassword = actualPassword + removeComma[index];
        }
        console.log(actualPassword);
        return actualPassword;           
    }
    else if(toIncludeNumber === false && toIncludeSpecial === false  && toIncludeLowercase ==true && toIncludeUppercase === true){
        console.log("No Numeric and Special Characters");
        var preGenerated = lowercaseLetter +","+uppercaseLetter;
        var removeComma = preGenerated.replaceAll(",","");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * removeComma.length);
            actualPassword = actualPassword + removeComma[index];
        }
        console.log(actualPassword);
        return actualPassword;
    }else if(toIncludeNumber === true && toIncludeSpecial === true  && toIncludeLowercase ==false && toIncludeUppercase === false){
        console.log("No Lowercase and Uppercase");
        var preGenerated = numeric +","+ specialCharacter;
        var removeComma = preGenerated.replaceAll(",","");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * removeComma.length);
            actualPassword = actualPassword + removeComma[index];
        }
        console.log(actualPassword);
        return actualPassword;
    }else if(toIncludeNumber === true && toIncludeSpecial === false  && toIncludeLowercase == false && toIncludeUppercase === true){
        console.log("No Lowercase and Special Characters");
        var preGenerated = numeric +","+uppercaseLetter;
        var removeComma = preGenerated.replaceAll(",","");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * removeComma.length);
            actualPassword = actualPassword + removeComma[index];
        }
        console.log(actualPassword);
        return actualPassword;
    }
    else if(toIncludeNumber === false && toIncludeSpecial === true && toIncludeLowercase === false && toIncludeUppercase ==true){
        console.log("No Numeric and Lowercase");
        var preGenerated = specialCharacter +","+uppercaseLetter;
        var removeComma = preGenerated.replaceAll(",","");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * removeComma.length);
            actualPassword = actualPassword + removeComma[index];
        }
        console.log(actualPassword);
        return actualPassword;
    }else if(toIncludeNumber === false && toIncludeSpecial === true && toIncludeLowercase ==true && toIncludeUppercase === false){
        console.log("No Numeric and Uppercase");
        var preGenerated = specialCharacter +","+lowercaseLetter;
        var removeComma = preGenerated.replaceAll(",","");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * removeComma.length);
            actualPassword = actualPassword + removeComma[index];
        }
        console.log(actualPassword);
        return actualPassword;
    }else if(toIncludeNumber === true && toIncludeSpecial === false && toIncludeLowercase ==true && toIncludeUppercase === false){
        console.log("No Special Characters and Uppercase");
        var preGenerated = numeric +","+lowercaseLetter;
        var removeComma = preGenerated.replaceAll(",","");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * removeComma.length);
            actualPassword = actualPassword + removeComma[index];
        }
        console.log(actualPassword);
        return actualPassword;
    }
    else if(toIncludeNumber === false && toIncludeSpecial === false && toIncludeLowercase === false && toIncludeUppercase === true){
        console.log("No Numeric, Special Character and Lowercase");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * uppercaseLetter.length);
            actualPassword = actualPassword + uppercaseLetter[index];
        }
        console.log(actualPassword);
        return actualPassword;
    }
    else if(toIncludeNumber === false && toIncludeSpecial === false &&  toIncludeLowercase === true && toIncludeUppercase === false ){
        console.log("No Numeric, Special Characters and Uppercase");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * lowercaseLetter.length);
            actualPassword = actualPassword + lowercaseLetter[index];
        }
        console.log(actualPassword);
        return actualPassword;
    }else if(toIncludeNumber === false && toIncludeSpecial === true && toIncludeLowercase === false && toIncludeUppercase === false ){
        console.log("No Numeric, Lowercase and Uppercase");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * specialCharacter.length);
            actualPassword = actualPassword + specialCharacter[index];
        }
        console.log(actualPassword);
        return actualPassword;
    }   else if(toIncludeNumber === true  && toIncludeSpecial === false && toIncludeLowercase === false && toIncludeUppercase === false ){
            console.log("No Special Character, Lowercase and Uppercase");
            var actualPassword = new Array();
            for(var i = 0; i < passLength; i++){
                var index = Math.floor(Math.random() * numeric.length);
                actualPassword = actualPassword + numeric[index];
            }
            console.log(actualPassword);
            return actualPassword;}
    else {
        console.log("Includes all four character type Numeric, Special Characters, Lowercase and Uppercase");
        var preGenerated = numeric +","+ specialCharacter +","+ lowercaseLetter +","+ uppercaseLetter;
        var removeComma = preGenerated.replaceAll(",","");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * removeComma.length);
            actualPassword = actualPassword + removeComma[index];
        }
        console.log(actualPassword);
        return actualPassword;
    }
}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
     
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
