function sum(){
    let num1=document.querySelector("#id_num1").value
    let num2=document.querySelector("#id_num2").value
    let result=Number(num1)+Number(num2)
    let resultbox=document.querySelector("#id_result")
    resultbox.value=result
}
function sub(){
    let num1=document.querySelector("#id_num1").value
    let num2=document.querySelector("#id_num2").value
    let result=Number(num1)-Number(num2)
    let resultbox=document.querySelector("#id_result")
    resultbox.value=result
}
function mul(){
    let num1=document.querySelector("#id_num1").value
    let num2=document.querySelector("#id_num2").value
    let result=Number(num1)*Number(num2)
    let resultbox=document.querySelector("#id_result")
    resultbox.value=result
}