let n = 3;
let text = '+';
let countCol = 1;
let countRow = 1;

while(countRow <= n){
     while(countCol < n){
          text += '+';
          countCol++;
     }
     console.log(text);
     countRow++;
}
