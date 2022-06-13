console.log("welcome to Tic Tac Toe");
let audioTurn = new Audio("button-10.mp3");
let turn = "X"
let gameOver=false

const changeTurn = () => {
   return turn === "X" ? "0" : "X"
}
const checkWin = () => {
   let boxTexts = document.getElementsByClassName('boxText');
   let wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ]
   wins.forEach(e => {
      if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && 
      (boxTexts[e[0]].innerText !== "")){

         document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " won"
         gameOver=true
         document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width='200px';
      }
      
      
      

   })
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
   let boxText = element.querySelector('.boxText');
   element.addEventListener('click', () => {
      if (boxText.innerText == '') {
         boxText.innerText = turn;
         turn = changeTurn();
         audioTurn.play();
         checkWin();
         if(!gameOver){
         document.getElementsByClassName("info")[0].innerText = "Turn For" + turn
         }

      }

   })

})
reset.addEventListener('click',()=>{
   let boxtextt=document.querySelectorAll('.boxText');
   Array.from(boxtextt).forEach(element=>{
      element.innerText=''
   });
} )