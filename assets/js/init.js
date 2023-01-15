const sizeBoard= 702;
const sizeCell= sizeBoard / 9;
const sizeChess= sizeCell - 10;
const classFonts = [
   'fa-solid fa-chess-pawn',
   'fa-solid fa-chess-rook',
   'fa-solid fa-chess-knight',
   'fa-solid fa-chess-bishop',
   'fa-solid fa-chess-queen',
   'fa-solid fa-chess-king',
   'fa-solid fa-chess-bishop',
   'fa-solid fa-chess-knight',
   'fa-solid fa-chess-rook',
];
const nameChesses = ['Pawn','Rook1','Knight1','Bishop1','Queen','King','Bishop2','Knight2','Rook2',];
const idWhites = nameChesses.map((name)=>'w'+name);
const idBlacks = nameChesses.map((name)=>'b'+name);
function init() {
   var chessboard = document.querySelector('#chessboard');
   for (let i = 8; i >= 0; i--) {
      for (let j = 0; j <= 8; j++) {
         let cell = document.createElement('div');
         cell.id = i.toString() + j.toString();
         if(i==0||j==0){
            let heading = cell;
            heading.className = 'cell cell--heading';
            let index = document.createElement('i');
            index.className = 'heading';
            if(i==0 && j!=0){
               index.innerText= String.fromCharCode(97+j); 
            }else if(j==0 && i!=0){
               index.innerText=i; 
            }
            heading.appendChild(index);
            cell=heading;
         }else{
            cell.className = 'cell';
            if ((i % 2 != 0 && j % 2 != 0) || (i % 2 == 0 && j % 2 == 0)) {
               cell.className = 'cell cell--black';
            }
         }
         chessboard.appendChild(cell);
      }
   }
   
   initPosition(1,2,'white');
   initPosition(8,7,'black');
}

function initPosition(i,iPawn,color){
   for(let j =1;j<=8;j++){
      let chess = document.createElement('i');
      chess.id = color=='white'? idWhites[j] : idBlacks[j];
      chess.className = classFonts[j];
      chess.classList.add('chess',color);
      chess.setAttribute('xy',`${i}${j}`)
      var cell = document.getElementById(`${i}${j}`);
      cell.appendChild(chess);
   }

   for(let j =1;j<=8;j++){
      let chess = document.createElement('i');
      chess.id = (color=='white'? idWhites[0] : idBlacks[0]) + j.toString() ;
      chess.className = classFonts[0];
      chess.classList.add('chess',color);
      chess.setAttribute('xy',`${iPawn}${j}`)
      var cell = document.getElementById(`${iPawn}${j}`);
      cell.appendChild(chess);
   }
}