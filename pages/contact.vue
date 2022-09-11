<template lang="pug">
#wrap
    PageDefaults(type='header')/
    #main.cl-wrap
        h2 Contact #[span Airpresstech] today #[br] for swift access to our solutions #[br] & services.
        section
            div
                div
                    h3 Phone Numbers
                    ul
                        li
                            a(href='tel:+2348054436452', title='Call for enquiries') +234 (805) 443 6452
                        li
                            a(href='tel:+2348138225487', title='Call for enquiries') +234 (813) 822 5487
                div
                    h3 Support and Enquiries
                    ul
                        li
                            a(href='https://bit.ly/WAairpresstech', title='Chat with our representative') Chat with us (Whatsapp)
                        li
                            a(href='mailto:ibrahim.shaibu@airpresstech.com', title='Send us a mail') Email us
            div
                div.card
                    h3 Head Office:
                    p 62, Iyana-Ipaja Road, #[br] Alaguntan B/Stop #[br] Opp. Mobil Filling Station, #[br] Iyana-Ipaja, Alimosho #[br] Lagos, Nigeria.
                div.card.hq
                    h3 P/Harcourt Office:
                    p HC, 54 Road 3, Enugu Str., #[br] Rumuobiokani HE #[br] Old Aba Road, P/H #[br] River, Nigeria.

    #myMap
        //- iframe(src='https://my.atlistmaps.com/map/50519f76-328e-4208-b8fd-bbeba9e013c4?share=true', allow='geolocation', width='100%', height='700px', frameborder='0', scrolling='no' allowfullscreen)
    PageDefaults(type='footer')/
</template>

<script>
import { Loader } from 'google-maps'
const apiKey = process.env.gMap
// Api Key initialization
const loader = new Loader(apiKey)

export default {
  name: 'ContactPage',
  data() {
    return {}
  },
  head() {
    return {
      title: 'Airpresstech: Contact',
      // script: [
      //   {
      //     src: `https://maps.googleapis.com/maps/api/js?key=${apiKey}`,
      //     hid: 'map-googleapis',
      //     defer: true,
      //   },
      // ],
    }
  },
  async mounted() {
    const google = await loader.load()
    // Custom filter from http://snazzymaps.com

    const lightGMap = [
      {
        featureType: 'all',
        elementType: 'labels.text',
        stylers: [{ color: '#188e8d' }, { weight: '0.20' }],
      },
      {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [{ color: '#00d2e2' }],
      },
      {
        featureType: 'administrative',
        elementType: 'labels.text',
        stylers: [{ visibility: 'on' }],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry.fill',
        stylers: [{ visibility: 'on' }, { color: '#e0efef' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ lightness: 100 }, { visibility: 'simplified' }],
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{ visibility: 'on' }, { lightness: 700 }],
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [{ color: '#7dcdcd' }],
      },
    ]
    const headOffLoc = { lat: 6.614721, lng: 3.298106 }
    const phOffLoc = { lat: 4.838607, lng: 7.03344 }
    const myLongLat = new google.maps.LatLng(5.614721, 4.298106)

    const myOptions = {
      zoom: 8,
      center: myLongLat,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: lightGMap,
      title: 'Zoom to view',
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.BOTTOM_CENTER,
      },
      panControl: true,
      panControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_CENTER,
      },
      // scaleControl: true,
      // streetViewControl: true,
      // streetViewControlOptions: {
      //   position: google.maps.ControlPosition.LEFT_TOP,
      // },
    }
    // Initiate map with options
    const map = new google.maps.Map(document.getElementById('myMap'), myOptions)
    // Custom Marker function
    function addMArker(props) {
      // eslint-disable-next-line no-unused-vars
      const mapMarker = new google.maps.Marker({
        position: props.coords,
        map,
        icon: props.image,
        title: props.title,
        animation: google.maps.Animation.DROP,
      })

      // Pop-up Window
      const mapInfoWindow = new google.maps.InfoWindow({
        content: props.content,
      })

      mapMarker.addListener('click', function () {
        mapInfoWindow.open(map, mapMarker)
        map.setZoom(11)
        map.setCenter(mapMarker.getPosition())
        toggleBounce()
      })

      function toggleBounce() {
        if (mapMarker.getAnimation() != null) {
          mapMarker.setAnimation(null)
        } else {
          mapMarker.setAnimation(google.maps.Animation.BOUNCE)
        }
      }
    }

    const img = require('assets/img/location-icon.png')

    // Call Marker
    addMArker({
      coords: headOffLoc,
      image: img,
      title: 'Head Office (Lagos)',
      content:
        '<b>Head Office (Lagos)</b>' +
        '<br/>' +
        '<br/>' +
        '62, Iyana-Ipaja Road' +
        '<br/>' +
        'Alaguntan B/Stop' +
        '<br/>' +
        'Opp. Mobil Filling Station' +
        '<br/>' +
        'Iyana-Ipaja, Alimosho' +
        '<br/>' +
        'Lagos State',
    })
    addMArker({
      coords: phOffLoc,
      image: img,
      title: 'PortHarcourt Office',
      content:
        '<b>PortHarcourt Office</b>' +
        '<br/>' +
        '<br/>' +
        'HC, 54 Road 3, Enugu Str.' +
        '<br/>' +
        'Rumuobiokani Housing Estate' +
        '<br/>' +
        'Old Aba Road, P/H' +
        '<br/>' +
        'River State',
    })
  },
}
</script>
<style lang="scss" scoped src="assets/sass/contact.scss"></style>