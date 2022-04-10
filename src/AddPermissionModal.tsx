import { useMemo, useEffect, useState, useRef } from 'react'
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
  FormControl,
  FormLabel,
  FormErrorMessage,
  Checkbox,
  Select,
  useToast,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import FormSelect from './components/FormSelect'

interface Props extends Omit<ModalProps, 'children'> {
  raw: any
  selectedRole?: string
}

const AddPermissionModal = (props: Props) => {
  const { raw, selectedRole: selectedRoleProp, ...rest } = props
  const toast = useToast()
  const usedRoleName = useRef<any>(undefined)
  const [isLoading, setLoading] = useState(false)

  const roleOptions: { text: string; value: string }[] = useMemo(() => {
    return (Array.from(raw?.AVAILABLE_ROLES ?? []) ?? []).map(n => ({
      text: n as string,
      value: n as string,
    }))
  }, [raw?.AVAILABLE_ROLES])

  const tableOptions: { text: string; value: string }[] = useMemo(() => {
    return (
      Object.keys(raw?.tableMap ?? {}).map(n => ({
        text: n.replace('.yaml', ''),
        value: n.replace('.yaml', ''),
      })) ?? []
    )
  }, [raw?.tableMap])

  const contextOptions = ['company', 'warehouse']

  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isDirty },
  } = useForm<{
    roleName: string
    tableName: string
    allowAggregation?: boolean
    context?: 'warehouse' | 'company'
  }>()
  const isAllowedAggreation = watch('allowAggregation')
  usedRoleName.current = watch('roleName')

  useEffect(() => {
    setValue('roleName', selectedRoleProp ?? '')
  }, [selectedRoleProp])

  useEffect(() => {
    window.Main.on('save-permission-resolved', (args: any) => {
      if (args.success) {
        window.Main.sendMessage('fetch-raw')
        toast({ status: 'success', description: 'Permission saved' })
        reset({
          roleName: usedRoleName.current,
          allowAggregation: false,
          context: '' as any,
          tableName: '' as any,
        })
      } else {
        toast({ status: 'error', description: 'Failed to save permission' })
      }
      setLoading(false)
    })
  }, [reset])

  const onSubmit = handleSubmit(data => {
    window.Main.sendMessage('save-permission', data)
  })

  return (
    <Modal {...rest} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Permission</ModalHeader>
        <ModalBody>
          <Stack spacing="4">
            <FormSelect
              name="roleName"
              label="Role"
              control={control}
              rules={{ required: 'Required' }}
              options={roleOptions}
            />
            <FormSelect
              name="tableName"
              label="Table"
              control={control}
              rules={{ required: 'Required' }}
              options={tableOptions}
            />
            <FormControl isInvalid={!!errors.context}>
              <FormLabel>Context</FormLabel>
              <Select {...register('context')} placeholder="No Context">
                {contextOptions.map(context => (
                  <option key={context}>{context}</option>
                ))}
              </Select>
              <FormErrorMessage>{errors.context?.message}</FormErrorMessage>
            </FormControl>
            <Checkbox
              isChecked={!!isAllowedAggreation}
              {...register('allowAggregation')}
            >
              Allow Aggregation
            </Checkbox>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Stack align="end">
            <Button
              isLoading={isLoading}
              onClick={onSubmit}
              colorScheme="blue"
              disabled={!isDirty}
            >
              Save
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddPermissionModal
