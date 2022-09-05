
function addingEventListener() {
const input = document.getElementById('button');
    if (input){
        input.addEventListener('click', clickAlert);
    }
function clickAlert() {
    alert('I was clicked!');
    }
     
    input.addEventListener('click', clickAlert);
} 