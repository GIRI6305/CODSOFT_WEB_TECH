const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

let input = "";

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let value = button.innerText;

        if (value === "C") {
            input = "";
            screen.value = "";
        }
        else if (value === "=") {
            try {
                input = eval(input);
                screen.value = input;
            } catch (e) {
                screen.value = "Error";
                input = "";
            }
        }
        else {
            input += value;
            screen.value = input;
        }

    });

});
