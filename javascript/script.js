function addition(){
    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;

    document.getElementById('addResult').innerHTML = parseInt(value1) + parseInt(value2);
}

function subtraction(){
    var value3 = document.getElementById('value3').value;
    var value4 = document.getElementById('value4').value;

    document.getElementById('subResult').innerHTML = parseInt(value3) - parseInt(value4);
}

function multiplication(){
    var value5 = document.getElementById('value5').value;
    var value6 = document.getElementById('value6').value;

    document.getElementById('mulResult').innerHTML = parseInt(value5) * parseInt(value6);
}

function division(){
    var value7 = document.getElementById('value7').value;
    var value8 = document.getElementById('value8').value;

    document.getElementById('divResult').innerHTML = parseInt(value7) / parseInt(value7);
}