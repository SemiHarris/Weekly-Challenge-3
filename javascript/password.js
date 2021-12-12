var passwordAmount= window.prompt("Enter in your password length. (40-120 character)")
/*My Arrays*/
var num = "0123456789".split('');

var lowLetters = "abcdefghijklmnopqrstuvwxyz".split('');

var upLetters =("abcdefghijklmnopqrstuvwxyz".toUpperCase()).split('')

var symbols = '!"#$%&()*+,-./;:<>=?@[]\)^_`~{}|'.split('');

/*Generating Random Password*/




var parameters = [num,lowLetters,upLetters,symbols]
var PasswordGenerator = function() {
    var passcode = [];
    for (var i = 0; i < passwordAmount; i++) {

        var randomNum = Math.floor((Math.random()) * parameters.length);
        var characters = parameters[randomNum]

        var x = Math.floor((Math.random()) * characters.length);
        var y = characters[x];  

        passcode.push(y);
    }

    var password = passcode.join("");
    return password;
}

PasswordGenerator()
password=PasswordGenerator()
console.log(password)




