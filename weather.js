const weather = document.querySelector('.js-weather');
const COORDS = "coords";
const API_KEY = '61e8bed6a7179335cc3d403764b6e67d';

function getWeather(lat, lon){
    // Openweather unit format에서 확인. units=metric : ℉ → ℃ 
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
        // console.log(response); // network 정보
        // console.log(response.json()); // url의 json 정보(Obj형태)(기다리는상태) → Promise {<pending>}
        return response.json();
    }).then(function(json){
        // console.log(json); // json 정보 (기다리는 상태x)
        const temperature = json.main.temp;
        const place = json.name;
        const state = json.weather[0].description; 
        weather.innerText = `${temperature}℃\n ${state} @${place}`;
    });
    // then : fetch로 서버로부터 데이터가 들어옴을 완료하고 함수 호출. 기다리는 상태에서는 then을 사용
}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSuccess(position){
    // console.log(position.coords);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoError(){
    console.log('Cant access geo location');
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError

    );
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        // network 패널을 통해 내가 request 한 내용 확인
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}
function init(){
    loadCoords();
}
init();