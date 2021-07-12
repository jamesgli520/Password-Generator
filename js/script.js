// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    var passwordKeeper;

    
    //Method of password length
    function lengthOfPassword(){
        var passLength = prompt("Enter the length of password from 8 to 128");
        
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

            //Generate Numbers
            var passNumber = confirm("Would you like your password includes number?");
            if(passNumber){
                var numGenerated = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.random() *10;
                    var randomNumber = Math.floor(index);
                    numGenerated[i] = randomNumber;
                }
            }
            
            //Generate Special Characters
            var passSpecial = confirm("Would you like your password includes special Characters?");
            if(passSpecial){
                var specialCharacter = ["!","@","#","$","%","^","&","*","(",")","?"];
                var scGenerated = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.floor(Math.random() * 11);
                    
                    scGenerated[i] = specialCharacter[index];
                }
            }

            //Generate Lowercase Letters
            var passLowercase = confirm("Would you like your password includes lowercase letters?");
            if(passLowercase){
                var text = "abcdefghjiklmnopqrstuvwxyz";
                var lowercaseLetter = text.split("");
                var lcGenerated = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.floor(Math.random() * 26);
                    
                    lcGenerated[i] = lowercaseLetter[index];
                }
            }

            //Generate Uppercase Letters
            var passUppercase = confirm("Would you like your password includes uppercase letters?");
            if(passUppercase){
                var text = "abcdefghjiklmnopqrstuvwxyz";
                var uppercaseLetter = text.toUpperCase().split("");
                var ucGenerated = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.floor(Math.random() * 26);
                    
                    ucGenerated[i] = uppercaseLetter[index];
                }
            }

            if(numGenerated == null && scGenerated == null && lcGenerated == null && ucGenerated == null){
                alert("At least one character type should be selected");
                if(confirm("Would you like to start over")){
                    lengthOfPassword();
                }else{
                    return;
                }
            }else if(numGenerated == null){
                var preGenerated = scGenerated +","+ lcGenerated +","+ucGenerated;
                var removeComma = preGenerated.replaceAll(",","");
                var postGenerated = removeComma.split("");
                var actualPassword = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.floor(Math.random() * postGenerated.length);
                    actualPassword[i] = postGenerated[index];
                }
                return actualPassword;
            }else if(scGenerated == null){
                var preGenerated = numGenerated +","+ lcGenerated +","+ucGenerated;
                var removeComma = preGenerated.replaceAll(",","");
                var postGenerated = removeComma.split("");
                var actualPassword = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.floor(Math.random() * postGenerated.length);
                    actualPassword[i] = postGenerated[index];
                }
                return actualPassword;
            }else if(lcGenerated == null){
                var preGenerated = scGenerated +","+ numGenerated +","+ucGenerated;
                var removeComma = preGenerated.replaceAll(",","");
                var postGenerated = removeComma.split("");
                var actualPassword = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.floor(Math.random() * postGenerated.length);
                    actualPassword[i] = postGenerated[index];
                }
                return actualPassword;           
            }else if(ucGenerated == null){
                var preGenerated = scGenerated +","+ lcGenerated +","+numGenerated;
                var removeComma = preGenerated.replaceAll(",","");
                var postGenerated = removeComma.split("");
                var actualPassword = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.floor(Math.random() * postGenerated.length);
                    actualPassword[i] = postGenerated[index];
                }
                return actualPassword;           
            }
            else if(numGenerated == null && scGenerated == null){
                var preGenerated = lcGenerated +","+ucGenerated;
                var removeComma = preGenerated.replaceAll(",","");
                var postGenerated = removeComma.split("");
                var actualPassword = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.floor(Math.random() * postGenerated.length);
                    actualPassword[i] = postGenerated[index];
                }
                return actualPassword;
            }else if(numGenerated == null && lcGenerated == null){
                var preGenerated = scGenerated +","+ucGenerated;
                var removeComma = preGenerated.replaceAll(",","");
                var postGenerated = removeComma.split("");
                var actualPassword = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.floor(Math.random() * postGenerated.length);
                    actualPassword[i] = postGenerated[index];
                }
                return actualPassword;
            }else if(numGenerated == null && ucGenerated == null){
                var preGenerated = scGenerated +","+lcGenerated;
                var removeComma = preGenerated.replaceAll(",","");
                var postGenerated = removeComma.split("");
                var actualPassword = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.floor(Math.random() * postGenerated.length);
                    actualPassword[i] = postGenerated[index];
                }
                return actualPassword;
            }
            else if(numGenerated == null && scGenerated == null && lcGenerated == null){
                var preGenerated = ucGenerated;
                var removeComma = preGenerated.replaceAll(",","");
                var postGenerated = removeComma.split("");
                var actualPassword = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.floor(Math.random() * postGenerated.length);
                    actualPassword[i] = postGenerated[index];
                }
                return actualPassword;
            }else if(numGenerated == null && scGenerated == null && ucGenerated == null){
                var preGenerated = lcGenerated;
                var removeComma = preGenerated.replaceAll(",","");
                var postGenerated = removeComma.split("");
                var actualPassword = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.floor(Math.random() * postGenerated.length);
                    actualPassword[i] = postGenerated[index];
                }
                return actualPassword;
            }else if(numGenerated == null && lcGenerated == null && ucGenerated == null){
                var preGenerated = scGenerated;
                var removeComma = preGenerated.replaceAll(",","");
                var postGenerated = removeComma.split("");
                var actualPassword = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.floor(Math.random() * postGenerated.length);
                    actualPassword[i] = postGenerated[index];
                }
                return actualPassword;
            }else {
                var preGenerated = numGenerated +","+ scGenerated +","+ lcGenerated +","+ucGenerated;
                var removeComma = preGenerated.replaceAll(",","");
                var postGenerated = removeComma.split("");
                var actualPassword = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.floor(Math.random() * postGenerated.length);
                    actualPassword[i] = postGenerated[index];
                }
                console.log("hello");
                return actualPassword;
            }
            /*
            if(numGenerated != null && scGenerated != null && lcGenerated != null && ucGenerated != null){
                var preGenerated = numGenerated +","+ scGenerated +","+ lcGenerated +","+ucGenerated;
                var removeComma = preGenerated.replaceAll(",","");
                var postGenerated = removeComma.split("");
                var actualPassword = new Array();
                for(var i = 0; i < passLength; i++){
                    var index = Math.floor(Math.random() * postGenerated.length);
                    actualPassword[i] = postGenerated[index];
                }
                return actualPassword;
            }
            else{
                alert("At least one character type should be selected");
                if(confirm("Would you like to start over")){
                    lengthOfPassword();
                }else{
                    return;
                }
            }*/

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



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
     
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
