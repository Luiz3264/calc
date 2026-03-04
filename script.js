function load(){
    text = document.getElementById("text");
    calc = document.getElementById("calc");
}
function calculate(){
    try {
        var result = eval(calc.value);
    } 
    catch (e) {
        text.innerHTML='error'
    }
    text.innerText = result;
}