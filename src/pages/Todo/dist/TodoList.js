"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./TodoList.css");
var TodoList = function (props) {
    return (react_1["default"].createElement("ul", null, props.items.map(function (todo) { return (react_1["default"].createElement("li", { key: todo.id },
        react_1["default"].createElement("div", { className: "todo-list-text-block " + (!todo.active ? "strike" : "") }, todo.text),
        react_1["default"].createElement("div", { className: "todo-list-action-block" },
            react_1["default"].createElement("button", { onClick: props.onToggleTodo.bind(null, todo.id) }, "DONE"),
            react_1["default"].createElement("button", { onClick: props.onDeleteTodo.bind(null, todo.id) }, "DELETE")))); })));
};
exports["default"] = TodoList;
