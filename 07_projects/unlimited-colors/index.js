let body = document.querySelector('body');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

const randColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

start.addEventListener('click', function () {
  let backgroundchanger = function () {
    body.style.backgroundColor = randColor();
    console.log(intervalId);
  }; 

  if (!intervalId) {
    intervalId = setInterval(backgroundchanger, 1000);
  }
  console.log(intervalId); 
});

stop.addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = null;
  console.log(intervalId);
});
