//randomly choose who starts
let random = Math.random();
let xturn;
if(random > 0.5) {
    xturn = false;
}
else xturn = true;

function playTurn(box_num) {
    //get the index of the box
    let box = box_num.charAt(2);
    //check if square is occupied
    if(document.getElementById(box_num).innerHTML != "") {
        alert("This square has already been played");
        return;
    }
    //play turn
    if(xturn) {
        document.getElementById(box_num).innerText = "X";
        document.getElementById("turn_indicator").innerHTML = "It is O's turn";

    }
    else {
        document.getElementById(box_num).innerText = "O";
        document.getElementById("turn_indicator").innerHTML = "It is X's turn";

    }
    alert("placed on square " + box);
    //switch turns
    xturn = !xturn;
}

function reset() {
    const squares = document.querySelectorAll('.square');
    //for each square set the inner text to empty
    squares.forEach(square => square.innerText = '');
    
    document.getElementById('turnIndicator').innerText = currentPlayer + "'s Turn";
    //choose new starting player
    let random = Math.random();
    if(random > 0.5) {
        xturn = false;
    }
    else xturn = true;
    //reset moves
}
