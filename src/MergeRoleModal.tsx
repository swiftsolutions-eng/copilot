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
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import FormSelect from './components/FormSelect'

interface Props extends Omit<ModalProps, 'children'> {
  raw: any
  selectedRole?: string
}

const MergeRoleModal = (props: Props) => {
  const { raw, selectedRole: selectedRoleProp, ...rest } = props
  const toast = useToast()
  const [isLoading, setLoading] = useState(false)

  const roleOptions: { text: string; value: string }[] = useMemo(() => {
    return (Array.from(raw?.AVAILABLE_ROLES ?? []) ?? []).map(n => ({
      text: n as string,
      value: n as string,
    }))
  }, [raw?.AVAILABLE_ROLES])

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<{
    from: string
    to: string
  }>()

  // useEffect(() => {
  //   window.Main.on('merge-role-resolved', (args: any) => {
  //     if (args.success) {
  //       window.Main.sendMessage('fetch-raw')
  //       toast({ status: 'success', description: 'role merged' })
  //       reset({
  //         from: '',
  //         to: '',
  //       })
  //     } else {
  //       toast({ status: 'error', description: 'Failed merge role' })
  //     }
  //     setLoading(false)
  //   })
  // }, [reset])

  const onSubmit = handleSubmit(data => {
    setLoading(true)
    // window.Main.sendMessage('merge-role', data)
  })

  return (
    <Modal {...rest} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Merge Permission</ModalHeader>
        <ModalBody>
          <Stack spacing="4">
            <FormSelect
              name="from"
              label="From Role"
              control={control}
              rules={{ required: 'Required' }}
              options={roleOptions}
            />
            <FormSelect
              name="to"
              label="To Role"
              control={control}
              rules={{ required: 'Required' }}
              options={roleOptions}
            />
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

export default MergeRoleModal
