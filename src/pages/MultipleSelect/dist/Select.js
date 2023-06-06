"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Select = void 0;
var react_1 = require("react");
var select_module_css_1 = require("./select.module.css");
function Select(_a) {
    var multiple = _a.multiple, value = _a.value, onChange = _a.onChange, options = _a.options;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = react_1.useState(0), highlightedIndex = _c[0], setHighlightedIndex = _c[1];
    var containerRef = react_1.useRef(null);
    function clearOptions() {
        multiple ? onChange([]) : onChange(undefined);
    }
    function selectOption(option) {
        if (multiple) {
            if (value.includes(option)) {
                onChange(value.filter(function (o) { return o !== option; }));
            }
            else {
                onChange(__spreadArrays(value, [option]));
            }
        }
        else {
            if (option !== value)
                onChange(option);
        }
    }
    function isOptionSelected(option) {
        return multiple ? value.includes(option) : option === value;
    }
    react_1.useEffect(function () {
        if (isOpen)
            setHighlightedIndex(0);
    }, [isOpen]);
    react_1.useEffect(function () {
        var _a;
        var handler = function (e) {
            if (e.target != containerRef.current)
                return;
            switch (e.code) {
                case "Enter":
                case "Space":
                    setIsOpen(function (prev) { return !prev; });
                    if (isOpen)
                        selectOption(options[highlightedIndex]);
                    break;
                case "ArrowUp":
                case "ArrowDown": {
                    if (!isOpen) {
                        setIsOpen(true);
                        break;
                    }
                    var newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
                    if (newValue >= 0 && newValue < options.length) {
                        setHighlightedIndex(newValue);
                    }
                    break;
                }
                case "Escape":
                    setIsOpen(false);
                    break;
            }
        };
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener("keydown", handler);
        return function () {
            var _a;
            (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("keydown", handler);
        };
    }, [isOpen, highlightedIndex, options]);
    return (React.createElement("div", { ref: containerRef, onBlur: function () { return setIsOpen(false); }, onClick: function () { return setIsOpen(function (prev) { return !prev; }); }, tabIndex: 0, className: select_module_css_1["default"].container },
        React.createElement("span", { className: select_module_css_1["default"].value }, multiple
            ? value.map(function (v) { return (React.createElement("button", { key: v.value, onClick: function (e) {
                    e.stopPropagation();
                    selectOption(v);
                }, className: select_module_css_1["default"]["option-badge"] },
                v.label,
                React.createElement("span", { className: select_module_css_1["default"]["remove-btn"] }, "\u00D7"))); })
            : value === null || value === void 0 ? void 0 : value.label),
        (multiple ? value.length > 0 : value) && (React.createElement("button", { onClick: function (e) {
                e.stopPropagation();
                clearOptions();
            }, className: select_module_css_1["default"]["clear-btn"] }, "\u00D7")),
        React.createElement("div", { className: select_module_css_1["default"].divider }),
        React.createElement("div", { className: select_module_css_1["default"].caret }),
        React.createElement("ul", { className: select_module_css_1["default"].options + " " + (isOpen ? select_module_css_1["default"].show : "") }, options.map(function (option, index) { return (React.createElement("li", { onClick: function (e) {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
            }, onMouseEnter: function () { return setHighlightedIndex(index); }, key: option.value, className: select_module_css_1["default"].option + " " + (isOptionSelected(option) ? select_module_css_1["default"].selected : "") + " " + (index === highlightedIndex ? select_module_css_1["default"].highlighted : "") }, option.label)); }))));
}
exports.Select = Select;
