import { TextField, TextFieldProps } from "@mui/material";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

export type FieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, "variant" | "value" | "defaultValue">;

export function Field<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...rest
}: FieldProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <TextField
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      error={!!fieldState.error?.message}
      helperText={fieldState.error?.message}
      {...field}
      {...rest}
    />
  );
}
