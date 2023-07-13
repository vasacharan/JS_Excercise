const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('Email');
const password = document.getElementById('password');
const mobileno = document.getElementById('mbno');
const validUser = /^[a-zA-Z0-9]{6,15}$/;
const validemail = /^[a-z0-9._@]{1,16}[a-z]{1,5}.com$/;
const validPassword = /^[a-zA-Z0-9_@]{8,16}$/;
const validMbno = /^[6-9][0-9]{9}$/;

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(validUser.test(userName.value) && validemail.test(email.value) && validPassword.test(password.value) && validMbno.test(mobileno.value)){
    
        window.location="https://www.facebook.com";
    
    }else{
        document.querySelector('#username').classList.add('validate');
        document.querySelector('#Email').classList.add('validate');
        document.querySelector('#password').classList.add('validate');
        document.querySelector('#mbno').classList.add('validate');
        alert('Enter valid Inputs');
        }
    });
    function validateNameInput(){
    var validUser = /^[a-zA-Z0-9]{6,15}$/;
    if(validUser.test(userName.value)){
        userName.style.outlineColor = 'green';
        document.getElementById('name_error').innerText = '';
        document.getElementById('sus1').innerText = `Valid user Name`;
        }else{
        
        userName.style.outlineColor = 'red';
        document.getElementById('sus1').innerText = '';
        document.getElementById('name_error').innerText = 'Enter Valid User Name';
        }
    }  
        function validateEmailInput(){
            const validemail = /^[a-z0-9._@]{1,16}[a-z]{1,5}.com$/;
                                
            if(validemail.test(email.value)){
                email.style.outlineColor = "green";
                document.getElementById('email_error').innerText = '';
                document.getElementById('sus2').innerText = 'Valid mail Id';
            }else{
                email.style.outlineColor = "red";
                document.getElementById('sus2').innerText = '';
                document.getElementById('email_error').innerText = 'not a Valid mail Id, e.g: abcsfr123@gmail.com';
            }
        }
        
        function validatePasswordInput(){
            const validPassword = /^[a-zA-Z0-9_@]{8,16}$/;

            if(validPassword.test(password.value)){
                password.style.outlineColor = "green";
                document.getElementById('pw_error').innerText = '';
                document.getElementById('sus3').innerText = `valid password`;
            }else{
                password.style.outlineColor = "red";
                document.getElementById('sus3').innerText = '';
                document.getElementById('pw_error').innerText = `password accept '@','_' letters`;
            }
        }
         
        function validatePhnoInput(){
            const validMbno = /^[6-9][0-9]{9}$/;

            if(validMbno.test(mobileno.value)){
                mobileno.style.outlineColor = "green";
                document.getElementById('mbno_error').innerText = '';
                document.getElementById('sus4').innerText = `valid Mobile number`;
            }else{
                mobileno.style.outlineColor = "red";
                document.getElementById('sus4').innerText = '';
                document.getElementById('mbno_error').innerText = `Enter valid Indian Mobile number`;
            }
        }
        userName.addEventListener('keyup', validateNameInput);
        email.addEventListener('keyup',validateEmailInput);
        password.addEventListener('keyup',validatePasswordInput);
        mobileno.addEventListener('keyup',validatePhnoInput);
        

       