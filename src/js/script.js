'use strict';

(function() {
  var tabControl = document.querySelectorAll('.js-tab-control');

  if (tabControl) {
    tabControl = Array.prototype.slice.call(tabControl, 0);

    tabControl.forEach(function(tabControlItem) {

      tabControlItem.addEventListener('click', function(event) {
        event.preventDefault();

        tabControl.forEach(function(tabControlItems) {
          tabControlItems.classList.remove('sign__tab--active');
        });

        tabControlItem.classList.add('sign__tab--active');


        var openTab = document.querySelector("." + tabControlItem.dataset.target);

        console.log(openTab);

        if (openTab) {
          var tabs = document.querySelectorAll('.js-tab');
          if (tabs) {
            tabs = Array.prototype.slice.call(tabs, 0);
            tabs.forEach(function(tabItem) {
              tabItem.classList.remove('js-tab--active');
            });
          }

          openTab.classList.add('js-tab--active');
        }

      });
    });
  }

})();
