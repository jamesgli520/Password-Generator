// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global Scope
var passLength;
var numGenerated;
var scGenerated;
var lcGenerated;
var ucGenerated;
var validationResult;

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
            }

            numGenerated = passNumberMethod();
            scGenerated = passSpecialrMethod();
            lcGenerated = passLowercaseMethod();
            ucGenerated = passUppercaseMethod();
            return validationResult = validation();
            
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


function passNumberMethod(){
    //Generate Numbers
    var passNumber = confirm("Would you like your password includes number?");
    var numGenerated;
    if(passNumber){
        numGenerated = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.random() *10;
            var randomNumber = Math.floor(index);
            numGenerated[i] = randomNumber;
        }
        
    }
    return numGenerated;
}

function passSpecialrMethod(){
    //Generate Special Characters
    var passSpecial = confirm("Would you like your password includes special Characters?");
    var scGenerated;
    if(passSpecial){
        var specialCharacter = ["!","@","#","$","%","^","&","*","(",")","?"];
        scGenerated = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * 11);
            scGenerated[i] = specialCharacter[index];
        }
    }
    return scGenerated;
}

function passLowercaseMethod(){
    //Generate Lowercase Letters
    var passLowercase = confirm("Would you like your password includes lowercase letters?");
    var lcGenerated;
    if(passLowercase){
        var text = "abcdefghjiklmnopqrstuvwxyz";
        var lowercaseLetter = text.split("");
        lcGenerated = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * 26);
            lcGenerated[i] = lowercaseLetter[index];
        }
    }
    return lcGenerated;
}
function passUppercaseMethod(){
    //Generate Uppercase Letters
    var passUppercase = confirm("Would you like your password includes uppercase letters?");
    var ucGenerated;
    if(passUppercase){
        var text = "abcdefghjiklmnopqrstuvwxyz";
        var uppercaseLetter = text.toUpperCase().split("");
        ucGenerated = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * 26);
            ucGenerated[i] = uppercaseLetter[index];
        }
    }
    return ucGenerated;
}

function validation(){
    //validation input that check at least one character type should be selected
    if(numGenerated == null && scGenerated == null && lcGenerated == null && ucGenerated == null){
        alert("At least one character type should be selected");
        if(confirm("Would you like to start over")){
            lengthOfPassword();
        }else{
            return;
        }
    }else if(numGenerated === null){
        var preGenerated = scGenerated +","+ lcGenerated +","+ ucGenerated;
        var removeComma = preGenerated.replaceAll(",","");
        var postGenerated = removeComma.split(""); 
        var actualPassword;
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * postGenerated.length);
            actualPassword = actualPassword + postGenerated[index];
            console.log(numGenerated);
        }
        return actualPassword;
    }else if(scGenerated === null){
        var preGenerated = numGenerated +","+ lcGenerated +","+ucGenerated;
        var removeComma = preGenerated.replaceAll(",","");
        var postGenerated = removeComma.split("");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * postGenerated.length);
            actualPassword = actualPassword + postGenerated[index];
        }
        return actualPassword;
    }else if(lcGenerated === null){
        var preGenerated = scGenerated +","+ numGenerated +","+ucGenerated;
        var removeComma = preGenerated.replaceAll(",","");
        var postGenerated = removeComma.split("");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * postGenerated.length);
            actualPassword = actualPassword + postGenerated[index];
        }
        return actualPassword;           
    }else if(ucGenerated === null){
        var preGenerated = scGenerated +","+ lcGenerated +","+numGenerated;
        var removeComma = preGenerated.replaceAll(",","");
        var postGenerated = removeComma.split("");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * postGenerated.length);
            actualPassword = actualPassword + postGenerated[index];
        }
        return actualPassword;           
    }
    else if(numGenerated === null && scGenerated === null){
        var preGenerated = lcGenerated +","+ucGenerated;
        var removeComma = preGenerated.replaceAll(",","");
        var postGenerated = removeComma.split("");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * postGenerated.length);
            actualPassword = actualPassword + postGenerated[index];
        }
        return actualPassword;
    }else if(numGenerated === null && lcGenerated === null){
        var preGenerated = scGenerated +","+ucGenerated;
        var removeComma = preGenerated.replaceAll(",","");
        var postGenerated = removeComma.split("");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * postGenerated.length);
            actualPassword = actualPassword + postGenerated[index];
        }
        return actualPassword;
    }else if(numGenerated === null && ucGenerated === null){
        var preGenerated = scGenerated +","+lcGenerated;
        var removeComma = preGenerated.replaceAll(",","");
        var postGenerated = removeComma.split("");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * postGenerated.length);
            actualPassword = actualPassword + postGenerated[index];
        }
        return actualPassword;
    }
    else if(numGenerated === null && scGenerated === null && lcGenerated === null){
        var preGenerated = ucGenerated;
        var removeComma;
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * preGenerated.length);
            actualPassword[i] = preGenerated[index];
        }
        removeComma = actualPassword.toString().replaceAll(",","");
        return removeComma;
    }else if(numGenerated === null && scGenerated === null && ucGenerated === null){
        var preGenerated = lcGenerated;
        var removeComma = preGenerated.toString().replaceAll(",","");
        var postGenerated = removeComma.split("");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * postGenerated.length);
            actualPassword = actualPassword + postGenerated[index];
        }
        return actualPassword;
    }else if(numGenerated === null && lcGenerated === null && ucGenerated === null){
        var preGenerated = scGenerated;
        var removeComma = preGenerated.replaceAll(",","");
        var postGenerated = removeComma.split("");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * postGenerated.length);
            actualPassword = actualPassword + postGenerated[index];
        }
        return actualPassword;
    }else {
        var preGenerated = numGenerated +","+ scGenerated +","+ lcGenerated +","+ucGenerated;
        var removeComma = preGenerated.replaceAll(",","");
        var postGenerated = removeComma.split("");
        var actualPassword = new Array();
        for(var i = 0; i < passLength; i++){
            var index = Math.floor(Math.random() * postGenerated.length);
            actualPassword = actualPassword + postGenerated[index];
        }
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
