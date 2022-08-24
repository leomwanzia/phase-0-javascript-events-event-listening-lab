// let input;
// input = document.getElementById("button");
// function addingEventListener() {
//     const input = document.getElementsById("button");

// 	function clickAlert() {
// 		alert("I was clicked!");
// 	}

// 	input.addingEventListener("click", clickAlert);
// }

let input;
document.getElementById("button").addEventListener
('click', () => alert('I was clicked!') )

function addingEventListener() {
const input = document.getElementById("button");
if (input){
    input.addEventListener('click', clickAlert);
}
function clickAlert() {
    alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);
} 