function AtkPageObject(statsObject, oObject)
{
    this.statsObject = statsObject;
    this.oObject = oObject;
    
    this.allXs = {
        "firstX" : {
            "set" : true,
            "loop" : null,
            "barPercent" : 100
        },
        "secondX" : {
            "set" : false,
            "loop" : null,
            "barPercent" : 100
        },
        "thirdX" : {
            "set" : false,
            "loop" : null,
            "barPercent" : 100
        },
        "fourthX" : {
            "set" : false,
            "loop" : null,
            "barPercent" : 100
        },
        "fifthX" : {
            "set" : false,
            "loop" : null,
            "barPercent" : 100
        }
    }
    
    this.firstX_loop;
    this.firstX_bar_percent;
    
    this.addX = function ()
    {
        addX(this);
    }
    createAtkListeners(this);
}

function createAtkListeners(atkPageObject)
{
    for (var xId in atkPageObject.allXs)
    {
        (function(xId1)
        {
           document.getElementById(xId1 + "Button")
               .addEventListener("click", function ()
            {
                document.getElementById(xId1 + "Button").disabled = true;
                //start attack loop
                //atkPageObject[xId1 + "_bar_percent"] = 100;
                atkPageObject.allXs[xId1].barPercent = 100;
                console.log(1000/ atkPageObject.oObject.atkSpeed);

                atkPageObject.allXs[xId1].loop = setInterval(function(xId)
                {
                    (function(xId2)
                     {
                        attackLoop(atkPageObject, xId2);
                    }(xId1));
                   
                }, 1000 / atkPageObject.oObject.atkSpeed);
            });     
        }(xId)); //calls this immediately to prevent var rewrites..
    }
    
    /*document.getElementById("firstXButton")
           .addEventListener("click", function ()
    {
        document.getElementById("firstXButton").disabled = true;
        //start attack loop
        atkPageObject.firstX_bar_percent = 100;
        console.log(1000/ atkPageObject.oObject.atkSpeed);
        atkPageObject.firstX_loop = setInterval(function()
        {
           attackLoop(atkPageObject, "firstX");
        }, 1000 / atkPageObject.oObject.atkSpeed);

        //check
    });*/
}

function addX(atkPageObject)
{
    console.log("addX Here");
    for (var xId in atkPageObject.allXs)
    {
        console.log(xId);
        if(!atkPageObject.allXs[xId].set)
        {
            
            break;
        }
    }
}

function attackLoop(atkPageObject, id)
{
    //console.log(atkPageObject[id + "_bar_percent"] - atkPageObject.oObject.atkDamage);
    if (atkPageObject.allXs[id].barPercent - atkPageObject.oObject.atkDamage <= 0)
    {
        if (!atkPageObject.oObject.autoAttack)
        {  
            clearInterval(atkPageObject.allXs[id].loop);
            document.getElementById(id + "Button").disabled = false;
        }
        else
        {
           //handle atkSpeed change here    
        }
        document.getElementById(id + "Bar").style = "width:100%";
        document.getElementById(id + "BarText").innerHTML = "100%";
        
        
        //atkPageObject.statsObject.changeMoney(atkPageObject.oObject.xValue);
        //atkPageObject.statsObject.changeXKills(1);
        //atkPageObject[id + "_bar_percent"] = 100;
        atkPageObject.allXs[id].barPercent = 100;
        atkPageObject.statsObject
            .changeMoneyAndXKills(atkPageObject.oObject.xValue, 1);
    } 
    else
    {
        //var newPercent = atkPageObject[id + "_bar_percent"] - atkPageObject.oObject.atkDamage;
        var newPercent = atkPageObject.allXs[id].barPercent - atkPageObject.oObject.atkDamage;
        //atkPageObject[id + "_bar_percent"] = newPercent;
        atkPageObject.allXs[id].barPercent = newPercent;
        
        document.getElementById(id + "Bar")
        .style = "width:" + newPercent + "%";
        
        //this is to account for the text overflowing container
        if (newPercent <= 10)
        {
            document.getElementById(id + "BarText").innerHTML = "";
        }
        else
        {
            document.getElementById(id + "BarText").innerHTML = newPercent + "%";
        }
    }
}