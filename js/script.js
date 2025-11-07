function fiveRandomNum() {
 const number = [];
 for ( i = 0; i <= 5; i++){
    number.push(Math.floor(Math.random()*10)+ 1);
 }
 return number;
}   
const RandomNumbers = fiveRandomNum();
console.log(RandomNumbers)