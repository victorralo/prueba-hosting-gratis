function initMap() {
    var myLatLng = { lat: -2.1292665621608196, lng:-79.91768976335361 };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Mi ubicación'
    });

    map.addListener('click', function() {
      window.location.href = 'https://www.google.com.ec/maps/place/Cooperativa+Brisas+Del+Norte,+Guayaquil/@-2.1290579,-79.9203287,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x902d738078279ce9:0x216292eef53f4c7a!2sMalla+Saran+Rashel!8m2!3d-2.1295346!4d-79.9176683!16s%2Fg%2F11ffm405xs!3m5!1s0x902d6d5fa11ea74d:0xce962f1e84178ae4!8m2!3d-2.1290633!4d-79.9177538!16s%2Fg%2F11c2y35rzr?entry=ttu';
    });
  }

