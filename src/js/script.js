'use strict';

$(document).ready(function() {
  $('#fullpage').fullpage({
    'anchors': ['main', 'about', 'what-do', 'as', 'form'],
    'css3': true,
    'navigation': true,
    'navigationPosition': 'right',
    'navigationColor': '#000000',
    'verticalCentered': false
  });
});

(function() {

  // прокрутка к последнему экрану
  var toLast = document.querySelectorAll('.to-last');

  if (toLast) {
    toLast = Array.prototype.slice.call(toLast, 0);

    toLast.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        fullpage.moveTo(5);
      });
    });
  }

  // прокрутка на 2 экран
  var toNext = document.querySelector('.to-next');

  if (toNext) {
    toNext.addEventListener('click', function(event) {
      event.preventDefault();
      fullpage.moveTo(2);
    });
  }

})();


(function(){

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes
    };
  }

function initializeClock(id, endtime) {

  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  // Здесь задаётся дедлайн
  var deadline = new Date(2016, 5, 24);

  initializeClock('clockdiv', deadline);

})();
