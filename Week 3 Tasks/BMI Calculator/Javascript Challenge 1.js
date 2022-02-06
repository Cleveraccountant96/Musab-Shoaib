window.onload=()=>{
    let button = document.querySelector("#btn");
    button.addEventListener("click",calculateBMI);
}
function calculateBMI(){
    let weight = parseInt(document.querySelector("#weight").value);
    let height = parseInt(document.querySelector("#height").value);
    let result = document.querySelector("#result");
    if (height === ""||isNaN(height)) result.innerHTML="Put height in cm";
    else if (weight ===""||isNaN(weight)) result.innerHTML="Put weight in kg";
    else {
        let bmi = (weight/(height*height)/1000).toFixed(2);
        if (bmi< 18.5) result.innerHTML = "Under Weight, Eat More !";

        else if (bmi> 18.5 && bmi< 24.9) result.innerHTML = "Normal, Do Push Ups";

        else result.innerHTML = "You are Over Weight, Exercise please.";
    }
}
