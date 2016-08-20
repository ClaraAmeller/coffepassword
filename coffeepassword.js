/*function selected() {  També agafarà quantes opcions són marcades 
    document.getElementById("futureText").innerHTML = "How many characters <input type='number' id='chars' value='4'><button type='submit' value='generate' onclick='random()'>Generate</button>";
    var chars = document.getElementById("chars").value;
    return chars;
}*/

function showingText() {
    document.getElementById("futureText").innerHTML = "How many characters <input type='number' id='chars' value='4' min='4' max='20'><button type='submit' value='generate' onclick='random()'>Generate</button>";
}

function random(options, xoption) {
    for (var i = 0; i < options.length; i++) {
        if (options[i] == "lowercase") {
            randomLow();
        }
    }
}

function selecting() {
    $(document).ready(function() {
        var values = [false, false, false, false];
        var options = [];
        var i = 0;
        
        $(".selector").click(function(evt) {
            
            theButton = $(evt.target);
            theButton.toggleClass("selected");
            xoption = theButton.data('info');
            

            if ($(theButton).hasClass("selected") === true) {
                values[xoption] = true;
                showingText();
                noption = theButton.data('name');
                options[i] = noption;
                i++;
                
            } else {
                values[xoption] = false; 
            }

            alert(values);
            //wichOptions(options);
            alert(xoption);
            alert(options);
        });
    });
}






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

selecting();



/* Arrays */
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

/*var symbols = ['#', '@', '!', '¡' ',', '.', '-', '_', '=', '?', '¿', '<', '>', '"', '*', '[', ']', '$', '%', '&', '/', '(', ')', ';', ':'];*/

/* Random */
var i = 0;
var clicked = 4;

/*
var result = "";
var lowercase = true;
var uppercase = true;
var number = true;
var symbol = true;
*/

/*for (var i = 0; i < clicked; i++) {
    
}*/

function random() {
    alert("Hem arribat a random()");
    alert("Chars: " + chars);
    alert("Opcio: " + opcio)
}
/*if (number) {
    for (i = 0; i < chars; i++) {
        result += numbers[Math.floor(Math.random() * numbers.length)];
    }
}

document.getElementById("showpassword").innerHTML = "Password: " + result;*/

/*alert("Password: " + result);*/