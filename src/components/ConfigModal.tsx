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
import { loadConfig, storeConfig } from '../utils/config'
import { browseDirectory } from '../utils/service'

type FormDataType = {
  secret: string
  graphqlUri: string
  hasuraSource: string
}

interface ConfigModalProps extends Omit<ModalProps, 'children'> {}

const ConfigModal = (props: ConfigModalProps) => {
  const [isLoading, setLoading] = useState(false)
  const [loadedConfig, setLoadedConfig] = useState<FormDataType | null>(null)
  const [errors, setErrors] = useState<any>()
  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors: formErrors, isDirty },
  } = useForm<FormDataType>()

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true)
    try {
      await storeConfig(data)
    } catch (err) {
      setErrors('saving configs failed:' + JSON.stringify(err))
    } finally {
      setLoading(false)
    }
  })

  const init = async () => {
    try {
      const config = await loadConfig()
      setLoading(false)
      setLoadedConfig(config)
    } catch (err) {
      console.error('init config modal failed:', err)
    }
  }

  useEffect(() => {
    setLoading(true)
    init()
  }, [])

  useEffect(() => {
    if (loadedConfig !== null) {
      reset(loadedConfig)
    }
  }, [loadedConfig])

  const handleBrowse = () => {
    browseDirectory().then(filePath => {
      setValue('hasuraSource', filePath)
    })
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
              <FormControl isRequired isInvalid={!!formErrors.graphqlUri}>
                <FormLabel>Hasura Graphql Url</FormLabel>
                <Input
                  {...register('graphqlUri', {
                    required: 'Graphql URL is required',
                  })}
                />
                <FormErrorMessage>
                  {formErrors.graphqlUri?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!formErrors.graphqlUri}>
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
                  {formErrors.graphqlUri?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={!!formErrors.graphqlUri}>
                <FormLabel>Hasura Admin Secret</FormLabel>
                <Input
                  {...register('secret', {
                    required: 'Hasura Admin Secret is required',
                  })}
                />
                <FormErrorMessage>
                  {formErrors.graphqlUri?.message}
                </FormErrorMessage>
                <FormErrorMessage>
                  {errors}
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
