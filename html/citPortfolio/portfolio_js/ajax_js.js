var apiKey = "AIzaSyBTO-OBrlm2zzyqu__C60vegyr_0Yu0tr4"

function simpleAjaxRequest()
{
    var request = new XMLHttpRequest();
    request.onload = function ()
    {
        document.getElementById("simpleResults").innerHTML = request.responseText;
    }
    request.open("GET", "/html/citPortfolio/simpleAjax.txt",true);
    request.send();
}




function ajaxRequest () {
    //<![CDATA[
        //gapi.load('auth', init);
    //]]>
    var urlString = "https://maps.googleapis.com/maps/api/place/autocomplete/json?" +
    "input=Boi" +
    "&types=(cities)&key=AIzaSyBTO-OBrlm2zzyqu__C60vegyr_0Yu0tr4";

    console.log("started");

    var xhr = new XMLHttpRequest();
    xhr.onload = function()
    {
        console.log("FINISHED!");
        console.log(request.responseText);
    }

    xhr.open("GET", urlString, true);
    xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

    xhr.send();

    /*gapi.client.setApiKey(apiKey);

    var request = new XMLHttpRequest();
    console.log(gapi);
    var oauthToken = gapi.auth.getToken();

    request.onload = function()
    {
        console.log("FINISHED!");
        console.log(request.responseText);
    }

    request.open("GET", urlString);
    xhr.setRequestHeader('Authorization', 'Bearer ' + oauthToken.access_token);
    request.send();

    console.log("finsihed script");*/
}



//    console.log("start");
//
//     var urlString = "https://maps.googleapis.com/maps/api/place/autocomplete/json?" +
//    "input=Boi" +
//    "&types=(cities)&key=AIzaSyBTO-OBrlm2zzyqu__C60vegyr_0Yu0tr4";
//    //var urlString = "http://gd.geobytes.com/AutoCompleteCity?callback=?&q=bois";
//
//    var request = createCORSRequest('GET', urlString);
//    request.setRequestHeader('Authorization', 'Bearer AIzaSyBTO-OBrlm2zzyqu__C60vegyr_0Yu0tr4');
//
//    if (!request)
//    {
//        console.log("error creating request");
//        return;
//    }
//
//    console.log(request);
//
//    request.onloadstart = function() {
//     console.log("started");
//    }
//    console.log("before load");
//    request.onload = function() {
//        console.log("loaded");
//        console.log(request.responseText);
//        console.log(request);
//    }
//
//    request.send();
//
//
//
//
//
//    //request.onreadystatechange = ajaxCallback(request);
//
//
//
//    /*console.log("open request");
//    request.open("GET", urlString, false);
//    request.send();
//
//
//    console.log("callback function");
//    console.log(request);
//    console.log(request.responseText);*/
//}
//
//var ajaxCallback = function(response)
//{
//    console.log("callback function");
//    console.log(response);
//    console.log(response.responseText);
//}
//
//
//
//
//function createCORSRequest(method, url) {
//  var xhr = new XMLHttpRequest();
//  if ("withCredentials" in xhr) {
//
//    // Check if the XMLHttpRequest object has a "withCredentials" property.
//    // "withCredentials" only exists on XMLHTTPRequest2 objects.
//    xhr.open(method, url, true);
//
//  } else if (typeof XDomainRequest != "undefined") {
//
//    // Otherwise, check if XDomainRequest.
//    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//    xhr = new XDomainRequest();
//    xhr.open(method, url);
//
//  } else {
//
//    // Otherwise, CORS is not supported by the browser.
//    xhr = null;
//
//  }
//  return xhr;
//}
