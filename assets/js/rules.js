function readyRemoveColor(){
   let cells = document.querySelectorAll('.cell:empty');
   let total =[];
   cells.forEach((cell)=>{
      if(!cell.classList.contains('orange')){
         total.push(cell);
      }
   });
   total.forEach((cell)=>cell.onclick = function(){
      removeColor();
      total.forEach((cell)=>cell.onclick = null);
   })
   delete cells,total;
}



function rule(idCell) {
   readyRemoveColor();
   let cells = document.querySelectorAll('.orange, .red');
   cells.forEach((cell) => {
      cell.onclick = function (e) {
         let cell = e.currentTarget, idNew = cell.id;
         
         moveToXY(idCell, idNew);
         turnWhite = !turnWhite;
         removeColor();
         if (turnWhite) {
            turnOfWhite();
         }
         else {
            turnOfBlack();
         }
      };
   })
}

function Rook(idCell) {
   fullColor(idCell, 'top');
   fullColor(idCell, 'bottom');
   fullColor(idCell, 'right');
   fullColor(idCell, 'left');
   rule(idCell);
}

function Knight(idCell) {
   fullColor(idCell, 'knight-1', 'knight');
   fullColor(idCell, 'knight-2', 'knight');
   fullColor(idCell, 'knight-3', 'knight');
   fullColor(idCell, 'knight-4', 'knight');
   fullColor(idCell, 'knight-5', 'knight');
   fullColor(idCell, 'knight-6', 'knight');
   fullColor(idCell, 'knight-7', 'knight');
   fullColor(idCell, 'knight-8', 'knight');
   rule(idCell);
}

function Bishop(idCell) {
   fullColor(idCell, 'top-left');
   fullColor(idCell, 'bottom-left');
   fullColor(idCell, 'top-right');
   fullColor(idCell, 'bottom-right');
   rule(idCell);
}

function King(idCell) {
   fullColor(idCell, 'top', 'king');
   fullColor(idCell, 'bottom', 'king');
   fullColor(idCell, 'right', 'king');
   fullColor(idCell, 'left', 'king');
   rule(idCell);
}

function Pawn(idCell) {
   let chess = document.getElementById(idCell).firstElementChild;

   if (chess.getAttribute('firstturn') == 'true') {
      if (isWhiteCell(idCell)) {
         fullColorPawn(idCell, 'top',2);
         fullColorPawn(idCell, 'top-left');
         fullColorPawn(idCell, 'top-right');
      } else {
         fullColorPawn(idCell, 'bottom',2);
         fullColorPawn(idCell, 'bottom-left');
         fullColorPawn(idCell, 'bottom-right');
      }
   }
   else {
      if (isWhiteCell(idCell)) {
         fullColorPawn(idCell, 'top');
         fullColorPawn(idCell, 'top-left');
         fullColorPawn(idCell, 'top-right');
      } else {
         fullColorPawn(idCell, 'bottom');
         fullColorPawn(idCell, 'bottom-left');
         fullColorPawn(idCell, 'bottom-right');
      }

   }
   rule(idCell);
}

function Queen(idCell) {
   fullColor(idCell, 'top');
   fullColor(idCell, 'bottom');
   fullColor(idCell, 'right');
   fullColor(idCell, 'left');
   fullColor(idCell, 'top-left');
   fullColor(idCell, 'bottom-left');
   fullColor(idCell, 'top-right');
   fullColor(idCell, 'bottom-right');
   rule(idCell);
}

