function Rook(idCell){
   let curCoor = new Coordinate(idCell);
   let futureIds = arrRook.reduce((total,xy)=>{
      let newCoor = Coordinate.changeXY(curCoor,xy);
      if(newCoor.isValid())total.push(newCoor.toString());
      return total;
   },[])
   fullArrayBackground(futureIds);

}