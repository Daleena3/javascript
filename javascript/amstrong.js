//amsrong

var num=54748;
var len=num.toString().length
var sum=0
while(num !=0){
    let lastDigit=num % 10
    sum=sum+(lastDigit**len)
    num=Math.floor(num/10)
}
console.log(sum);
//or
if(sum == original){
    console.log("amstrong");

}
else{
    console.log("not");
}