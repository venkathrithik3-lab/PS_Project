function greetUser(){
    document.getElementById("Greeting").innerHTML="Hello~! welcome to the webpage";
    let time= document.getElementById("DayTime").value;
    if(time==="Morning"){
        document.getElementById("timeGreet").innerHTML="Good Morning!";
    }
    else if(time==="Afternoon"){
        document.getElementById("timeGreet").innerHTML="Good Afternoon!";
    }
    else if(time==="Evening"){ 
        document.getElementById("timeGreet").innerHTML="Good Evening!";
    }
    else if(time==="Night"){
        document.getElementById("timeGreet").innerHTML="Good Night!";
    }
}
/*<h1>Force Calculator</h1>
        <input type="number" id="Mass" placeholder="Enter Mass">
        <br>
        <input type="number" id="Acceleration" placeholder="Enter Acceleration">
        <br>
        <button onclick="calculateForce()">Calculate Force</button>
        <h3 id="forceResult">Result:</h3>*/
function convertTemperature() {
    var temperature = parseFloat(document.getElementById("Temperature").value);
    var from = document.getElementById("fromUnit").value;
    var to = document.getElementById("toUnit").value;
    if (from === to) {
        document.getElementById("temperatureResult").innerHTML = "Result:"+temperature + " " + to;
    }
    if (from === "C" && to === "F") {
        var result = (temperature * 9/5) + 32;
        document.getElementById("temperatureResult").innerHTML = "Result:"+result + " " + to;
    }
    if (from === "C" && to === "K") {
        var result = temperature + 273;
        document.getElementById("temperatureResult").innerHTML = "Result:"+result + " " + to;
    }
    if (from === "F" && to === "C") {
        var result = (temperature - 32) * 5/9;
        document.getElementById("temperatureResult").innerHTML = "Result:"+result + " " + to;
    }
    if (from === "F" && to === "K") {
        var result = (temperature - 32) * 5/9 + 273;
        document.getElementById("temperatureResult").innerHTML = "Result:"+result + " " + to;
    }
    if (from === "K" && to === "C") {
        var result = temperature - 273;
        document.getElementById("temperatureResult").innerHTML = "Result:"+result + " " + to;
    }
    if (from === "K" && to === "F") {
        var result = (temperature - 273.15) * 9/5 + 32;
        document.getElementById("temperatureResult").innerHTML = "Result:"+result + " " + to;
    }
}
function simpleInterest() {
    var principal = parseFloat(document.getElementById("Principal").value);
    var rate = parseFloat(document.getElementById("Rate").value);
    var time = parseFloat(document.getElementById("Time").value);
    var simple = (principal * rate * time) / 100;
    document.getElementById("interestResult").innerHTML = "Result: Simple Interest = " + simple;
}
function compoundInterest() {
    var principal = parseFloat(document.getElementById("Principal").value);
    var rate = parseFloat(document.getElementById("Rate").value);
    var time = parseFloat(document.getElementById("Time").value);
    var frequency = parseFloat(document.getElementById("CompoundFrequency").value);
    var amount = principal * Math.pow((1 + (rate / (frequency * 100))), (frequency * time));
    var compound = amount - principal;
    document.getElementById("interestResult").innerHTML = "Result: Compound Interest = " + compound;
}
function calculateForce(){
    var mass=parseFloat(document.getElementById("Mass").value);
    var acceleration=parseFloat(document.getElementById("Acceleration").value);
    var force=mass*acceleration;
    document.getElementById("forceResult").innerHTML="Result: Force = "+force;
}