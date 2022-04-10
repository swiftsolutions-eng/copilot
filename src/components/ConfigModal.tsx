import { useEffect, useState } from 'react'
import {
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalProps,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

type FormDataType = {
  secret: string
  graphqlUri: string
  hasuraSource: string
}

interface ConfigModalProps extends Omit<ModalProps, 'children'> {}

const ConfigModal = (props: ConfigModalProps) => {
  const [isLoading, setLoading] = useState(false)
  const [loadedConfig, setLoadedConfig] = useState<FormDataType | null>(null)
  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FormDataType>()

  const onSubmit = handleSubmit(data => {
    setLoading(true)
    window.Main.sendMessage('save-config', data)
  })

  useEffect(() => {
    setLoading(true)
    window.Main.sendMessage('load-config')
    window.Main.on('load-config-resolved', (result: any) => {
      setLoading(false)
      setLoadedConfig(result)
    })
    window.Main.on('browse-directory-resolved', (hasuraPath: any) => {
      setValue('hasuraSource', hasuraPath)
    })
  }, [])

  useEffect(() => {
    if (loadedConfig !== null) {
      reset(loadedConfig)
    }
  }, [loadedConfig])

  const handleBrowse = () => {
    window.Main.sendMessage('browse-directory')
  }

  return (
    <>
      <Modal {...props} isCentered size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Config</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <FormControl isRequired isInvalid={!!errors.graphqlUri}>
                <FormLabel>Hasura Graphql Url</FormLabel>
                <Input
                  {...register('graphqlUri', {
                    required: 'Graphql URL is required',
                  })}
                />
                <FormErrorMessage>
                  {errors.graphqlUri?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!errors.graphqlUri}>
                <FormLabel>Hasura Source</FormLabel>
                <Stack w="full" direction="row">
                  <Input
                    isReadOnly={true}
                    {...register('hasuraSource', {
                      required: 'Hasura Source is required',
                    })}
                  />
                  <Button onClick={handleBrowse}>Browse Folder</Button>
                </Stack>
                <FormErrorMessage>
                  {errors.graphqlUri?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!errors.graphqlUri}>
                <FormLabel>Hasura Admin Secret</FormLabel>
                <Input
                  {...register('secret', {
                    required: 'Hasura Admin Secret is required',
                  })}
                />
                <FormErrorMessage>
                  {errors.graphqlUri?.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              isLoading={isLoading}
              isDisabled={!isDirty}
              onClick={onSubmit}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ConfigModal
