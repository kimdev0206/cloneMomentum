const body = document.querySelector('body');

const IMG_NUM = 4;
function paintImg(imgNum){
    const img = new Image(); // img생성자
    img.src = `images/${imgNum}.jpg`;
    img.classList.add('bgImg');
    body.prepend(img); // 👍 append 반대 prepend
}
function genRandom(){
    const number = Math.ceil(Math.random() * IMG_NUM);
    return number
}
function init(){
    const randomNum = genRandom();
    paintImg(randomNum);
}
init();
