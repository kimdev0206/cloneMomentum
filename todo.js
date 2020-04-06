const toDoForm = document.querySelector('.js-toDoForm'),
toDoInput = toDoForm.querySelector('input'),
toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
let toDosArr = []; //data

function deleteToDo(event){
    let btn = event.target;
    const li = btn.parentElement.parentElement.parentElement;
    console.log(li);
    toDoList.removeChild(li); //html상에만 삭제. 데이터삭제x
    const cleanToDos = toDosArr.filter(function(toDo){
        /*
        여기서 toDo는 toDos의 value값 (toDoObj)
        toDo.id 는 number형태
        li.id 는 string형태임
         */
        return toDo.id !== parseInt(li.id); // 👍 2 !== "2"
    }); //forEach함수처럼 toDosArr 각각에 function실행후 true인 요소로 새로운 arr을 만듬
    console.log(cleanToDos);
    toDosArr = cleanToDos;
    saveToDos();
    
}
//toDosArr를 가져와 LS에 저장하는역할
function saveToDos(){ 
    localStorage.setItem(TODOS_LS, JSON.stringify(toDosArr)); //로컬스토리지 value에 [object Object]라고 저장됨 ? 로컬스토리지에 JS data를 저장할수 없음. string형태만 가능
    //JSON.stringify로 object → string형태로 변환해줌! 반대도 가능.
}
function paintToDo(text){
    const li = document.createElement('li'),
    delBtn = document.createElement('button'),
    span = document.createElement('span'),
    newId = toDosArr.length + 1;
    // li.style.listStyleType = "\1F44D";
    delBtn.innerHTML = `<span class="trash-hover" style="color: #fff;"><i class="fa fa-trash fa-lg fa-quote-left fa-pull-left fa-border" aria-hidden="true"></i></span>`;
    // delBtn.innerText = '❌';
    delBtn.addEventListener('click', deleteToDo);

    span.innerText = text;
    
    li.appendChild(span);
    li.appendChild(delBtn); 

    li.id = newId; // 👍 나중에 삭제시 어떤것을 삭제할지 판별
    toDoList.appendChild(li);

    const toDosObj = {
        text : text,
        id : newId
    };
    toDosArr.push(toDosObj); //arr에 요소추가
    saveToDos();
}

//refresh이벤트초기화 및 input되는값에 적용할 함수
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ''; 
}
//LS에 저장된 data를 html로 
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS); // key를 받아옴
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos); // string → object
        // console.log(typeof(loadedToDos), typeof(parsedToDos));
        // console.log(parsedToDos);

        //refresh해도 toDos를 불러와 화면에 저장된상태로 남아있도록
        parsedToDos.forEach(function(toDo){ paintToDo(toDo.text); })
    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}
init();