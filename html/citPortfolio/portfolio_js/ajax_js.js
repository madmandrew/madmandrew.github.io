function ajaxRequest () {

    console.log("start");

    var request = new XMLHttpRequest();

    //request.onreadystatechange = ajaxCallback(request);

    var urlString = "https://maps.googleapis.com/maps/api/place/autocomplete/json?" +
    "input=Boi" +
    "&types=(cities)&key=AIzaSyBTO-OBrlm2zzyqu__C60vegyr_0Yu0tr4";

    console.log("open request");
    request.open("GET", urlString, false);
    request.send();


    console.log("callback function");
    console.log(request);
    console.log(request.responseText);
}

var ajaxCallback = function(response)
{
    console.log("callback function");
    console.log(response);
    console.log(response.responseText);
}
