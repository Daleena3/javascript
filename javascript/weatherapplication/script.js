function fetchweather()
{
    let place=id_place.value;
    

fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8f9164d0bb1a347b51a7d0e25e247b6c&q=${place}&units=metrictric`).
then(res=>res.json()).then(data=>displayweather(data))
}

function displayweather(data){
    let placename=data.name
    let temp=data.name.temp
    let minTemp=data.main.temp_min
    let maxTemp=data.main.temp_max
    let pressure=data.main.pressure
    let humidity=data.main.humidity
    let dec=data.weather[0].description
    let feels_like=data.main.feels_like
    let htmldata=`
    <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
    <div class="card-body">
    <h5 class="card-title">${placename}</h5>
    <p class="card-text"><h2>${temp}</h2></p>
    <p class="card-text"><h2>${minTemp}</h2></p>
    <p class="card-text"><h2>${humidity}</h2></p>
    <p class="card-text"><h2>${pressure}</h2></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div>`
    document.querySelector("#id_result").innerHTML=htmldata
    //console.log(placename,temp,minTemp,maxTemp,pressure,humidity);
    
}
function fetchweatherByLocation(){
    navigator.geolocation.getCurrentPosition(p=>{
        let lat=p.coords.latitude
        let long=p.coords.longitude
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8f9164d0bb1a347b51a7d0e25e247b6c`).
        then(res=>res.json()).then(data=>displayweather(data))       
    })
    
    
}