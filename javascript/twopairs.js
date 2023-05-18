var arr=[2,4,3,5]
var sum=9

var p1=0;
var p2=arr.length-1
var counter=0
while(p1<p2){
    //for(let i=0;i<arr.length;i++){
    //for(let j=i+1;j<arr.length;j++){
        let cursum=arr[p1]+arr[p2]
        if(sum==cursum){
            console.log(arr[p1],arr[p2]);
            break
        }
        else if(sum>cursum){
            p1++

        }
        else if(sum<cursum){
            p2--
        }
        counter++
    }
    console.log(counter);
