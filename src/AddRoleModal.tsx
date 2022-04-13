import { useMemo, useEffect, useState } from 'react'
import {
  ModalProps,
  Modal,
  Stack,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  useToast,
  HStack,
  Text,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  VStack,
  Box,
} from '@chakra-ui/react'
import {
  useForm,
  useFieldArray,
  useWatch,
  FieldError,
  Control,
  UseFormRegister,
} from 'react-hook-form'
import FormSelect from './components/FormSelect'
import { FormInput } from './FormInput'

interface Props extends Omit<ModalProps, 'children'> {
  raw: any
}

const AddRoleModal = (props: Props) => {
  const { raw, ...rest } = props
  const toast = useToast()
  const [isLoading, setLoading] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors, isDirty },
  } = useForm<{
    role: string
    tables: {
      name: string
      allowAggregation?: boolean
      context?: 'warehouse' | 'company'
    }[]
  }>()

  const {
    fields: tables,
    append,
    remove,
  } = useFieldArray({
    name: 'tables',
    control: control,
    shouldUnregister: true,
  })

  // useEffect(() => {
  //   window.Main.on('add-role-resolved', (args: any) => {
  //     if (
  //       !args.map((arg: { success: boolean }) => arg.success).includes(false)
  //     ) {
  //       window.Main.sendMessage('fetch-raw')
  //       toast({ status: 'success', description: 'Role created' })
  //       reset({
  //         role: '',
  //         tables: [],
  //       })
  //     } else {
  //       toast({ status: 'error', description: 'Failed creating role' })
  //     }
  //     setLoading(false)
  //   })
  // }, [reset])

  const onSubmit = handleSubmit(data => {
    setLoading(true)
    // window.Main.sendMessage('add-role', data)
  })

  const onAddTable = () => {
    append({
      name: '',
    })
  }

  return (
    <Modal {...rest} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Role</ModalHeader>
        <ModalBody>
          <FormInput
            name="role"
            label="Role Name"
            control={control}
            rules={{ required: 'Required' }}
          />
          <Stack>
            <Text fontWeight="bold" fontSize="md">
              Tables
            </Text>
            <Box p="2" h={tables.length > 0 ? '56' : 'auto'} overflowY="auto">
              {tables.length > 0 ? (
                tables?.map((table, index) => (
                  <Table
                    key={table.id}
                    index={index}
                    errors={errors}
                    control={control}
                    raw={raw}
                    remove={remove}
                    register={register}
                  />
                ))
              ) : (
                <Text textAlign="center">
                  Add table(s) which this permission would be included
                </Text>
              )}
            </Box>
          </Stack>
          <Button onClick={onAddTable} colorScheme="blue">
            Add Table
          </Button>
        </ModalBody>
        <ModalFooter>
          <Stack align="end">
            <Button
              isLoading={isLoading}
              onClick={onSubmit}
              colorScheme="blue"
              disabled={!isDirty || tables.length < 1}
            >
              Save
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

type TableProps = {
  errors: {
    role?: FieldError | undefined
    tables?:
      | {
          name?: FieldError | undefined
          allowAggregation?: FieldError | undefined
          context?: FieldError | undefined
        }[]
      | undefined
  }
  index: number
  control: Control<
    {
      role: string
      tables: {
        name: string
        allowAggregation?: boolean
        context?: 'warehouse' | 'company'
      }[]
    },
    object
  >
  raw: any
  remove: (index?: number | number[] | undefined) => void
  register: UseFormRegister<{
    role: string
    tables: {
      name: string
      allowAggregation?: boolean
      context?: 'warehouse' | 'company'
    }[]
  }>
}

const Table = ({
  errors,
  index,
  control,
  raw,
  remove,
  register,
}: TableProps) => {
  const isAllowedAggregation = useWatch({
    name: `tables.${index}.allowAggregation`,
    control,
  })
  const selectedTables = useWatch({ name: 'tables', control })
  const contextOptions = ['company', 'warehouse']

  if (selectedTables.length > index) {
    selectedTables.splice(index, 1)
  }

  const tableOptions: { text: string; value: string }[] = useMemo(() => {
    return (
      Array.from(
        Object.keys(raw?.tableMap ?? {}).filter(tableName => {
          const tableNames = selectedTables.map(table => table.name)
          return !tableNames.includes(tableName.replace('.yaml', ''))
        }) ?? []
      ) ?? []
    ).map(tableFilename => ({
      text: tableFilename.replace('.yaml', '') as string,
      value: tableFilename.replace('.yaml', '') as string,
    }))
  }, [raw?.tableMap])

  return (
    <VStack p="2" my="2" border="darkgrey solid 1px">
      <FormSelect
        name={`tables.${index}.name`}
        label="Table Name"
        control={control}
        rules={{ required: 'Required' }}
        options={tableOptions}
      />
      <FormControl isInvalid={!!errors?.tables?.[index]?.context}>
        <FormLabel>Context</FormLabel>
        <Select
          {...register(`tables.${index}.context`)}
          placeholder="No Context"
        >
          {contextOptions.map(context => (
            <option key={context}>{context}</option>
          ))}
        </Select>
        <FormErrorMessage>
          {errors?.tables?.[index]?.context?.message}
        </FormErrorMessage>
      </FormControl>
      <HStack w="full" justifyContent="flex-start">
        <Checkbox
          isChecked={!!isAllowedAggregation}
          {...register(`tables.${index}.allowAggregation`)}
        >
          Allow Aggregation
        </Checkbox>
      </HStack>
      <HStack w="full" justifyContent="flex-end">
        <Button onClick={() => remove(index)} colorScheme="red">
          Remove
        </Button>
      </HStack>
    </VStack>
  )
}

export default AddRoleModal
