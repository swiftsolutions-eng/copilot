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

interface Props extends Omit<ModalProps, 'children'> {
  raw: any
  selectedRole?: string
}

const MergePermissionModal = (props: Props) => {
  const { raw, selectedRole: selectedRoleProp, ...rest } = props
  const toast = useToast()
  const usedRoleName = useRef<any>(undefined)
  const [isLoading, setLoading] = useState(false)

  const roleOptions: string[] = useMemo(() => {
    return Array.from(raw?.AVAILABLE_ROLES ?? []) ?? []
  }, [raw?.AVAILABLE_ROLES])

  const tableOptions: string[] = useMemo(() => {
    return (
      Object.keys(raw?.tableMap ?? {}).map(n => n.replace('.yaml', '')) ?? []
    )
  }, [raw?.tableMap])

  const contextOptions = ['company', 'warehouse']

  const {
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
        <ModalHeader>Merge Permission</ModalHeader>
        <ModalBody>
          <Stack spacing="4">
            <FormControl isRequired isInvalid={!!errors.roleName}>
              <FormLabel>Role</FormLabel>
              <Select
                {...register('roleName', { required: 'Required' })}
                placeholder="Select Role"
              >
                {roleOptions.map(role => (
                  <option key={role}>{role}</option>
                ))}
              </Select>
              <FormErrorMessage>{errors.roleName?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.tableName}>
              <FormLabel>Table</FormLabel>
              <Select
                {...register('tableName', { required: 'Required' })}
                placeholder="Select Table"
              >
                {tableOptions.map(table => (
                  <option key={table}>{table}</option>
                ))}
              </Select>
              <FormErrorMessage>{errors.tableName?.message}</FormErrorMessage>
            </FormControl>

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

export default MergePermissionModal
