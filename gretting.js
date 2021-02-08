const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
gretting = document.querySelector(".js-grettings");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

//이름 색칠 함수 (로컬스토리지에 유저가 있을 경우)
function paintGretting(text) {
    form.classList.remove(SHOWING_CN);
    gretting.classList.add(SHOWING_CN);
    gretting.innerText = `Hello ${text}`;
}

//localstorage에서 이름 불러오는 작업.
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //유저 없는 경우
    }
    else {
        //else 일 경우 이름 색칠하기 ( 로컬스토리지에 유저가 있을 경우)
        paintGretting(currentUser);
    }
}
function init() {
    loadName();
}
init();