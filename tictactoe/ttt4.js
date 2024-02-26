let gameOver = false;
//randomly choose who starts
let random = Math.random();
let xturn;
if(random > 0.5) {
    xturn = false;
}
else xturn = true;

let moves = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];

let numMoves = 0;
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
        moves[box] = 'X';
    }
    else {
        document.getElementById(box_num).innerText = "O";
        document.getElementById("turn_indicator").innerHTML = "It is X's turn";
        moves[box] = 'O';
    }
    xturn = !xturn;
    checkWin();
    numMoves++;
}

function reset() {
    const squares = document.querySelectorAll('.square');
    //for each square set the inner text to empty
    squares.forEach(square => square.innerText = '');
    let currentPlayer;
    if(xturn) {currentPlayer  = "X";}
    else {currentPlayer = "O";}
    document.getElementById('turn_indicator').innerText = "It is " +  currentPlayer + "'s Turn";
    //choose new starting player
    let random = Math.random();
    if(random > 0.5) {
        xturn = false;
    }
    else xturn = true;
    //reset moves
    moves =  ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    numMoves = 0;
    document.getElementById("win_message").style.visibility = "hidden";
}

function checkWin() {
    //create winCondition array
    const winConditions = [
        moves[0] + moves[1] + moves[2], //row 1
        moves[3] + moves[4] + moves[5],  //row 2
        moves[6] + moves[7] + moves[8],  //row 3
        moves[0] + moves[3] + moves[6], //col 1
        moves[1] + moves[4] + moves[7], //cpl 2
        moves[2] + moves[5] + moves[8], //col 3
        moves[0] + moves[4] + moves[8], //diag 1
        moves[2] + moves[4] + moves[6] // diag 2

    ]
    console.log(winConditions);
    let win_message = document.getElementById("win_message");
    for(let i = 0; i < 9; i++) {
        if(winConditions[i] == "XXX") {
            win_message.innerHTML = "X WINS!!!";
            win_message.style.visibility = 'visible';
        }
        else if(winConditions[i] == "OOO") {
            win_message.innerHTML = "O WINS!!!";
            win_message.style.visibility = 'visible';
        }
    }
    console.log(numMoves)
    console.log(moves);
    //if the number of moves reaches 8 (starts at 0) and a win has not been
    //reached then it must be stalemate
    if(numMoves == 8) {
        win_message.innerHTML = "STALEMATE!!!";
            win_message.style.visibility = 'visible';
    }
}