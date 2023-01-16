
let chesses = document.querySelectorAll('.chess');
chesses.forEach((chess) => chess.onclick = handleMove);

function handleMove(e) {
   let chess = e.target, idChess = chess.id, nameChess = getNameChess(idChess);
   let cell = chess.parentElement, idCell = cell.id;
   switch (nameChess) {
      case 'Rook':
         Rook(idCell);
         break;
      case 'Knight':

         break;
      case 'Bishop':

         break;
      case 'Queen':

         break;
      case 'King':

         break;
      case 'Pawn':

         break;

      default:
         break;
   }

}
/**
 * 1. Lắng nghe sự kiện bấm vào quân cờ 
 * 2. Trong callback:
 *    2.1. Lấy ra tên chess từ id
 * 3. Các case để thực thi từng rule của chess
 */