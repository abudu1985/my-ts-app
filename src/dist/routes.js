"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var LoadingScreen_1 = require("./components/RoutesInfrastructure/components/LoadingScreen");
var MainLayout_1 = require("./layout/MainLayout");
var GuestGuard_1 = require("./components/RoutesInfrastructure/components/GuestGuard");
var Loadable = function (Component) { return function (props) {
    return (React.createElement(react_1.Suspense, { fallback: React.createElement(LoadingScreen_1["default"], null) },
        React.createElement(Component, __assign({}, props))));
}; };
// *  AUTHENTICATION PAGES
var Login = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/authentication/Login"); }); }));
var Register = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/authentication/Register"); }); }));
//  * HOME PAGE
var Home = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/home/Home"); }); }));
//  * OTHER PAGES
var RickAndMorty = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/RickAndMorty"); }); }));
var Todo = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/Todo"); }); }));
var ExpoPlatformInterview = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/ExpoPlatformInterview"); }); }));
var TypingChildren = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/TypingChildren"); }); }));
var AvangersQuiz = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/AvangersQuiz"); }); }));
var CharacterCard = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/CharacterCard"); }); }));
var Counter = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/Counter"); }); }));
var CounterWithHooks = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/CounterWithHooks"); }); }));
var DogFacts = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/DogFacts"); }); }));
var PizzaCalculator = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/PizzaCalculator"); }); }));
var ColorSwatch = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/ColorSwatch"); }); }));
var CurrentUser = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/CurrentUser"); }); }));
var NameTagHoc = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/NameTagHoc"); }); }));
var Burritos = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/Burritos"); }); }));
var FormWithValidation = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/FormWithValidation"); }); }));
var SimpleModal = Loadable(react_1.lazy(function () { return Promise.resolve().then(function () { return require("./pages/SimpleModal"); }); }));
var routes = [
    {
        path: "authentication",
        children: [
            {
                path: "login",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(Login, null)))
            },
            {
                path: "register",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(Register, null),
                    " "))
            },
        ]
    },
    {
        path: "*",
        element: React.createElement(MainLayout_1["default"], null),
        children: [
            {
                index: true,
                element: (
                // <AuthGuard>
                //   <Home />
                // </AuthGuard>
                React.createElement(GuestGuard_1["default"], null,
                    React.createElement(Home, null)))
            },
            {
                path: "rickAndMorty",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(RickAndMorty, null)))
            },
            {
                path: "todo",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(Todo, null)))
            },
            {
                path: "expoPlatformInterview",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(ExpoPlatformInterview, null)))
            },
            {
                path: "typingChildren",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(TypingChildren, null)))
            },
            {
                path: "avangersQuiz",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(AvangersQuiz, null)))
            },
            {
                path: "characterCard",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(CharacterCard, null)))
            },
            {
                path: "counter",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(Counter, null)))
            },
            {
                path: "counterWithHooks",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(CounterWithHooks, null)))
            },
            {
                path: "dogFacts",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(DogFacts, null)))
            },
            {
                path: "pizzaCalculator",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(PizzaCalculator, null)))
            },
            {
                path: "colorSwatch",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(ColorSwatch, null)))
            },
            {
                path: "currentUser",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(CurrentUser, null)))
            },
            {
                path: "nameTagHoc",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(NameTagHoc, null)))
            },
            {
                path: "burritos",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(Burritos, null)))
            },
            {
                path: "formWithValidation",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(FormWithValidation, null)))
            },
            {
                path: "simpleModal",
                element: (React.createElement(GuestGuard_1["default"], null,
                    React.createElement(SimpleModal, null)))
            },
        ]
    },
];
exports["default"] = routes;
