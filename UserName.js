const form = document.querySelector('.js-form'), //form
    input = form.querySelector('input'), //!       //input
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

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); //form은 안보이도록
    greeting.classList.add(SHOWING_CN); //h4는 보이도록
    greeting.innerText = `🖐Hello, ${text}`; //value앞에 text추가
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
