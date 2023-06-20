

function randomValue1(){
    var value1 = Math.random() * 150 ;
    var value2 = Math.random() * 100 ;
    var num1 = parseInt(value1.toFixed());
    var num2 = parseInt(value2.toFixed());
    document.getElementById('random1').value = num1;
    document.getElementById('random2').value = num2;

    document.getElementById('sum').value = `${num1+num2}`;
}

// console.log(num1);
   
// console.log(num1); 


let message = (function(){
   let date = new Date();
   return document.getElementById('sum1').innerHTML = date;
  })();



  