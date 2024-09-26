console.log("Welcome to My Tic Tac Toe");
let audioTurn = new Audio("turn.mp3");
let turn = "X";
let gameover = false;
const changeTurn = () =>
{
    turn = turn === "X" ? "O" : "X";
    return turn;
};
const checkWin = () =>
    {
    let boxText = document.getElementsByClassName('boxText');
    let wins = 
    [
        [0, 1, 2, 5, 5, 0], 
        [3, 4, 5, 5, 15, 0], 
        [6, 7, 8, 5, 25, 0], 
        [0, 3, 6, -5, 15, 90], 
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90], 
        [0, 4, 8, 5, 15, 45], 
        [2, 4, 6, 5, 15, 135]
    ];
    wins.forEach(e => {
        if (boxText[e[0]].innerText !== "" && boxText[e[0]].innerText === boxText[e[1]].innerText && boxText[e[1]].innerText === boxText[e[2]].innerText) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won";
            gameover = true;
            const line = document.querySelector(".line");
            if (e[5] === 90 || e[5] === 135 || e[5] === 45) {
                
                line.style.width = "42vw"; 
                line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            } else {
                
                line.style.width = "82vw"; 
                line.style.transform = `translate(${e[5]}vw, ${e[2]}vw) rotate(${e[5]}deg)`;
            }
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "175px";
        }
    });

    let isDraw = Array.from(boxText).every(box => box.innerText !== "");
    if (isDraw && !gameover) {
        document.querySelector('.info').innerText = "It's a Draw!";
    }
};
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxText.innerText === '' && !gameover) {
            boxText.innerText = turn;
            changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameover) 
            {
                document.querySelector(".info").innerText = "Turn for " + turn;
            }
        }
    });
});
document.getElementById('reset').addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    document.querySelector('.info').innerText = "Turn for X";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width = "0";
    gameover = false;
});
