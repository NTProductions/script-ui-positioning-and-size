// script size/position

var x, y, width, height;

//script size window
var sizeWindow = new Window("palette", "Script Size", undefined);
sizeWindow.orientation = "column";
var sizeGroupOne = sizeWindow.add("group", undefined, "sizeGroupOne");
sizeGroupOne.orientation = "row";
var widthEditText = sizeGroupOne.add("edittext", undefined, "W");
widthEditText.size = [40, 25];
var heightEditText = sizeGroupOne.add("edittext", undefined, "H");
heightEditText.size = [40, 25];
var sizeOkButton = sizeWindow.add("button", undefined, "Save");

// script position window
var positionWindow = new Window("palette", "Script Position", undefined);
positionWindow.orientation = "column";
var positionGroupOne = positionWindow.add("group", undefined, "positionGroupOne");
positionGroupOne.orientation = "row";
var xEditText = positionGroupOne.add("edittext", undefined, "X");
xEditText.size = [40, 25];
var yEditText = positionGroupOne.add("edittext", undefined, "Y");
yEditText.size = [40, 25];
var positionOkButton = positionWindow.add("button", undefined, "Save");

var finalWindow;

sizeWindow.center();
sizeWindow.show();

sizeOkButton.onClick = function() {
        sizeWindow.hide();
        width = parseInt(widthEditText.text);
        height = parseInt(heightEditText.text);
        positionWindow.center();
        positionWindow.show();
    }

positionOkButton.onClick = function() {
        x = parseInt(xEditText.text);
        y = parseInt(yEditText.text);
        positionWindow.hide();
        finalWindow = new Window("palette", "Finished Window", [x, y, width+x, height+y]);
        finalWindow.show();
    }