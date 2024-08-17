const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  focus = document.getElementById('focus');
const userName = document.getElementById('name');

function showTime() {
  let today = new Date(),
    hours = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds();

  // set Am or PM

  const amPm = hours >= 12 ? 'AM' : 'PM';
  // 12hr format

  // hours = hours % 12 || 12;

  time.innerHTML = `${addZero(hours)}<span>:</span> ${addZero(
    minutes
  )}<span>:</span>${addZero(seconds)} ${amPm}`;
  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBcgImage() {
  let tody = new Date(),
    hour = tody.getHours();
  if (hour < 12) {
    document.body.style.backgroundImage = "url('./images/morning.jpg')";
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';
  } else {
    document.body.style.backgroundImage = "url('./images/night.jpg')";
    greeting.textContent = 'Good night';
    document.body.style.color = 'white';
  }
}
function getName() {
  if (localStorage.getItem('name') === null) {
    userName.textContent = '[Enter name]';
  } else {
    userName.textContent = localStorage.getItem('name');
  }
}

function setName(e) {
  if (e.type === 'keypress') {
    if (e.wich == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      userName.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}
function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.wich == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

userName.addEventListener('keypress', setName);
userName.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
// Run
showTime();
setBcgImage();
getName();
getFocus();
