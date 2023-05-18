
//24 => 2+22=24

//var num=333
//333=>3+33+333=333

//var num=4444
// =>4+44+444+4444

var res=0

while(num !=0){            //2!=0
    res=res+num;           //0+22=22 +2=24
    num=Math.floor(num/10) //num=0
}
console.log(res);