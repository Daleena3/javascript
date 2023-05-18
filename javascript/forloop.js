//for(let i=1;i<=3;i++){        //i=1 1<=3, 1=2 2<=3
  //  console.log(i);          //1 2
//}

//factorial using forloop

//var num=4;
//1*2*3*4
// var fact=1
// for(let i=1;i<=4;i++){
//     fact=fact*i
// }
// console.log(fact);


//prime number
//num=7
var num=7;
var isPrime=true;

if(num==2){

}
else{
    for(let i=2;i<num;i++){
        if(num % i == 0){
            isPrime=false
            break
    }
}
console.log(isPrime);

}