function points(games) {
 
   result=games.map(function (str){
   return str.split(":")
   });
   let count = 0;
   for(let i=0;i<games.length;i++){
      result[i][0]>result[i][1] ? count+=3: result[i][0]< result[i][1] ? count +=0: count+=1;
      }
   
 return count;
    }
console.log(points(["4:3","2:3","3:3"]));
