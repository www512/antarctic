'use strict';

(function () {
  var map = document.querySelector('.contact-map');

  if (!map) {
    return;
  }

  var init = function () {
    var myMap = new ymaps.Map('map', {
      center: [59.938684, 30.324212],
      zoom: 16,
      controls: ['zoomControl']
    });

    var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/label.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [-22, -48]
    });

    myMap.geoObjects.add(myPlacemark);
  };

  ymaps.ready(init);

})();
