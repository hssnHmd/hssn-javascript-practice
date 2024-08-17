const montName = document.querySelector('.month-name'),
  dayName = document.querySelector('.day-name'),
  montNumber = document.querySelector('.month-number'),
  yearEl = document.querySelector('.year');

function calendar() {
  let today = new Date();
  day = today.toLocaleString('en', { weekday: 'long' });
  month = today.toLocaleString('en', { month: 'long' });
  dayNum = today.getDate();
  year = today.getFullYear();

  montName.innerText = month;
  dayName.innerText = day;
  montNumber.innerText = dayNum;
  yearEl.innerText = year;
}

calendar();
