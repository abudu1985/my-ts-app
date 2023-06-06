"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Select_1 = require("./Select");
var style_1 = require("./style");
var options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Fifth", value: 5 },
];
function App() {
    var _a = react_1.useState([options[0]]), value1 = _a[0], setValue1 = _a[1];
    var _b = react_1.useState(options[0]), value2 = _b[0], setValue2 = _b[1];
    return (React.createElement(style_1["default"], null,
        React.createElement(Select_1.Select, { multiple: true, options: options, value: value1, onChange: function (o) { return setValue1(o); } }),
        React.createElement("br", null),
        React.createElement(Select_1.Select, { options: options, value: value2, onChange: function (o) { return setValue2(o); } })));
}
exports["default"] = App;
