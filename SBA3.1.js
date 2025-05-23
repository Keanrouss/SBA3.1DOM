//selecting all of the buttons elements
let CalcbuttonsEl = document.querySelectorAll("button");
//selecting inputs by their ID/ narrowing down "output" bar to show result
let inputEl = document.getElementById('Output');
// to be able to run through everything/ only loop I am able to perform confidently
for(let i=0; i< CalcbuttonsEl.length; i++){
    CalcbuttonsEl[i].addEventListener("click", () => {
        //assigning "C" button value role on the calculator as an eraser
        // while assigning "=" button value role on the calculator output display
const buttonValue = CalcbuttonsEl[i].textContent;

if (buttonValue === "C"){
    clearOutput();
}else if (buttonValue === "="){
    calculateOutput();
    } else {
        appendValue(buttonValue)
    }
});
}
// to get the function to calculate whatever amount is clicked.
// "" space meaning..infinite opening as the numbers calculated is unknown
function calculateOutput() {
    inputEl.value ="";  
}



