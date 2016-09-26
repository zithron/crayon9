    function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {
                lat: -7.767400,
                lng: 110.376347
            },
            zoom: 17
        });

        var image = 'img/poin.png';
        var beachMarker = new google.maps.Marker({
            position: {
                lat: -7.767400,
                lng: 110.376347
            },
            map: map,
            icon: image,
            title: 'Crayon 9'
        });

        var styles = [
            {
                featureType: "all",
                stylers: [
                    {
                        saturation: -100
                    }
            ]
          }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [
                    {
                        hue: "#00ffee"
                    },
                    {
                        saturation: 100
                    }
            ]
          }, //*{
            //featureType: "poi.business",
            //elementType: "labels",
            //stylers: [
              //{ visibility: "off" }
            //*]
          //}
        ];
        map.setOptions({
            styles: styles
        });

    }