const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;

const buttonStartRef = document.querySelector('[data-action=start]');
const buttonStopRef = document.querySelector('[data-action=stop]');

buttonStartRef.addEventListener('click', onButtonStartClick);
buttonStopRef.addEventListener('click', onButtonStopClick);

function onButtonStartClick(e) {
  e.currentTarget.disabled = true;
  intervalId = setInterval(changeColor, 1000, colors);
}

function onButtonStopClick(e) {
  clearInterval(intervalId);
  buttonStartRef.disabled = false;
}

function changeColor(colors) {
  let valueArr = randomIntegerFromInterval(0, colors.length - 1);
  const randomColor = colors[valueArr];
  document.body.style.backgroundColor = randomColor;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



