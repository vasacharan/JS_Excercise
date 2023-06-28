

    // var check = /^[a-zA-Z\-]+$/;
    function test(){
    let inputNameText = document.getElementById('fname').value;
    let inputlen = inputNameText.length;

    
    console.log(inputlen);
    }
    function inputValidation(){
        if(check.test(inputNameText) && inputlen < 5){
            console.log('user name must be above 5 letters');
           
        }
    }

    inputNameText.addEventListener('keyup', inputValidation);

