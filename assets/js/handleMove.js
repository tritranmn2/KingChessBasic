var chessesWhite = document.querySelectorAll('i[id^="w"]');
var chessesBlack = document.querySelectorAll('i[id^="b"]');
if(turnWhite){
   chessesBlack.forEach((chess) => chess.onclick = null);
   chessesWhite.forEach((chess) => chess.onclick = handleMove);
}else{
   chessesWhite.forEach((chess) => chess.onclick = null);
   chessesBlack.forEach((chess) => chess.onclick = handleMove);
}

function handleMove(e) {
   e.stopPropagation();
   let chess = e.target, idChess = chess.id, nameChess = getNameChess(idChess);
   let cell = chess.parentElement, idCell = cell.id;
   switch (nameChess) {
      case 'Rook':
         Rook(idCell);
         break;
      case 'Knight':
         Knight(idCell);
         break;
      case 'Bishop':
         Bishop(idCell);
         break;
      case 'Queen':
         Queen(idCell);
         break;
      case 'King':
         King(idCell);
         break;
      case 'Pawn':
         Pawn(idCell);
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