"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var HomeStyled = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 10px;\n  width: 100%;\n\n  .column1 {\n    background-color: rgba(255, 255, 255, 0.8);\n    height: 70vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .home-center-content {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 35px;\n    padding: 15px 10px 10px;\n    width: 95%;\n\n    .badge {\n      background-color: cadetblue;\n      color: white;\n      padding: 4px 8px;\n      text-align: center;\n      border-radius: 5px;\n      margin: 4px;\n      cursor: pointer;\n      text-decoration: none;\n    }\n  }\n"], ["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 10px;\n  width: 100%;\n\n  .column1 {\n    background-color: rgba(255, 255, 255, 0.8);\n    height: 70vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .home-center-content {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 35px;\n    padding: 15px 10px 10px;\n    width: 95%;\n\n    .badge {\n      background-color: cadetblue;\n      color: white;\n      padding: 4px 8px;\n      text-align: center;\n      border-radius: 5px;\n      margin: 4px;\n      cursor: pointer;\n      text-decoration: none;\n    }\n  }\n"])));
var projectsLinks = [
    {
        path: "/rickAndMorty",
        name: "RickAndMorty"
    },
    {
        path: "/todo",
        name: "Todo"
    },
    {
        path: "/expoPlatformInterview",
        name: "ExpoPlatformInterview"
    },
    {
        path: "/typingChildren",
        name: "TypingChildren"
    },
    {
        path: "/avangersQuiz",
        name: "AvangersQuiz"
    },
    {
        path: "/characterCard",
        name: "CharacterCard"
    },
    {
        path: "/counter",
        name: "Counter"
    },
    {
        path: "/counterWithHooks",
        name: "CounterWithHooks"
    },
    {
        path: "/dogFacts",
        name: "DogFacts"
    },
    {
        path: "pizzaCalculator",
        name: "PizzaCalculator"
    },
    {
        path: "colorSwatch",
        name: "ColorSwatch"
    },
    {
        path: "currentUser",
        name: "CurrentUser"
    },
    {
        path: "nameTagHoc",
        name: "NameTagHoc"
    },
    {
        path: "burritos",
        name: "Burritos"
    },
    {
        path: "formWithValidation",
        name: "FormWithValidation"
    },
    {
        path: "simpleModal",
        name: "SimpleModal"
    },
    {
        path: "multipleSelect",
        name: "MultipleSelect"
    },
];
var Home = function () {
    return (react_1["default"].createElement(HomeStyled, null,
        react_1["default"].createElement("div", { className: "" }),
        react_1["default"].createElement("div", { className: "column1" },
            react_1["default"].createElement("div", { className: "home-center-content" }, projectsLinks.map(function (item) { return (react_1["default"].createElement(react_router_dom_1.Link, { key: item === null || item === void 0 ? void 0 : item.path, to: item.path, className: "badge" }, item === null || item === void 0 ? void 0 : item.name)); }))),
        react_1["default"].createElement("div", { className: "" })));
};
exports["default"] = Home;
var templateObject_1;
