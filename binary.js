const number = 20;
let num = number;
let reminder = [];
let reverse = ``;
while(num >= 1){
     reminder.push(num % 2);
     num = Math.floor(num / 2);
}
for(i = reminder.length - 1; i >= 0; i--){
     reverse += `${reminder[i]}`;
}
console.log(`The binary of the number ${number} is ${reverse}`);
