const form = document.querySelector('.js-form'), //form
    input = form.querySelector('input'), //input
    flashMessage = document.querySelector('.flash-message'),
    greeting = document.querySelector('.js-greetings'); //h4

const USER_LS = 'currentUser', //localstorage key (currentUser)
    SHOWING_CN = 'showing'; //class='showing'

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
    event.preventDefault(); //default 이벤트를 막아 아무일도 일어나지 않음.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName() {
    form.classList.add(SHOWING_CN);
    //form은 default로 어딘가로 보내게 되어있음. + 페이지 새로고침됨
    form.addEventListener('submit', handleSubmit);
}
function getDayRoutine(){
    const date = new Date();
    const hours = date.getHours();

    if(hours < 12){
        return "Good Morning";
    }else if(hours < 18){
        return "Good Afternoon";
    }else{
        return "Good Evening";
    }
}
function welcomeMessage(currentUser){
    const span = document.createElement('span');
    span.innerText = `Welcome ${currentUser}`;
    flashMessage.appendChild(span);
    flashMessage.classList.add('flash');
}
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); //form은 안보이도록
    greeting.classList.add(SHOWING_CN); //h4는 보이도록
    const dayRoutine = getDayRoutine();
    greeting.innerText = `${dayRoutine}, ${text}`; //value앞에 text추가
    welcomeMessage(text);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        //he is not
        askForName();
    } else {
        //he is
        paintGreeting(currentUser); //LS에서 이름받아와 색칠
    }
}
function init() {
    loadName();
}
init();
