import { jsx as _jsx } from "react/jsx-runtime";
import { FormField, Input } from '@cloudscape-design/components';
import { Controller } from 'react-hook-form';
export function FormInput(props) {
    return (_jsx(Controller, { name: props.name, control: props.control, rules: props.rules, render: ({ field, fieldState }) => (_jsx(FormField, { label: props.label, description: props.description, constraintText: props.constraintText, errorText: fieldState.error?.message, stretch: true, children: _jsx(Input, { ...field, value: field.value, onChange: (event) => field.onChange(event.detail.value), placeholder: props.placeholder, invalid: !!fieldState.error?.message }) })) }));
}
