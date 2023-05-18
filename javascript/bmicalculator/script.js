function calculatebmi(){
    let height=id_height.value;
    let heightinM=height/100
    let weight=id_weight.value;
    let bmi=weight/(heightinM**2)
    bmi=bmi.toFixed(2)

    let underweightImage="https://thumbs.dreamstime.com/b/young-man-white-shirt-underweight-comic-cartoon-illustration-unhealthy-nutrition-article-image-vector-character-79246727.jpg"
    let heatlthyImage="https://www.healthifyme.com/blog/wp-content/uploads/2021/09/Cover-image.jpg"
    let overWeightImage="https://w7.pngwing.com/pngs/55/157/png-transparent-man-fat-overweight-fatness-person-standing.png"
    let obesityImage="https://www.netmeds.com/images/cms/wysiwyg/blog/2020/07/1594712425_obesity_big_600.jpg"
    let result={height:height,weight:weight,bmi:bmi}
    if(bmi <18){
        console.log("under weight");
        result.status="underweight"
        result.image=underweightImage
    }
    else if(bmi>=18 && bmi < 25){
        console.log("healthy");
        result.status="healthy"
        result.image=heatlthyImage
    }
    else if(bmi>=25 && bmi <30){
        console.log("over weight");
        result.status="overweight"
        result.image=overWeightImage
    }
    else if(bmi>=30){
        console.log("obesisty");
        result.status="obesity"
        result.image=obesityImage
    }
    populateresult(result);
}
function populateresult(result){
    console.log(result);

    let htmldata=`
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${result.image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${result.weight}</li>
      <li class="list-group-item">${result.height}</li>
      <li class="list-group-item">${result.bmi}</li>
      <li class="list-group-item">${result.status}</li>

    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
  `
   document.querySelector("#result").innerHTML=htmldata

}

