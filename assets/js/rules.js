
// var chessesWhite = document.querySelectorAll('i[id^="w"]');
// var chessesBlack = document.querySelectorAll('i[id^="b"]');
function turnOfWhite(){
   console.log(chessesWhite)

   chessesBlack.forEach((chess) => chess.onclick = null);
   chessesWhite.forEach((chess) => chess.onclick = handleMove);
}

function turnOfBlack(){
   chessesWhite.forEach((chess) => chess.onclick = null);
   chessesBlack.forEach((chess) => {
      chess.onclick = handleMove;
   });
}


function rule(idCell){
   let futureCell = document.querySelectorAll('.orange');
   let killCell = document.querySelectorAll('.red');
   let cells = document.querySelectorAll('.orange, .red');
 
   cells.forEach((cell)=>{
      cell.onclick = function(e){
         let cell = e.currentTarget , idNew = cell.id;
         moveToXY(idCell,idNew);
         turnWhite=!turnWhite;
         futureCell.forEach((c)=>{
            c.onclick = null;
            removeColorBackground(c.id,future);
         })
         killCell.forEach((c)=>{
            c.onclick = null;
            removeColorBackground(c.id,kill);
         })
         console.log(turnWhite)
         if(turnWhite){
            turnOfWhite();
         }
         else {
            turnOfBlack();
         }
      };
   })
}

function Rook(idCell){
   fullColor(idCell,'top');
   fullColor(idCell,'bottom');
   fullColor(idCell,'right');
   fullColor(idCell,'left');
   // Di chuyen
  
   rule(idCell);
}

function Knight(idCell){
   fullColor(idCell,'knight-1');
   fullColor(idCell,'knight-2');
   fullColor(idCell,'knight-3');
   fullColor(idCell,'knight-4');
   fullColor(idCell,'knight-5');
   fullColor(idCell,'knight-6');
   fullColor(idCell,'knight-7');
   fullColor(idCell,'knight-8');
   // Di chuyen
  
   rule(idCell);
}

function Bishop(idCell){
   fullColor(idCell,'top-left');
   fullColor(idCell,'bottom-left');
   fullColor(idCell,'top-right');
   fullColor(idCell,'bottom-right');
   // Di chuyen
  
   rule(idCell);
}

function King(idCell){
   fullColor(idCell,'top','king');
   fullColor(idCell,'bottom','king');
   fullColor(idCell,'right','king');
   fullColor(idCell,'left','king');
   // Di chuyen
  
   rule(idCell);
}

function Pawn(idCell){
   fullColor(idCell,'top','pawn');
   fullColor(idCell,'bottom','pawn');
   // Di chuyen
  
   rule(idCell);
}

function Queen(idCell){
   fullColor(idCell,'top');
   fullColor(idCell,'bottom');
   fullColor(idCell,'right');
   fullColor(idCell,'left');
   fullColor(idCell,'top-left');
   fullColor(idCell,'bottom-left');
   fullColor(idCell,'top-right');
   fullColor(idCell,'bottom-right');
   // Di chuyen
  
   rule(idCell);
}
