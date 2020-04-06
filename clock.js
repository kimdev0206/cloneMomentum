const clockContainer = document.querySelector('.js-clock'),
                                // 자식들의 요소를 탐색
clockTitle = clockContainer.querySelector('h1');      

function getTime(){ 
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        //삼항연산자. mini if
        hours < 10 ? `0${hours}` : hours }:${
        minutes < 10 ? `0${minutes}` : minutes }:${
        seconds < 10 ? `0${seconds}` : seconds 
    }`;
}
function init(){
    getTime(); //실시간은 아님. 업데이트확인
    setInterval(getTime, 1000); //주기적인 실행해주는 메소드(함수, 밀리seconds)
}

const date = new Date();
// console.log(date);
// date.getDate(); //getDay()의 숫자 1은 월요일을 의미
init();