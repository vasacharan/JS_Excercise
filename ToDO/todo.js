
function addItem(){
    var newListitem = document.createElement('p');
    newListitem.innerText = prompt('Enter Text').toUpperCase();
    
    var parentItem = document.getElementById('box');
    parentItem.append(newListitem);
    
    }