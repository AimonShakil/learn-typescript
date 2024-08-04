"use strict";
function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
//anonymous function type with Rest parameters
var buildNameFun = function (firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
};
//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
//+++++++++++++++++++++++++++++
