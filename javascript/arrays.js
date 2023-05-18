//arrays
//[]
//no length limit
//same and differend type of value
//mutable
//duplicates allowed

//1

// var expense=[2000,3000,4000,5000]

// for(let exp of expense){
//     console.log(exp);
// }

//2
 var arr1=[1,2,3,4,5,6]
 var arr2=[3,4,7,8,9]

// var counter=0;
// for(let n1 of arr1){
//     for(let n2 of arr2){
//         if(n1==n2){
//             console.log(n1);
//         }
//         counter++;
//     }
// }
// console.log(counter);

//3

var p1=0,p2=0;
var counter=0
while(p1 < arr1.length && p2 < arr2.length){

    if(arr1[p1]==arr2[p2]){
        console.log("comma element",arr1[p1]);
        p1++
        p2++
    }
    else if(arr1[p1]>arr2[p2]){
        p2++
    }
    else if(arr1[p1]<arr2[p2]){
        p1++
    }
    counter
}
console.log(counter);