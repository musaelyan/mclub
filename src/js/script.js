'use strict';

(function() {

  // инициализация скрипта поэкранной навигации
  fullpage.initialize('#fullpage', {
    'anchors': ['main', 'about', 'what-do', 'as', 'form'],
    'css3': true,
    'navigation': true,
    'navigationPosition': 'right',
    'navigationColor': '#000000',
  });

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
