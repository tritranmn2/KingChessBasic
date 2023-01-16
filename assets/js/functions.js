class Coordinate {
   constructor(strCoor) {
      this.x = parseInt(strCoor[0]);
      this.y = parseInt(strCoor.slice(1));
   }
   static Coordinate(x,y){
      return new Coordinate(x.toString()+y.toString());
   }

   static changeXY(coor, xy) {
      let x = coor.x + xy[0];
      let y = coor.y + xy[1];
      return Coordinate.Coordinate(x,y);
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

