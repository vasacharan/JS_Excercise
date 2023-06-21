

function splitcal(){
    var inputNum = document.getElementById('numAmount').value;
   
    var noPersons = document.getElementById('numPersons').value;
    var splitedAmount =(inputNum / noPersons).toFixed(2);
    document.getElementById('splitAmount').value = splitedAmount;

    if(inputNum <= 0){
        document.getElementById('errormsg1').innerHTML = `Amount should be more than 0`;
    }
    if(noPersons <= 1){
        document.getElementById('errormsg2').innerHTML = `persons should be more than 1`;
    }else {
        document.getElementById('errormsg2').innerHTML = ``;
    }
}
function empty(){
document.getElementById('numAmount').value = "";
document.getElementById('numPersons').value = ""; 
document.getElementById('errormsg1').innerHTML = "";
document.getElementById('errormsg2').innerHTML = "";
}

const printDate = (()=>{
    let date = new Date();
    return document.getElementById('date').innerHTML = date;
})();

