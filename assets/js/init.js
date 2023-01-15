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

}