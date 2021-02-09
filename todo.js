const toDoForm = document.querySelector(".js-toDoform"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = 'toDos';

function paintToDo(text){
//list 만들기
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";

    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);

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
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null){
        //여기서는 todo를 생성할 시 항상 보여주어야하므로 null이 굳이 있을 필요가 없음~
    }

}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();