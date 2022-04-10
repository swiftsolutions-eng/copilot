import { useState, useEffect, useCallback, useMemo } from 'react'
import {
  Text,
  Container,
  Button,
  IconButton,
  Box,
  Heading,
  Stack,
  useDisclosure,
  List,
  ListItem,
  Badge,
} from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'
import { useDropzone } from 'react-dropzone'
import { useForm, useWatch } from 'react-hook-form'
import FormSelect from '../components/FormSelect'
import { fetchRoles } from '../lib/apollo'
import ConfigModal from '../components/ConfigModal'

type Config = {
  secret: string
  graphqlUri: string
  hasuraSource: string
}

type FormDataType = {
  role: string
}

const Launchpad = () => {
  const [filePath, setFilePath] = useState('')
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]
    setFilePath(file.path)
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  const [config, setConfig] = useState<{
    value: Config | null
    isLoading: boolean
  }>({
    value: null,
    isLoading: true,
  })
  const [isLoading, setLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [result, setResult] = useState<any[]>([])
  const [roleList, setRoleList] = useState<any[]>([])
  const { control } = useForm<FormDataType>()
  const selectedRole = useWatch({ control, name: 'role' })
  const formattedPath = useMemo(() => {
    if (!filePath) return ''

    return filePath.match(/\/([^/]+)\/?$/)?.[1]
  }, [filePath])

  const handleSave = () => {
    setLoading(true)
    setResult([])
    window.Main.sendMessage('add-role-to-query', {
      sourceFile: filePath,
      role: selectedRole,
    })
  }

  useEffect(() => {
    if (!config.isLoading && config.value === null) {
      onOpen()
    }
  }, [config])

  useEffect(() => {
    if (config.value !== null) {
      fetchRoles(config.value.graphqlUri, config.value.secret).then(result => {
        setRoleList(result.map(item => ({ text: item.name, value: item.name })))
      })
    }
  }, [config.value])

  useEffect(() => {
    window.Main.sendMessage('load-config')
    window.Main.on('load-config-resolved', (result: any) => {
      setConfig({
        isLoading: false,
        value: result,
      })
    })
    window.Main.on('add-role-to-query-resolved', (res: any) => {
      setResult(res)
      setLoading(false)
    })
    window.Main.on('add-role-to-query-rejected', (error: any) => {
      console.log(error)
      setLoading(false)
    })
    window.Main.on('browse-file-reply', setFilePath)
  }, [])

  return (
    <Box
      {...getRootProps()}
      onClick={e => {
        e.preventDefault()
      }}
      position="relative"
    >
      <ConfigModal isOpen={isOpen} onClose={onClose} />
      <IconButton
        position="absolute"
        top="4"
        right="4"
        colorScheme="blue"
        aria-label="config"
        onClick={onOpen}
        icon={<SettingsIcon />}
      />
      <Box pointerEvents="none">
        <input {...getInputProps()} />
      </Box>
      <Container h="100vh" maxW="container.xl">
        <Stack h="100vh" py="4">
          <Box flex={1} p="6" borderRadius="lg">
            <Heading>Drag & Drop gql file</Heading>
            <Heading mt={4} size="sm">
              Selected File: {formattedPath}
            </Heading>
            {result.length > 0 ? (
              <Box mt="4">
                <Text fontSize="xl">
                  <Text as="span" fontWeight="bold" color="pink.600">
                    {selectedRole}
                  </Text>{' '}
                  successfully added to{' '}
                  <Text as="span" fontWeight="bold" color="purple.600">
                    {result.length}
                  </Text>{' '}
                  tables
                </Text>
                <List>
                  {result.map(item => (
                    <ListItem key={item.schema + '_' + item.name}>
                      table{' '}
                      <Badge colorScheme="pink">
                        {item.schema + '_' + item.name}
                      </Badge>{' '}
                      with context{' '}
                      <Badge colorScheme="purple">
                        {item.context ?? 'No Context'}
                      </Badge>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ) : null}
          </Box>
          <Stack
            borderColor="gray.800"
            borderWidth={1}
            direction="row"
            p="4"
            borderRadius="lg"
          >
            <Box flex={1}>
              <FormSelect
                placeholder="Select Role"
                control={control}
                name="role"
                options={roleList}
              />
            </Box>
            <Button
              colorScheme="blue"
              onClick={handleSave}
              isLoading={isLoading}
              isDisabled={!filePath || !selectedRole}
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Launchpad
