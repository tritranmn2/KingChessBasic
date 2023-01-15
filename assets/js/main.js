
// var chessmans = document.querySelectorAll('.chess');
// var xOld,yOld;
// var x0=0, y0=0, x=0, y=0, dx=0, dy=0;
// var isDown=false;
// var size=720;
// var cell=90;
// var coorX = [0,1,2,3,4,5,6,7];
// var coorY = [0,1,2,3,4,5,6,7];
// function fMouseDown(e) {
//    isDown=true;
//    x0=e.clientX;
//    y0=e.clientY;
//    this.style.zIndex=3;
//    console.log("(x0,y0)=(",x0,",",y0,")")
//    if(isDown) {
//       this.addEventListener('mousemove',fMouseMove);
//    }

// }

// function fMouseMove(e) {
//    this.addEventListener('mouseup',fMouseUp);
//    if(isDown){
//       x=e.clientX;
//       y=e.clientY;
//       dx=x-x0; 
//       dy=y-y0;
//       x0=x;
//       y0=y;
//       this.style.top = (parseInt(this.style.top) + dy) + 'px';
//       this.style.left= (parseInt(this.style.left) + dx) + 'px';
//    }
// }

// function fMouseUp(e) {
//    this.style.zIndex=2;
//    isDown=false;

//    let a= parseInt(this.style.left)/cell;
//    let b= parseInt(this.style.top)/cell;
//    // console.log(a,b)
//    let x1,x2,y1,y2;
//    for(let i=0;i<coorX.length;i++) {
      
//       if(a >= coorX[i] && a< coorX[i+1]){
//          x1=i;x2=i+1;
//       }
//       else if(a>7) {
//          x1=7;x2=7;
//       }
//       else if(a<0) {
//          x1=0;x2=0;
//       }
//    }
//    for(let j=0;j<coorX.length;j++) {
//       if(b >= coorY[j] && b< coorY[j+1]){
//          y1=j;y2=j+1;
//       }
//       else if(b>7) {
//          y1=7;y2=7;
//       }
//       else if(b<0) {
//          y1=0;y2=0;
//       }
//    }
//    console.log(a)
//    console.log("(x1,x2)=(",x1,",",x2,")")
//    console.log("(y1,y2)=(",y1,",",y2,")")

//    let A0 = (x2-a)**2 + (y2-b)**2;
//    let A1 = (1+a-x2)**2 + (y2-b)**2;
//    let A2 = (x2-a)**2 + (1+b-y2)**2;
//    let A5 = (1+a-x2)**2 + (1+b-y2)**2;
   
//    let A = [A0,A1,A2,A5];
//    var maxA = Math.max.apply(Math, A);
//    console.log(A);
//    var isRight=0;
//    for( isRight=0;isRight<A.length;isRight++){
//       if(A[isRight] == maxA)
//          break;
//    }
   

//    if(isRight==0){
//       this.style.left = x1*cell + 'px';
//       this.style.top = y1*cell + 'px';
//    }
//    else if(isRight==1){
//       this.style.left = x2*cell + 'px';
//       this.style.top = y1*cell + 'px';
//    }
//    else if(isRight==2){
//       this.style.left = x1*cell + 'px';
//       this.style.top = y2*cell + 'px';
//    }
//    else if(isRight==3){
//       this.style.left = x2*cell + 'px';
//       this.style.top = y2*cell + 'px';
//    }
// }

// for( var chess of chessmans ) {
//    chess.style.left = chess.offsetLeft + 'px';
//    chess.style.top = chess.offsetTop +'px';
//    chess.addEventListener('mousedown',fMouseDown);
// }

