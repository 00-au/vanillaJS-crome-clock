
const clockContainer = document.querySelector(".js-clock"), clockTitle= clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
    //삼항연산자를 이용해 10보다 작을 때 0을 추가한다. (조건을 적는 것임) seconds < 10 ? `0${seconds}`: seconds}
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

//setInterval(함수, 초단위) 로 함수를 흘러가게 만들어 줄 수 있음

init();