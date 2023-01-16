const sizeBoard= 702;
const sizeCell= sizeBoard / 9;
const sizeChess= sizeCell - 10;
const future = 'orange';
const kill = 'red';
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

const arrRook = [
   [0,-7],[0,-6],[0,-5],[0,-4],[0,-3],[0,-2],[0,-1],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],
   [-7,0],[-6,0],[-5,0],[-4,0],[-3,0],[-2,0],[-1,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],
];
const arrKnight= [
   [1,2],[1,-2],[-1,2],[-1,-2],
   [2,1],[2,-1],[-2,1],[-2,-1],
];
const arrBishop = [
   [-7,-7],[-6,-6],[-5,-5],[-4,-4],[-3,-3],[-2,-2],[-1,-1],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],
];
const arrQueen = arrRook.concat(arrBishop);
const arrKing = [
   [0,1],[0,-1],
   [1,0],[-1,0],
   [1,1],[-1,-1]
];
const arrPawn = [
   [1,0]
];