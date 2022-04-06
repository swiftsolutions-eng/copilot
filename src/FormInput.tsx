import {get} from 'lodash'
import {
  InputProps,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react'
import {forwardRef} from '@chakra-ui/system'
import {
  Controller,
  ControllerProps,
  Control,
  FieldError,
  useFormState,
} from 'react-hook-form'

export interface FormInputProps
  extends Omit<InputProps, 'value' | 'defaultValue' | 'onChange' | 'name'>,
    Omit<ControllerProps, 'render'> {
  label?: string
  helperText?: string
  control: Control<any, object>
}

export const FormInput = forwardRef<FormInputProps, 'input'>((props, ref) => {
  const {name, rules, control, defaultValue, label, helperText, ...rest} =
    props
  const {errors} = useFormState({control})
  const error: FieldError | null = get(errors, name)

  return (
    <FormControl
      data-testid={`input-${name || label}`}
      isInvalid={!!error}
      isRequired={!!rules?.required}>
      <FormLabel
        hidden={!label || props.hidden || props.type === 'hidden'}
        textTransform="capitalize">
        {label}
      </FormLabel>
      <Controller
        name={name}
        rules={rules}
        control={control}
        defaultValue={defaultValue}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            {...rest}
            ref={ref}
            onChange={onChange}
            value={value ?? ''}
            onBlur={onBlur}
          />
        )}
      />
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
      <FormErrorMessage>{error?.message ?? 'Invalid Value'}</FormErrorMessage>
    </FormControl>
  )
})
