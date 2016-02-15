var tabCount = 0;
var activeTabs = {};

function addTab()
{
    console.log("adding tab");
    hideAllTabs();

    var emptyTabIndex = 0;
    for (var i = 1; i <= tabCount; i++)
    {
        var tabKey = "tab_" + i;
        console.log("checking tab " + i + activeTabs[tabKey]);
        if (!activeTabs[tabKey])
        {
            emptyTabIndex = i;
            activeTabs[tabKey] = true;
            break;
        }
    }

    console.log("TESTING INDEX: " + emptyTabIndex);

    //decide where to put the button
    if (emptyTabIndex == 0)
    {
        emptyTabIndex = ++tabCount

        console.log("testing: " + emptyTabIndex + "," + tabCount);
        var tabButton = "<input type='button' id='tabButton_" + emptyTabIndex
        + "' value='Tab" + emptyTabIndex
        + "' onclick='changeToTab(" + emptyTabIndex + ")'> ";

        var tabContent = "<div id='contentTab_"+ emptyTabIndex
        +"'>This is content for tab " + emptyTabIndex + "</div>";

        activeTabs["tab_" + emptyTabIndex] = true;

        document.getElementById("tabsContainer")
            .innerHTML += tabButton;

        document.getElementById("contentBox")
            .innerHTML += tabContent;
    } else
    {
        var tabButton = "<input type='button' id='tabButton_" + emptyTabIndex
        + "' value='Tab" + emptyTabIndex
        + "' onclick='changeToTab(" + emptyTabIndex + ")'> ";

        var tabContent = "<div id='contentTab_"+ emptyTabIndex
        +"'>This is content for tab " + emptyTabIndex + "</div>";

        //dont care where the content goes order doesn't show
        document.getElementById("contentBox")
            .innerHTML += tabContent;

        if (emptyTabIndex == 1)
        {
            var tabButtonNode = createButton(emptyTabIndex);
            var tempNode = document.getElementById("addButton");
            tempNode.parentNode
                .insertBefore(tabButtonNode, tempNode.nextSibling);
        } else if (emptyTabIndex == tabCount)
        {
             document.getElementById("tabsContainer")
            .innerHTML += tabButton;
        } else
        {
            var tabButtonNode = createButton(emptyTabIndex);
            var tempNode = document.getElementById("tabButton_" + (emptyTabIndex - 1));
            tempNode.parentNode
                .insertBefore(tabButtonNode, tempNode.nextSibling);
        }
    }
}

function createButton(tabNum)
{
    var btn = document.createElement("BUTTON");
    btn.textContent = "tab " + tabNum;
    btn.id = "tabButton_" + tabNum;
    btn.onclick = function()
    {
        changeToTab(tabNum);
    }

    return btn;
}

function changeToTab(tabNum)
{
    //console.log("chaging to tab: " + tabNum);
    hideAllTabs();
    document.getElementById("contentTab_" + tabNum).style = "display:block";
}

function hideAllTabs()
{
    for (var i = 1; i <= tabCount; i++)
    {
        var tabKey = "tab_" + i;
        //console.log("hiding tab " + i + activeTabs[tabKey]);
        if (activeTabs[tabKey])
        {
            document.getElementById("contentTab_" + i).style = "display:none";
        }
    }
}

function removeTab(tabNum)
{
    activeTabs["tab_" + tabNum] = false;
    document.getElementById("contentTab_" + tabNum).remove();
    document.getElementById("tabButton_" + tabNum).remove();
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
