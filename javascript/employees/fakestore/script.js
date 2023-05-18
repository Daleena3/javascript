// var request=new XMLHttpRequest()

// request.open("get","https://fakestoreapi.com/products")
// request.send()

// request.onreadystatechange=()=>{
//     if(request.readyState==4){
//         if(request.status < 199 && request.status <300){
//             let data=JSON.parse(request.responseText)
//             console.log(data);
//         }

//     }
// }
//fetch
//request=>success=>res=>res.json

fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>console.log(data))

function displayAllProducts(data){
    let htmlData=``

}
