function degreetofh(){
    let temp=document.querySelector("#id_temp").value
    let fh=(temp * (9/5) + 32)
    let fhbox=document.querySelector("#id_fh")
    fhbox.value=fh

}
function fhtoc(){
    let temp=document.querySelector("#id_fh").value
    let fh=(temp -32)*5/9;
    let fhbox=document.querySelector("#id_temp")
    fhbox.value=fh

}
