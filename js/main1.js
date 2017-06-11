$(document).ready(main);

function main () {
    var keys = $('.calculator-buttons-row button');
    const operators = ['/', '=', '+', '*', '.', '-'];
    var checkDecimal = false;
    calculator(keys, operators, checkDecimal);
}

function calculator(keys, operators, checkDecimal) {
    $(keys).on('click', function () {
        var btnValue = $(this)[0].textContent;
        // var inputText = get_input_text($('.result')[0].textContent, btnValue, operators);
        var inputText = get_input_text($('.result-screen')[0].textContent, btnValue, operators);
		var lastChar = inputText[inputText.length - 1];

        if(operators.indexOf(btnValue)>-1 && btnValue !== "."){
            checkDecimal = false;
        }
        // If clear key is pressed, erase content.
        if(btnValue === 'C') {
            $('.result-screen').text("");
            checkDecimal = false;
        }
        // If input empty, erase content.
        else if(inputText === "" && operators.includes(btnValue)) {
            console.log(inputText);
            $('.result-screen').text("");
        }
        else if(btnValue === '=') {
			var equation = inputText;
            var evaluate = eval(equation);
            $('.result-screen').text(equation + " = " + evaluate);
            checkDecimal = true;
        }
        else if(btnValue === ".") {
            if(!checkDecimal){
                $('.result-screen').text(inputText+ btnValue);
                checkDecimal = true;
            }
        }
        // Append the input text with the button value
        else {
            $('.result-screen').text(inputText + btnValue);
        }
    });
}

function get_input_text(input, btnValue, operators) {

    var lastChar = input[input.length - 1];
    // Replace operator from the end of the input if the button value is an operator.
    if(operators.indexOf(lastChar)>-1 && operators.indexOf(btnValue)>-1) {
        input = input.slice(0,-1);
        lastChar = input[input.length - 1];
    }

    // If input text is an equation already and the button is an operator
    if (input.includes("=") && operators.includes(btnValue)) {
        var eq_index = input.indexOf("=");
        return input.slice(eq_index+2, input.length);
    }
    // If input text is an equation, but the button is a number
    else if (input.includes("=")) {
        return "";
    }
    else {
        return input;
    }
}
