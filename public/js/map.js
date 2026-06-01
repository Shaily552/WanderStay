
      maptilersdk.config.apiKey = mapToken;
      const map = new maptilersdk.Map({
        container: 'map', // container's id or the HTML element to render the map
        style: maptilersdk.MapStyle.STREETS,
        center: listing.geometry.coordinates,  // starting position me pehle longitude aayega then lattitude [lan,lat]
        zoom:9,
      });

const el = document.createElement("div");
el.innerHTML = '<i class="fa-solid fa-house map-marker"></i>';


const marker = new maptilersdk.Marker({ element: el})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new maptilersdk.Popup({offset:25})
    .setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`)
  )
  .addTo(map);  