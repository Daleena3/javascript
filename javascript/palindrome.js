// var num=123

// while(num !=0){
//     lastDigit= num % 10
//     console.log(lastDigit);
//     num=Math.floor(num /10)
// }

var num=123
var result=""
 while(num !=0){
    let lastdigit= num % 10
    result=result+lastdigit
    num=Math.floor(num /10)
 }
 console.log(result);