import { useMemo } from 'react'
import { get } from 'lodash'
import {
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'
import {
  Controller,
  FieldError,
  FieldValues,
  useFormState,
  UseControllerProps,
  useWatch,
} from 'react-hook-form'
import { Select } from 'chakra-react-select'

export interface FormSelectSearchItem {
  text: string
  value: any
}

export interface FormSelectSearchProps<TFieldValues>
  // @ts-ignore
  extends UseControllerProps<TFieldValues> {
  label?: string
  placeholder?: string
  helperText?: string
  options: FormSelectSearchItem[]
  className?: string
  isLoading?: boolean
  disabled?: boolean
  onSearchChange?: (keyword: string) => void
}

function FormSelectSearch<TFieldValues extends FieldValues>(
  props: FormSelectSearchProps<TFieldValues>
) {
  const {
    name,
    label,
    options,
    placeholder,
    control,
    rules,
    defaultValue,
    helperText,
    isLoading,
    disabled,
    className,
    onSearchChange,
  } = props

  const { errors } = useFormState({ control })
  // @ts-ignore: Fix type error
  const error: FieldError | null = get(errors, name)
  const watchedValue = useWatch({ control, name })

  const patchedValue = useMemo(() => {
    return options.find(option => option.value === watchedValue) ?? ''
  }, [options, watchedValue])

  return (
    <FormControl isInvalid={!!error} isRequired={!!rules?.required}>
      <FormLabel textTransform="capitalize" hidden={!label}>
        {label}
      </FormLabel>
      <Controller
        name={name}
        rules={rules}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => {
          return (
            <Select
              isClearable
              hideSelectedOptions
              className={className}
              classNamePrefix={className}
              isLoading={isLoading}
              value={patchedValue}
              onBlur={field.onBlur}
              placeholder={placeholder}
              options={options}
              onChange={(payload: any) => {
                field.onChange(payload?.value ?? '')
              }}
              onInputChange={onSearchChange}
              isDisabled={disabled}
              getOptionLabel={(item: any) => item.text}
            />
          )
        }}
      />
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
      <FormErrorMessage>{error?.message ?? 'Invalid Value'}</FormErrorMessage>
    </FormControl>
  )
}

export default FormSelectSearch
