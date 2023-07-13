// const backpack = {
    //     name: "Everyday Backpack",
    //     volume: 30,
    //     color: "grey",
    //     pockets: 15,
    //     strapLength: {
    //         left: 26,
    //         right: 26,
    //     },
    //     bagOpenClose: true,
    // };
    
    // const laptop = {
    //     name: "laptop Bag",
    //     volume: 25,
    //     color: "black",
    //     pockets: 5,
    //     strapLength: {
    //         left: 20,
    //         right: 20,
    //     },
    //     bagOpenClose: false,
    // };
    
    // function toggleLid(lidstatus) {
    //     this.bagOpenClose = lidstatus;
    //     if (lidstatus) {
    //         console.log("Bag is open.");
    //     } else {
    //         console.log("Bag is closed.");
    //     }
    // }
    
    // function newStrapLength(lengthLeft, lengthRight) {
    //     this.strapLength.left = lengthLeft;
    //     this.strapLength.right = lengthRight;
    
    //     if (lengthLeft === lengthRight) {
    //         console.log("The bag length is under normal condition.");
    //     } else if (lengthRight > lengthLeft) {
    //         console.log("The bag length is under abnormal condition. The right strap length has increased. Try to adjust it.");
    //     } else {
    //         console.log("The bag length is under abnormal condition. The left strap length has increased. Try to adjust it.");
    //     }
    // }
    
    // toggleLid.call(backpack, true);
    // toggleLid.call(laptop, false);
    
    // newStrapLength.call(backpack, 26, 27);
    // newStrapLength.call(laptop, 21, 20);
    
    // console.log(backpack);
    // console.log(laptop);
    
const backpack = {
name : 'laptop Backpack',
color : 'blue',
volume : '20L',
weight : '300gms',
lidOpenClose : true,
stripSize :{
    leftSide : 28,
    rightside : 28
    }
};
function lidOpenCloseStatus(lidStatus){
    this.lidOpenClose = lidStatus;
    if(lidStatus){
        console.log('Big is in open condition');
    }else{
        console.log('Bag is in closed condition');
    }
}
lidOpenCloseStatus.call(backpack,true);

function stripCondition(stripLeft, stripRight){
    this.stripSize.leftSide = stripLeft;
    this.stripSize.rightside = stripRight;
    if(stripLeft == stripRight){
        console.log('bag is in normal condition');
    }else if(stripLeft < stripRight){
        console.log('The bag length is under abnormal condition. The right strap length has increased. Try to adjust it');

    }else{
        console.log('The bag length is under abnormal condition. The left strap length has increased. Try to adjust it');
    }
}
stripCondition.call(backpack,30,28);

console.log(backpack);
