let form = document.querySelectorAll(".form")
let information = document.querySelector(".container")

const node = document.getElementById("clone") // suggest use format

//validate the form/password
// form.addEventListener("submit",(e) =>{
    // Event.preventDefault();
// console.log(container)

//let validation = form.elements["Password"].value;
//if (Password ===Uryuko){
    //console.log(validation)
//}else (Passworld===false)
function validatePassword() { //if password area is left empty, alert
    const Password = document.querySelectorAll("Password").value}
    // if (Password.length < 12) {
    //     window.alert("Password is weak, try again!")
    //     return false;  
    //   if (Password =="") {
        // return false;
    // }
form.addEventListener('submit', function(event) {
    event.preventDefault;
console.log(information)
if (Password =="") {
        return false;
    }
    }

)
    





//selecting all of the buttons elements
let CalcbuttonsEl = document.querySelectorAll("button");
//selecting inputs by their ID/ narrowing down "output" bar to show result
let inputfieldEl = document.getElementById('Output');
// to be able to run through everything/ only loop I am able to perform confidently
for (let i = 0; i < CalcbuttonsEl.length; i++) {
    CalcbuttonsEl[i].addEventListener("click", (e) => {
        //assigning "C" button value role on the calculator as an eraser
        // while assigning "=" button value role on the calculator output display
        const buttonValue = CalcbuttonsEl[i].textContent;
        console.log(buttonValue)
        if (buttonValue === "C") {
            inputfieldEl.value = "";
        } else if (buttonValue === "=") {
            inputfieldEl.value = eval(inputfieldEl.value)//?
        } else {
            inputfieldEl.value+= buttonValue
        }
    });
}
// to get the function to calculate whatever amount is clicked.
// "" space meaning..infinite opening as the numbers calculated is unknown
