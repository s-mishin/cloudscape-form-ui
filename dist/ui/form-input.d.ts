import { type Control, type FieldValues, type Path, type RegisterOptions } from 'react-hook-form';
export interface FormInputProps<TFieldValues extends FieldValues = FieldValues> {
    name: Path<TFieldValues>;
    control: Control<TFieldValues>;
    rules?: Omit<RegisterOptions<TFieldValues>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    label?: string;
    description?: string;
    placeholder?: string;
    constraintText?: string;
}
export declare function FormInput<TFieldValues extends FieldValues = FieldValues>(props: FormInputProps<TFieldValues>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=form-input.d.ts.map