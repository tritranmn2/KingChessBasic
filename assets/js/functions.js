function turnOfWhite() {
   // Hiển thị 👉
   playerWhite.querySelector('i').classList.add('turn');
   playerBlack.querySelector('i').classList.remove('turn');
   // Cập nhật điểm của quân đen
   let point = "Điểm: "+ pointBlack.toString();
   playerBlack.querySelector('.point').innerText = point;
   // Lắng nghe click ở các quân trắng
   chessesBlack.forEach((chess) => chess.onclick = null);
   chessesWhite.forEach((chess) => chess.onclick = handleMove);
}

function turnOfBlack() {
   // Hiển thị 👉
   playerWhite.querySelector('i').classList.remove('turn');
   playerBlack.querySelector('i').classList.add('turn');
   // Cập nhật điểm của quân trắng
   let point = "Điểm: "+ pointWhite.toString();
   playerWhite.querySelector('.point').innerText = point;
   // Lắng nghe click ở các quân đen
   chessesWhite.forEach((chess) => chess.onclick = null);
   chessesBlack.forEach((chess) => chess.onclick = handleMove);
}

class Coordinate {
   constructor(strCoor) {
      this.x = parseInt(strCoor[0]);
      this.y = parseInt(strCoor.slice(1));
   }
   static Coordinate(x, y) {
      return new Coordinate(x.toString() + y.toString());
   }

   static changeXY(coor, xy) {
      let x = coor.x + xy[0];
      let y = coor.y + xy[1];
      return Coordinate.Coordinate(x, y);
   }
   toArray() {
      return [this.x, this.y];
   }
   toString() {
      return this.x.toString() + this.y.toString();
   }
   isValid() {
      if (this.x >= 1 && this.x <= 8 && this.y >= 1 && this.y <= 8) return true;
      return false;
   }
}

function moveToXY(idOld, idNew) {
   let cell = document.getElementById(idOld);
   let isWhite = isWhiteCell(idOld);
   let isBlack = isBlackCell(idOld);
   let chess = cell.firstElementChild;
   if (getNameChess(chess.id) == 'Pawn') {
      if (chess.getAttribute('firstturn') == 'true') {
         chess.setAttribute('firstturn', 'false');
      }
   }
   cell.removeChild(chess);
   cell = document.getElementById(idNew);
   let isRedCell = cell.classList.contains('red');
   if (isRedCell) {
      if (isWhite) {pointWhite += 1;}
      else if(isBlack) {pointBlack += 1;}
   }
   if (cell.classList.contains('red')) {
      cell.removeChild(cell.firstElementChild);
   }
   cell.appendChild(chess);
}

function fullColorBackground(id, color) {
   let cell = document.getElementById(id);
   cell.classList.add(color);
}
function removeColorBackground(id, color) {
   let cell = document.getElementById(id);
   if (cell.classList.contains(color)) {
      cell.classList.remove(color);
   }
}


function removeColor() {
   let futureCell = document.querySelectorAll('.orange');
   let killCell = document.querySelectorAll('.red');
   futureCell.forEach((c) => {
      c.onclick = null;
      removeColorBackground(c.id, future);
   })
   killCell.forEach((c) => {
      c.onclick = null;
      removeColorBackground(c.id, kill);
   })
   delete futureCell;
   delete killCell;
}

function getNameChess(id) {
   let index = parseInt(id[id.length - 1]);
   if (!Number.isNaN(index)) {
      return id.slice(1, -1);
   }
   else {
      return id.slice(1);
   }
}

function createScript(dir) {
   var script = document.createElement("script");
   script.src = dir;
   document.body.appendChild(script);
}

function isWhiteCell(idCell) {
   let chess = document.getElementById(idCell);
   return chess.firstElementChild && chess.firstElementChild.classList.contains('white');
}

function isBlackCell(idCell) {
   let chess = document.getElementById(idCell);
   return chess.firstElementChild && !chess.firstElementChild.classList.contains('white');
}

function fullColor(idCell, direc, name = true) {
   let curChessColor = isWhiteCell(idCell);
   let curCoor = new Coordinate(idCell);
   do {
      switch (direc) {
         case 'top':
            curCoor.x += 1;
            break;
         case 'bottom':
            curCoor.x -= 1;
            break;
         case 'right':
            curCoor.y += 1;
            break;
         case 'left':
            curCoor.y -= 1;
            break;
         case 'top-left':
            curCoor.y -= 1;
            curCoor.x += 1;
            break;
         case 'bottom-left':
            curCoor.y -= 1;
            curCoor.x -= 1;
            break;
         case 'top-right':
            curCoor.y += 1;
            curCoor.x += 1;
            break;
         case 'bottom-right':
            curCoor.y += 1;
            curCoor.x -= 1;
            break;
         case 'knight-1':
            curCoor.x += 1;
            curCoor.y += 2;
            break;
         case 'knight-2':
            curCoor.x += 1;
            curCoor.y += -2;
            break;
         case 'knight-3':
            curCoor.x += -1;
            curCoor.y += 2;
            break;
         case 'knight-4':
            curCoor.x += -1;
            curCoor.y += -2;
            break;
         case 'knight-5':
            curCoor.x += 2;
            curCoor.y += 1;
            break;
         case 'knight-6':
            curCoor.x += 2;
            curCoor.y += -1;
            break;
         case 'knight-7':
            curCoor.x += -2;
            curCoor.y += 1;
            break;
         case 'knight-8':
            curCoor.x += -2;
            curCoor.y += -1;
            break;
         default:
            break;
      }
      if (!curCoor.isValid()) break;
      let id = curCoor.toString();
      let isWhite = isWhiteCell(id);
      let isBlack = isBlackCell(id);
      if (!isWhite && !isBlack) {
         fullColorBackground(id, future);
      }
      else {
         if ((curChessColor && isWhite) || (!curChessColor && isBlack)) break;
         else if ((curChessColor && isBlack) || ((!curChessColor && isWhite))) {
            fullColorBackground(id, kill); break;
         }
      }
      if (name != true) break;

   } while (curCoor.x <= 8 && curCoor.x >= 1 && curCoor.y <= 8 && curCoor.y >= 1);
}

function fullColorPawn(idCell, direc, step = 1) {
   let curChessColor = isWhiteCell(idCell);
   let curCoor = new Coordinate(idCell);
   do {
      switch (direc) {
         case 'top':
            curCoor.x += 1;
            break;
         case 'bottom':
            curCoor.x -= 1;
            break;
         case 'top-left':
            curCoor.y -= 1;
            curCoor.x += 1;
            break;
         case 'bottom-left':
            curCoor.y -= 1;
            curCoor.x -= 1;
            break;
         case 'top-right':
            curCoor.y += 1;
            curCoor.x += 1;
            break;
         case 'bottom-right':
            curCoor.y += 1;
            curCoor.x -= 1;
            break;
         default:
            break;
      }

      if (!curCoor.isValid()) break;
      let id = curCoor.toString();
      let isWhite = isWhiteCell(id);
      let isBlack = isBlackCell(id);
      if (direc == 'top' || direc == 'bottom') {
         if (isWhite || isBlack) break;
         if (!isWhite && !isBlack) fullColorBackground(id, future);
      }
      else {
         if ((curChessColor && isBlack) || ((!curChessColor && isWhite))) {
            fullColorBackground(id, kill); break;
         }
      }
      step -= 1;
   } while (step >= 1);

}

