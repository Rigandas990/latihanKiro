// get variabel 
const redLight = document.getElementById("red")
const yellowLight = document.getElementById("yellow")
const greenLight = document.getElementById("green")
const switchBtn = document.getElementById("switchButton")

// initial value
redLight.style.background = "red";
let current = "red";

// switch Light
    function switchLight() {
        yellowLight.style.background = "yellow";

        if (current == "red") {
            current == "green" ; 
            redLight.style.background = " #444 "
            yellowLight.style.background = " #444 "
            greenLight.style.background = "green"
            current = "green"
        }
        else {
            current = "red"
            redLight.style.background = " #444 "
            yellowLight.style.background = " #444 "
            greenLight.style.background = "green"
            }

        }
    }