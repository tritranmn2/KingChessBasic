class Coordinate {
   constructor(strCoor) {
      this.x = parseInt(strCoor[0]);
      this.y = parseInt(strCoor[1]);
   }
   changeXY(x, y) {
      this.x = this.x + x;
      this.y = this.y + y;
   }
   toString() {
      return this.x.toString() + this.y.toString();
   }
}

function moveToXY(idOld, idNew) {
   let cell = document.getElementById(idOld);
   let chess = cell.firstElementChild;
   cell.removeChild(chess);
   cell = document.getElementById(idNew);
   cell.appendChild(chess);
}

function fullColorBackground(id,color) {
   let cell = document.getElementById(id);
   cell.classList.add(color);
}
function removeColorBackground(id,color) {
   let cell = document.getElementById(id);
   if(cell.classList.contains(color)){
      cell.classList.remove(color);
   }
}

function fullArrayBackground(arr) {
   arr.forEach(id => fullColorBackground(id,future));
}

function removeArrayBackground(arr) {
   arr.forEach(id => removeColorBackground(id,future));
}

