

function randomValue(){
    var value1 = Math.random() * 500 ;
    var value2 = Math.random() * 400 ;
    var num1 = parseInt(value1.toFixed());
    var num2 = parseInt(value2.toFixed());
    document.getElementById('random1').value = num1;
    document.getElementById('random2').value = num2;
    document.getElementById('sum').value = "";
       
}
function addValue(){
    num1 = parseInt(document.getElementById('random1').value);
    num2 = parseInt(document.getElementById('random2').value);

    document.getElementById('sum').value = `${num1 + num2}`;
}

let message = (function(){
   let date = new Date();
   return document.getElementById('date').innerHTML = date;
  })();



  