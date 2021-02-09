const toDoForm = document.querySelector(".js-toDoform"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = 'toDos';
const toDos=[];

//todos를 가져와서 로컬에 저장하는 일을 함
function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    //localstorage에서 object로 사용해서 string으로 바꿔주어야함

}
function paintToDo(text){
//list 만들기
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";

    const span = document.createElement("span");
    const newId = toDos.length + 1;
    /*
    const a = [1,2,3,4,5]
    a.length = 5
    const b = [];
    b.length + 1 = 1 
    고로, 여기서는 숫자를 지정해주기 위헤 사용됨
    b.push(2)
    b.length + 1 = 2가 됨. 뭐가 들어왔기 때문.
    */

    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    //todo의 할일 목록은 array(배열) 이 되어야 함 

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

//gretting과 다를 것 없이 만들어 준다.

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    //submit과 같이 작성하면 넘어가게 만들어 줌
    toDoInput.value="";

}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        //여기서는 todo를 생성할 시 항상 보여주어야하므로 null이 굳이 있을 필요가 없음~
        const parsedToDos = JSON.parse(loadedToDos)
            //todos를 가져온 뒤 parse로 json으로 string으로 변환한 것을 다시 object로 변환함

        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })

        //foreach로 각각의 text에 대해서 painttodo가 실행됨(각각보여지게 해줌)

    }

}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();