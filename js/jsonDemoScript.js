//Testing functions for demonstrating Json (JavaScript Object Notation)
var startFunction = function()
{
    //console.log("starting function calls");
    var andrewsJson = createJsonObject();

    console.log("now my object is created");
    console.log(andrewsJson);

    printJsonStuff(andrewsJson);

    andrewsJson.thirdKeyClasses = {
        "firstClass" : 'software engineering 1',
        "secondClass" : 'some religion course',
        "thirdClass" : 'CIT 261',
        "fourthClass" : null
    }

    printJsonStuffWith3rdKey(andrewsJson);

    andrewsJson = createJsonArrayObject();

    console.log(andrewsJson);
    var returnValue = andrewsJson.thirdKeyClasses[2];
    console.log(returnValue);
   // printJsonStuff(andrewsJson);
}

var createJsonObject = function()
{
    var tempJson = {
        "firstKeyId" : 12,
        "secondKeyName" : 'andrew',
        "thirdKeyClasses" : null
    }

    return tempJson;
}

var createJsonArrayObject = function()
{
    var tempJson = {
        "firstKeyId" : 13,
        "secondKeyName" : 'barta',
        "thirdKeyClasses" : [
            {"object1": 200},
            {"object2": 3000},
            5000
            ]
    }

    return tempJson;
}

var printJsonStuff = function(jsonObject) {
    console.log("-------------------------------------------");
    console.log("my id is: " + jsonObject["firstKeyId"]);
    console.log("my name is: " + jsonObject["secondKeyName"]);
    //console.log("my classes are: " + jsonObject["thirdKeyClasses"]);
    //console.log("my classes are: " + JSON.stringify(jsonObject["thirdKeyClasses"]));

    console.log(jsonObject["thirdKeyClasses"]);

    console.log("-------------------------------------------");
}

var printJsonStuffWith3rdKey = function(jsonObject) {
    console.log("-------------------------------------------");
    console.log("my id is: " + jsonObject["firstKeyId"]);
    console.log("my name is: " + jsonObject["secondKeyName"]);
    //console.log("my classes are: " + jsonObject["thirdKeyClasses"]);
    console.log("my classes are: " + JSON.stringify(jsonObject["thirdKeyClasses"]));

    //console.log(jsonObject["thirdKeyClasses"]);

    console.log("-------------------------------------------");
}
