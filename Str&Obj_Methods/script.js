// //Array of Objects employee datails
// const employees = 
// [{fname:'charan',city:'vizag',empId:234,role:'Developer',salary:250000},
// {fname:'venky',city:'bangalore',empId:456,role:'Developer',salary:300000,},
// {fname:'Mohan',city:'Narsipatnam',empId:789,role:'Tester',salary:250000},
// {fname:'Naveen',city:'Bobbili',empId:489,role:'Developer',salary:250000},
// {fname:'Prasad',city:'Bangalore',empId:576,role:'Sr.Developer',salary:350000},
// ];
// //Map method:
// const list1 = employees.map((employees)=>employees.fname);
// let list3 = employees.map((employees)=>employees.fname == 'Naveen');
// employees.forEach((employees)=>{return employees.salary});
// const list2 = employees.filter((employees)=>employees.salary == 250000).map((employees)=>employees.fname) ;
// // console.log(list2);
// const nums = [1,2,3,4,5,10];
// // const list3 = 
// const list5 = employees.reduce((total, employees, value)=>(value = total + employees.salary));
// const list4 = nums.reduce((total,value)=>total + value);
// // console.log(employees);
// // console.log(list4);
// // console.log(list5);

// let num = 2;
// switch(num){

//     case 1 : console.log('Sky');
//     break;
//     case 2 : console.log('Sea');
//     break;
//     case 3 : console.log('rain');
//     break;
//     default : console.log('Nature');

// }
// // console.log(num);
// let mapreduce = employees.map((employees)=>employees.role).reduce((total,value)=>total + value +" " );
// console.log(mapreduce);
// console.log(list1);

// var sum = 0;

var count = 0;
const incrementCount = setInterval(() => {
    
    if(count <= 6){
        document.getElementById('countplus').innerHTML = `${count}`; 
       console.log(count);
       if(count == 6){
        return count = 0;
       }
    }
    count++;
    // console.log('hi');
},2000);
// console.log(incrementCount);

let newCount = 6;
function decreseCount(){
    
    if(newCount >= 0){
        document.getElementById('countminus').innerHTML = `${newCount}`; 
       console.log(newCount);
       if(newCount == 0){
        return newCount = 6;
       }
    }
    newCount--;
    
}
console.log(decreseCount());


