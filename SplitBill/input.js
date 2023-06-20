

function splitcal(){
    var inputNum = document.getElementById('numAmount').value;
    // if(inputNum <= 0 || inputNum < 1){
    //     document.getElementById('numAmount').style.outlineColor='red';
    //     // document.getElementById('numPersons').style.outlineColor='red';
    // }
    // let errorMsg = (function(){
    //     if(inputNum != 0)
    //     return document.getElementById('numAmount').style.outlineColor = 'red';
    //    })();
    
    var noPersons = document.getElementById('numPersons').value;
    var splitedAmount =(inputNum / noPersons).toFixed(2);
    document.getElementById('splitAmount').value = splitedAmount;
}



