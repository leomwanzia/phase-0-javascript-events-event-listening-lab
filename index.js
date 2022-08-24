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
input = document.getElementById("button");
function addingEventListener() {
    const input = document.getElementById("button");

    function clickAlert() {
        alert("I was clicked!");
    }

    input.addEventListener("click", clickAlert);
}