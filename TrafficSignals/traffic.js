// const infiniteTraffic = setInterval(TrafficLights,3000);

function TrafficLights(){
        var myRedTime = setInterval(redLight, 3000);
            function redLight(){
                document.querySelector('#boxa').classList.remove('box3','box2');
                document.querySelector('#boxa').classList.add('box1');
                document.querySelector('.list-red').classList.remove('green','yellow');
                document.querySelector('.list-red').classList.add('red');
                
        }
        const myYellowTime = setInterval(yellowLight, 6000);
            function yellowLight(){
                document.querySelector('#boxa').classList.remove('box1','box3');
                document.querySelector('#boxa').classList.add('box2');
                
                document.querySelector('.list-yellow').classList.remove('red','green');
                document.querySelector('.list-yellow').classList.add('yellow');
            
        }
        const myGreenTime = setInterval(greenLight, 9000);
            function greenLight(){
                document.querySelector('#boxa').classList.remove('box1','box2');
                document.querySelector('#boxa').classList.add('box3');
                document.querySelector('.list-green').classList.remove('yellow','red');
                document.querySelector('.list-green').classList.add('green');
                
        }
    }
        function stopTimer(){
            clearInterval(myRedTime);
            clearInterval(myYellowTime);
            clearInterval(myGreenTime);
        }