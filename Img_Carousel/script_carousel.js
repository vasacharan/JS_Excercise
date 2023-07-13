
var images = ["https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/3965521/pexels-photo-3965521.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/3509971/pexels-photo-3509971.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600"];

var count = 0;
const imageCarousel = setInterval(function increaseCount(){
    if(count <= images.length-1){
        document.getElementById('slide1').src = `${images[count]}`;
        // console.log(count); 
       if(count == images.length-1){
       count = 0; 
       return; 
       }
    }
    count++;   
},2000);


// var newCount = images.length-1;
// function decreseCount(){
//     if(newCount >= 0){
//         document.getElementById('slide1').src = `${images[newCount]}`; 
//     //    console.log(newCount);
//        if(newCount == 0){
//         newCount = images.length-1;
//         return;
//        }
//     }
//     newCount--; 
// }
// increaseCount();
