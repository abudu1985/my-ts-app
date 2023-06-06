"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .modalBackground {\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.65);\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    top: 0;\n  }\n\n  .modalContainer {\n    width: 500px;\n    //  height: 500px;\n    border-radius: 12px;\n    background-color: white;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    display: flex;\n    flex-direction: column;\n    padding: 25px;\n  }\n\n  .titleCloseBtn {\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  .titleCloseBtn button {\n    background-color: transparent;\n    border: none;\n    font-size: 25px;\n    cursor: pointer;\n  }\n\n  .modalContainer .title {\n    display: inline-block;\n    text-align: center;\n  }\n\n  .modalContainer .body {\n    flex: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    //  font-size: 1.7rem;\n    text-align: center;\n  }\n\n  .modalContainer .footer {\n    flex: 20%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .modalContainer .footer button {\n    width: 150px;\n    height: 45px;\n    margin: 10px;\n    border: none;\n    background-color: cornflowerblue;\n    color: white;\n    border-radius: 8px;\n    font-size: 20px;\n    cursor: pointer;\n  }\n\n  #cancelBtn {\n    background-color: crimson;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalStyled = _styledComponents["default"].div(_templateObject());

var _default = ModalStyled;
exports["default"] = _default;