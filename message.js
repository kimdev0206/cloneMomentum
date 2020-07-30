const container = document.querySelector('.js-message'),
    p = container.querySelector('p'),
    message = container.querySelector('.js-message > p > span');
const messages = [
    "부정적인 생각은 문제는 커지고 나는 작아지게한다",
    "어두운 동굴에서 벗어날 방법은 조용히 눈이 어둠에 익숙해지기를\n기다리고 더듬거리며 기어가는 것이다",
    "일주일동안 나의 삶이 하나님이 기쁘게 받을만한 제물이 될만한가",
    "하나님은 수고와 헌신있는 참여된 예배를 원하신다",
    "그리스도인은 공부와 기도로 하나님께 영광돌리는 문화를 만든다",
    "하나님의 말씀에 붙듬과 동시에 사명에 몰입하라",
    "기도를 하면 하지 말아야 할 일을 끊을 힘과 해야할 일을 명료하게 알게 된다",
    "상처는 시간 많고 할 일 없는 사람들이 받는 것이다",
    "십일조는 이 물질이 하나님이 내게 주신 것을 인정하는 것, 이웃을 위해 쓸 줄 아는 것",
    "새로운 일을 한다는 것이 두렵지만 그래도 새로운 것을 한다는 것은 언제나 설레는 일이다",
    "하고싶은 열정만큼 중요한 적성은 없다"
];
let cnt = 0;
function getWidth(text){
    const newSpan = document.createElement('span');
    newSpan.innerText = text;
    newSpan.style.display = "inline-block";
    newSpan.style.opacity = 0;
    p.appendChild(newSpan);
    const newWidth = newSpan.scrollWidth;
    p.removeChild(newSpan);
    return newWidth;
}
function changeMessage(){
    cnt += 1;
    if(cnt >= messages.length){
        cnt = 0;
    }
    // width = cnt * 70;
    const nextMessage = messages[cnt];
    message.style.width = `${getWidth(nextMessage)}px`;
    message.innerText = nextMessage;
}
function init(){
    changeMessage();
    setInterval(changeMessage, 5000);
}
init();