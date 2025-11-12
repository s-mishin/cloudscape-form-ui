import { FormField, Input } from "@cloudscape-design/components";
import { Controller } from "react-hook-form";
function FormInput(props) {
    return /*#__PURE__*/ React.createElement(Controller, {
        name: props.name,
        control: props.control,
        rules: props.rules,
        render: ({ field, fieldState })=>/*#__PURE__*/ React.createElement(FormField, {
                label: props.label,
                description: props.description,
                constraintText: props.constraintText,
                errorText: fieldState.error?.message,
                stretch: true
            }, /*#__PURE__*/ React.createElement(Input, {
                ...field,
                value: field.value,
                onChange: (event)=>field.onChange(event.detail.value),
                placeholder: props.placeholder,
                invalid: !!fieldState.error?.message
            }))
    });
}
export { FormInput };
