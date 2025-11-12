"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    FormInput: ()=>FormInput
});
const components_namespaceObject = require("@cloudscape-design/components");
const external_react_hook_form_namespaceObject = require("react-hook-form");
function FormInput(props) {
    return /*#__PURE__*/ React.createElement(external_react_hook_form_namespaceObject.Controller, {
        name: props.name,
        control: props.control,
        rules: props.rules,
        render: ({ field, fieldState })=>/*#__PURE__*/ React.createElement(components_namespaceObject.FormField, {
                label: props.label,
                description: props.description,
                constraintText: props.constraintText,
                errorText: fieldState.error?.message,
                stretch: true
            }, /*#__PURE__*/ React.createElement(components_namespaceObject.Input, {
                ...field,
                value: field.value,
                onChange: (event)=>field.onChange(event.detail.value),
                placeholder: props.placeholder,
                invalid: !!fieldState.error?.message
            }))
    });
}
exports.FormInput = __webpack_exports__.FormInput;
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "FormInput"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});
