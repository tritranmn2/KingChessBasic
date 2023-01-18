
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
   let chess = cell.firstElementChild;
   cell.removeChild(chess);
   cell = document.getElementById(idNew);
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

function fullArrayBackground(arr) {
   arr.forEach(id => fullColorBackground(id, future));
}

function removeArrayBackground(arr) {
   arr.forEach(id => removeColorBackground(id, future));
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
         case 'botom-right':
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
         case 'top-2':
            curCoor.x += 2;
            break;
         case 'bottom-2':
            curCoor.x -= 2;
            break;
         default:
            break;
      }
      if (!curCoor.isValid()) break;
      let id = curCoor.toString();
      let isWhite = isWhiteCell(id);
      let isBlack = isBlackCell(id);
      if (!isWhite && !isBlack) fullColorBackground(id, future);
      else {
         if ((curChessColor && isWhite) || (!curChessColor && isBlack)) break;
         else if ((curChessColor && isBlack) || ((!curChessColor && isWhite))) {
            fullColorBackground(id, kill); break;
         }
      }
      if (name != true) break;

   } while (curCoor.x <= 8 && curCoor.x >= 1 && curCoor.y <= 8 && curCoor.y >= 1);
}

function fullColorPawn(idCell, direc) {
   let curChessColor = isWhiteCell(idCell);
   let curCoor = new Coordinate(idCell);
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
      case 'botom-right':
         curCoor.y += 1;
         curCoor.x -= 1;
         break;
      case 'top-2':
         curCoor.x += 2;
         break;
      case 'bottom-2':
         curCoor.x -= 2;
         break;
      default:
         break;
   }
   if (!curCoor.isValid()) return;
   let id = curCoor.toString();
   let isWhite = isWhiteCell(id);
   let isBlack = isBlackCell(id);
   if (direc == 'top' || direc == 'bottom' || direc == 'top-2' || direc == 'bottom-2'){
      if (!isWhite && !isBlack) fullColorBackground(id, future);
   }else{
      if ((curChessColor && isBlack) || ((!curChessColor && isWhite))) {
         fullColorBackground(id, kill); return;
      }
   }
     
}

