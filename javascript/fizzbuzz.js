//num=15
//num/by 3 fizz if num/ by buzz if num / by 15 fizzbuzz
var num=15;
if(num % 15 == 0){
    console.log("fizzbuzz");
}
else if (num % 5 == 0){
    console.log("buzz");
}
else if (num % 3 == 0){
    console.log("fizz");

}
else{
    console.log("invalid");
}