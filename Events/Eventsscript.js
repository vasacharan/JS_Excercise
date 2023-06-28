// 2Q Write a function named reverseString that takes a string as an argument and returns the reversed string.

// function reverseString(str){
//     let newString = "";
//     for(let i = str.length-1; i>=0; i--){
//         newString += str[i];
        
//     }
//     return newString;
// }
// console.log(reverseString('Achiversit'));

//3Q Write a function named isEven that takes a number as an argument and returns true if the number is even, and false if it is odd.

// function evenOrOdd(num){

//     if( num % 2 == 0 ){
//         document.getElementById('samples').innerHTML = `Yes its True the given number is even`;
//     }else{
//         document.getElementById('samples').innerHTML = `No. its False the given number is odd`;
//     }

// }
// evenOrOdd(13);
// document.getElementById('samples').innerHTML = 


//Q4 Write a function named capitalize that takes a string as an argument and returns the string with the first letter of each word capitalized.

// function firstCapital(nameStr){
//     nameStr.split('');
// let newName="";
// let capLetter ="";
//     for(let i=0; i <= nameStr.length ;i++){
//         nameStr[i] = nameStr.charAt(0).toUpperCase() + nameStr[i].substr(1);
        
//     }
//     let newString = nameStr.join('');
//     return newString;
// }
// console.log(firstCapital('hello world hi good morning'));


//Q5 Write a function named factorial that takes a number as an argument and returns the factorial of that number.

// function factorial(num){
// let count = 1;
// for(let i = 1; i <= num ; i++){

//  count *= i;

// }
// return count;
// }
// console.log(factorial(5));

//Q6 Write a function named largestNumber that takes an array of numbers as an argument and returns the largest number in the array.

// const numbersArr = [4,9,6,10,2,7];
// function largestNumber(numbersArr){

//     let largestNo = numbersArr.sort(function(a,b){ return a-b;});

//     let maxNo = Math.max.apply(null,largestNo);
//     console.log(maxNo);
//     return largestNo;
    
// }
// console.log(largestNumber([4,9,6,10,2,7]));

//Q7 Write a function named average that takes an array of numbers as an argument and returns the average of those numbers.

// function average(listofnos){
//     let total =0;
//     let avg = 0;
// listofnos.map((value)=> total += value);
//    avg = total/listofnos.length;
//     return avg.toFixed(2);
// }
// console.log(average([42,19,36,10,52,77]));

// Q8 Write a function named add that takes any number of arguments and returns their sum.

// function addNos(nums){
//     let value = 0;
//     for(let i=0; i<=nums.length; i++){
        
//         value += nums[i];
        
//     }
//     return value;
// }
// console.log(addNos(3));
// console.log(addNos(5));
// console.log(addNos(7));


//Q9 Write a function named isPalindrome that takes a string as an argument and returns true if the string is a palindrome, and false if it is not.

// function isPalindrome(nameValue){

//     let strLength = nameValue.length;

// for(let i = 0; i< strLength/2; i++)
//     if(nameValue[i] !== nameValue[strLength-i-1]){
//         console.log('this is not a palindrome');
//     }else{
//         console.log('this word is a palindrome');
//     }
 
// }
// isPalindrome('mom'); //madam

//Q10 Write a function named sumOfSquares that takes an array of numbers as an argument and returns the sum of their squares.

// function sumOfSquares(arrSquares){
//     let total =0;
    
//     arrSquares.map((value)=> total += value*value);
//      return total;
    

// }
// console.log(sumOfSquares([2,1,3,10,5,5]));




    
    // var v1 = 0, v2 = 1, nextVal;
    // let number = 10;

    // console.log(v1);
    // console.log(v2);
    // nextVal = v1 + v2;


    // while( nextVal <= number ){

    // console.log(nextVal);

    //     v1 = v2;
    //     v2 = nextVal;
    //     nextVal = v1 + v2;
    // }

    var numbers = [2,4,7,5,9];
    // let new = [];
    var newNum = numbers.map((value)=> value%2==0);
    console.log(value);
