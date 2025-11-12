import { FormField, Textarea } from '@cloudscape-design/components';
import { type Control, Controller, type FieldValues, type Path, type RegisterOptions } from 'react-hook-form';

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

export function FormTextarea<TFieldValues extends FieldValues = FieldValues>(props: FormTextareaProps<TFieldValues>) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules}
      render={({ field, fieldState }) => (
        <FormField
          label={props.label}
          description={props.description}
          constraintText={props.constraintText}
          errorText={fieldState.error?.message}
          stretch
        >
          <Textarea
            {...field}
            value={field.value}
            onChange={(event) => field.onChange(event.detail.value)}
            placeholder={props.placeholder}
            invalid={!!fieldState.error?.message}
            rows={props.rows}
          />
        </FormField>
      )}
    />
  );
}
