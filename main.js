'use strict';

const lines = document.querySelectorAll('.marking');

function plotLines() {
  const markingArea = document.querySelector('.marking-area');

  let totalDegree = 0;

  while (totalDegree <= 180) {
    const line = document.createElement('div');
    line.className = 'line';

    totalDegree += 6;
    line.style.transform = `rotate(${totalDegree}deg)`;
    
    if (totalDegree && totalDegree % 30 == 0) {
      line.style.width = '4px';
      line.style.background = '#000';
    }

    markingArea.append(line);
  }
}

function writeNumbers() {
  const clockInterface = document.querySelector('.clock-interface');

  let totalNumber = 1;
  let totalDegree = 30;

  while (totalDegree <= 360) {
    const number = document.createElement('div');

    number.className = 'number';
    number.innerHTML = `<div>${totalNumber++}</div>`;

    number.style.transform = `rotate(${totalDegree}deg)`;
    number.children[0].style.transform = `rotate(${-totalDegree}deg)`;

    totalDegree += 30;

    clockInterface.append(number);
  }
}

function runClock() {
  const secondHand = document.querySelector('.second');
  const minuteHand = document.querySelector('.minute');
  const hourHand = document.querySelector('.hour');

  secondHand.style.transform = `rotate(${new Date().getSeconds() * 6 + 90}deg)`;
  minuteHand.style.transform = `rotate(${new Date().getMinutes() * 6 + 90}deg)`;
  hourHand.style.transform = `rotate(${new Date().getHours() * 30 + 90}deg)`;

  setTimeout(function tick() {
    const currentTime = new Date();
    
    secondHand.style.transform = `rotate(${currentTime.getSeconds() * 6 + 90}deg)`;
    minuteHand.style.transform = `rotate(${currentTime.getMinutes() * 6 + 90}deg)`;
    hourHand.style.transform = `rotate(${currentTime.getHours() * 30 + 90}deg)`;

    setTimeout(tick, 1000);
  }, 1000);
}

function updateCalendar() {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const calendar = document.querySelector('.calendar');

  calendar.firstElementChild.textContent = weekDays[new Date().getDay()];
  calendar.lastElementChild.textContent = new Date().getDate();

  setTimeout(function update() {
    const currentDate = new Date();

    calendar.firstElementChild.textContent = weekDays[currentDate.getDay()];
    calendar.lastElementChild.textContent = currentDate.getDate();

    setTimeout(update, 1000);
  }, 1000);
}

plotLines();
writeNumbers();
runClock();
updateCalendar();