import { type Control, type FieldValues, type Path, type RegisterOptions } from 'react-hook-form';
export interface FormTextareaProps<TFieldValues extends FieldValues = FieldValues> {
    name: Path<TFieldValues>;
    control: Control<TFieldValues>;
    rules?: Omit<RegisterOptions<TFieldValues>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    label?: string;
    description?: string;
    placeholder?: string;
    constraintText?: string;
    rows?: number;
}
export declare function FormTextarea<TFieldValues extends FieldValues = FieldValues>(props: FormTextareaProps<TFieldValues>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=form-textarea.d.ts.map