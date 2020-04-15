const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');
const button = document.querySelector('.section-button');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const reset = document.querySelector('.reset');
const start = document.querySelector('.start');


let countSec = 0;
let countMin = 0;
//обновление экранов
const updateText = () =>{	
  minutes.innerHTML = (0 + String(countMin)).slice(-2);
  seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();

const countDown = () => {	
    //получаем общее количество секунд
	let total = countSec + countMin * 60;
  //таймер на 1 секунду
  const timeinterval = setTimeout(countDown, 1000);
  //условие счетчик достиг нуля
  if (total <= 0) {
    clearInterval(timeinterval);
    timer.style.display = 'none';
    button.style.display = 'none';
    message.innerHTML = '<p>Время вышло...</p>'
  }
  //уменьшаем секунды
  if(countSec > 0) countSec--;
  else{
  	countSec = 59;
    //уменьшаем минуты
    countMin--;
  }

  updateText();
}
//увеличиваем время
plus.onclick = () =>{
  if(countSec < 59) ++countSec;
  else{
  	countSec = 0;
  	++countMin;
  }
  updateText()
}
//уменьшаем время
minus.onclick = () =>{
	if(countMin <= 0 && countSec===0){
  	countSec = 0;
    countMin = 0;
    return;
  }
  if(countSec > 0) --countSec;
  else{
  	countSec = 59;
  	--countMin;
  }
  updateText();
}
//запуск
start.onclick = () => {
    //убираем кнопки
	button.style.display = 'none';
    countDown(); 
}
//сброс
reset.onclick = () => {
    countSec = 0;
    countMin = 0;
    updateText();
}