/*My Arrays*/
var num = "0123456789".split('');

var lowLetters = "abcdefghijklmnopqrstuvwxyz".split('');

var upLetters =("abcdefghijklmnopqrstuvwxyz".toUpperCase()).split('')

var symbols = '!"#$%&()*+,-./;:<>=?@[]\)^_`~{}|'.split('')

/*Generating Random Password*/
var Random = function(passwordCount, typeSelect) {
    var passcode = [];
    for (var i = 0; i < passwordCount; i++) {

        var randomNum = Math.floor((Math.random()) * typeSelect.length);
        var characters = typeSelect[randomNum]

        var x = Math.floor((Math.random()) * characters.length);
        var y = characters[x];  

        passcode.push(y);
    }

    var password = passcode.join("");
    return password;
}


var passwordGenerator = function() {
    var passwordCount= window.prompt("Enter in your password length. (8-128 character)")
        
        if (passwordCount < 129 & passwordCount > 7) {
        
            }else if (passwordCount === "" || passwordCount === null) {
                window.alert("Please Enter an Amount");
            passwordGenerator();

            }else {
                window.alert("Ivalid Input");
                passwordGenerator();
        }
        
    var upLettersTrue = window.confirm("Do you want to use upper case letters.")

    var lowLettersTrue = window.confirm("Do you want to use lower case letters.")
    
    var numTrue = window.confirm("Do you want to use numbers.")

    var symbolsTrue = window.confirm("Do you want to use symbols.")

    parameters = [upLetters, lowLetters, num, symbols]
    var check = [upLettersTrue, lowLettersTrue, numTrue, symbolsTrue]
    var typeSelect = [];

        for (var i = 0; i < check.length; i++) {
    
            if (check[i]) {
    
                var n = parameters[i];
    
                typeSelect.push(n)
            }
    }

    var passWord = Random(passwordCount, typeSelect)
    document.getElementsByName("Password")[0].value = passWord;
}
       



    








