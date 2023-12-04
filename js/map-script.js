"use strict";

async function initMaps() {
  await google.maps.importLibrary("maps");
  await google.maps.importLibrary("marker");

  await initMap(
    "taichung-wedding-map",
    new google.maps.LatLng(24.1407974, 120.6530752)
  );
  await initMap(
    "kaohsiung-wedding-map",
    new google.maps.LatLng(22.6716751, 120.3009235)
  );
}

async function initMap(mapElementId, center) {
  var mapOptions = {
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: center,
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: true,
    overviewMapControl: true,
    mapId: mapElementId,
  };

  var map = new google.maps.Map(
    document.getElementById(mapElementId),
    mapOptions
  );
  // embedded svg
  const parser = new DOMParser();
  // A marker with a custom inline SVG.
  const pinSvgString =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="61" viewBox="0 0 92.3 132.3"><path fill="#1a73e8" d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z"/><path fill="#ea4335" d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z"/><path fill="#4285f4" d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3"/><path fill="#fbbc04" d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3"/><path fill="#34a853" d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.4 14.5 6.8 23.1 12.8 23.1s3.4-8.7 12.8-23.2"/></svg>';
  const pinSvgElement = parser.parseFromString(
    pinSvgString,
    "image/svg+xml"
  ).documentElement;

  const marker = new google.maps.marker.AdvancedMarkerElement({
    map: map,
    content: pinSvgElement,
    position: center,
    title: "A marker using a custom SVG for the glyph.",
  });

  var contentString = "<div>" + "WEDDING PARTY";
  ("</div>");
  const infoWindow = new google.maps.InfoWindow({
    content: contentString,
  });
  infoWindow.open({
    anchor: marker,
    map,
  });

  marker.addListener("click", () => {
    infoWindow.open({
      anchor: marker,
      map,
    });
  });
}

initMaps();
