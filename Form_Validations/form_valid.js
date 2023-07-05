const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('Email');
const password = document.getElementById('password');
const mobileno = document.getElementById('mbno');

form.addEventListener('submit',(e)=>{
e.preventDefault();

if(inputstatus){
    window.location="https://www.facebook.com";
}else{
    
    username.style.backgroundColor = 'tomato';
    email.style.backgroundColor = "tomato";
    password.style.backgroundColor = "tomato";
    mbno.style.backgroundColor = "tomato";
    alert('Enter valid Inputs');
}

});

var inputstatus = false;

function validateNameInput(){

    var validUser = /^[a-zA-Z0-9]{6,15}$/;

    if(validUser.test(username.value)){
        username.style.outlineColor = 'green';
        document.getElementById('name_error').innerText = `Valid user Name`;
        inputstatus = true;
        }else{
        
        username.style.outlineColor = 'red';
        document.getElementById('name_error').innerText = 'Enter Valid User Name';
        inputstatus = false;
        }
        return inputstatus;
    }  

        function validateEmailInput(){
            const validemail = /^[a-z0-9._@]{1,16}[a-z]{1,5}.com$/;
                                
            if(validemail.test(email.value)){
                email.style.outlineColor = "green";
                document.getElementById('email_error').innerText = 'Valid mail Id';
                inputstatus = true;
            }else{
                email.style.outlineColor = "red";
                document.getElementById('email_error').innerText = 'not a Valid mail Id';
                inputstatus = false;
            }
            return inputstatus;
        }
        
        function validatePasswordInput(){
            const validPassword = /^[a-zA-Z0-9_@]{8,16}$/;

            if(validPassword.test(password.value)){
                password.style.outlineColor = "green";
                document.getElementById('pw_error').innerText = `valid password`;
                inputstatus = true;
            }else{
                password.style.outlineColor = "red";
                document.getElementById('pw_error').innerText = `password'@','_' letters also accepted`;
                inputstatus = false;
            }
            return inputstatus;
        }
         
        function validatePhnoInput(){
            const validMbno = /^[6-9][0-9]{9}$/;

            if(validMbno.test(mbno.value)){
                mbno.style.outlineColor = "green";
                document.getElementById('mbno_error').innerText = `valid Mobile number`;
                inputstatus = true;
            }else{
                mbno.style.outlineColor = "red";
                document.getElementById('mbno_error').innerText = `Enter valid Indian Mobile number`;
                inputstatus = false;
            }
            return inputstatus;
        }
        username.addEventListener('keyup', validateNameInput);
        email.addEventListener('keyup',validateEmailInput);
        password.addEventListener('keyup',validatePasswordInput);
        mobileno.addEventListener('keyup',validatePhnoInput);
       