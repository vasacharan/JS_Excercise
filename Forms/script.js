const form = document.getElementById('form');
const username = document.getElementById('userName');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let userErrFound = document.querySelector('#userName').classList.contains('err');
    let pwdWErrorFound = document.querySelector('#password').classList.contains('err');
    let pwd2WErrorFound = document.querySelector('#password').classList.contains('err');
    
    if(userErrFound || pwdWErrorFound){
        console.log('Error found');
    }else if(pwdWErrorFound || pwd2WErrorFound){
        console.log('Error found');
    }else{
        window.location="https://www.facebook.com";
    } 
    
   
    
    
});

    const validateInputs =() =>{
            const userNamevalue = username.value.trim();
            const passwordvalue = password.value.trim();
            const password2value = password2.value.trim();
            let i=0

            if(userNamevalue =="" || userNamevalue ==null){
                document.querySelector('#userName').classList.remove('sus','err');
                document.querySelector('#userName').classList.add('err');
                
                document.getElementById('error1').innerHTML = 'User Name Should be Enter'; 
                i=0;
                }else if(userNamevalue.length < 6 || userNamevalue.length > 12){
                    document.querySelector('#userName').classList.remove('sus','err');
                document.querySelector('#userName').classList.add('err');
                
                document.getElementById('error1').innerHTML = 'User Name Should be between 8 to 16 chars';
                i=0;
                }else{
                    
                    document.querySelector('#userName').classList.remove('sus','err');
                    document.querySelector('#userName').classList.add('sus');
                document.getElementById('error1').innerHTML = 'valid user Name';
                i++
            }
    
   
            if(passwordvalue =="" || passwordvalue ==null){
                document.querySelector('#password').classList.remove('sus','err');
                document.querySelector('#password').classList.add('err');
                document.getElementById('error3').innerHTML = 'Password Should be Enter'; 
                i=0;

                }else if(passwordvalue.length < 8 || passwordvalue.length > 16){
                    document.querySelector('#password').classList.remove('sus','err');
                    document.querySelector('#password').classList.add('err');
                    
            
                document.getElementById('error3').innerHTML = 'Password Should be between 8 to 16 chars';
                i=0;

                } else{
                    document.querySelector('#password').classList.remove('sus','err');
                    document.querySelector('#password').classList.add('sus');
            
                  i=0;
                 }

                if(passwordvalue != password2value){
                    document.querySelector('#password2').classList.remove('sus','err');
                    document.querySelector('#password2').classList.add('err');
                    document.getElementById('passw').innerHTML = 'Passwords Not same';
                }else{
                    document.querySelector('#password2').classList.remove('sus','err');
                    document.querySelector('#password2').classList.add('sus');
                   i++ 
                }

                 if(i==3){
                     return true
                 } else {
                    return false
                 }
        
};


username.addEventListener('keyup',validateInputs);
password.addEventListener('keydown',validateInputs);
password2.addEventListener('keyup',validateInputs);

