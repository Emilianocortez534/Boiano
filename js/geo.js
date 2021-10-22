function iniciarMap(){
    let coord = {lat: -38.0409022 ,lng: -57.5671056};
    let map = new google.maps.Map(document.getElementById("map"),{
        zoom: 15,
        center: coord
    });
    let marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}