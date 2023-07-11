console.log("Welcome to tic tac toe")
let music = new Audio('floating-abstract-142819.mp3')
let audioturn = new Audio('turn.mp3')
let success = new Audio('success.mp3')
let resetmusic = new Audio('reset.mp3')
let gameover = false;
let turn = "X"

//for a background music 
music.play();

function bgpause() {
    var b = document.getElementById('ps');
    b.addEventListener('click', (e) => {
        if (e) music.pause();
        // if(e) music.play();
     
     })   

    }
bgpause();

function bgplay(){
    var b=document.getElementById('pl');
    b.addEventListener('click',(e)=>{
    if(e) music.play();
    })
}
bgplay();

//Function to change the turn
const changeTurn = () => {
    return turn === 'X' ? 'O' : 'X'
}


// a function to add img to the page
let ig = () => {
    const x = document.createElement('IMG')
    x.setAttribute("src", "giphy.gif");
       x.setAttribute('height',"200vw");
    document.getElementById('img').append(x);
}

//function to  act on winning the game

const checkwin = () => {
    let textbox = document.getElementsByClassName('boxtext')
    let win = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [2, 5, 8]
    ]
    win.forEach(e => {
        if (textbox[e[0]].innerText === textbox[e[1]].innerText && textbox[e[2]].innerText === textbox[e[1]].innerText && textbox[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = textbox[e[0]].innerText + " Won the game ";
            gameover = true;
            success.play();
           
            ig();
            

        }
    })
}
// fuction for reseting the game
// let x = document.getElementById('reset');
// x.addEventListener('click', () => {
//     let textboxes = document.querySelectorAll('.boxtext');
//     Array.from(textboxes).forEach(element => {
//         element.innerText = "";
      
//     });

// });

//function work while resetin the game
let x=document.getElementById('reset');
x.addEventListener('click',function(){
    window.location.href='index.html';
})





// GAME logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(function (Element) {
    let textbox = Element.querySelector('.boxtext');
    Element.addEventListener('click', function () {

        if (textbox.innerText === '') {
            textbox.innerText = turn;

            turn = changeTurn();
            audioturn.play();
            checkwin();
            if (!gameover) {

                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }


    })
})





