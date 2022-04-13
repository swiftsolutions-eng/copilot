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
import { useForm, useWatch } from 'react-hook-form'
import FormSelect from '../components/FormSelect'
import { fetchRoles } from '../lib/apollo'
import ConfigModal from '../components/ConfigModal'
import { Config, loadConfig } from '../utils/config'
import { addRoleToQuery } from '../utils/parser'
import { browseFile } from '../utils/service'

type FormDataType = {
  role: string
}

const Launchpad = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [filePath, setFilePath] = useState('')
  const [config, setConfig] = useState<Config | null>()
  const [isLoading, setLoading] = useState(true)
  const [result, setResult] = useState<any[]>([])
  const [roleList, setRoleList] = useState<any[]>([])
  const [errors, setErrors] = useState<any>()

  const { control } = useForm<FormDataType>()

  const selectedRole = useWatch({ control, name: 'role' })

  const formattedPath = useMemo(() => {
    if (!filePath) return ''

    return filePath.match(/\/([^/]+)\/?$/)?.[1]
  }, [filePath])

  const handleSave = async () => {
    try {
      setLoading(true)
      setResult([])
      const res = await addRoleToQuery(filePath, selectedRole)
      setResult(res)
    } catch (err) {
      setErrors('failed to add role: ' + JSON.stringify(err))
    } finally {
      setLoading(false)
    }
  }

  const initConfig = async () => {
    setLoading(true)
    try {
      const config = await loadConfig()
      setConfig(config)
    } catch (err) {
      setErrors('init app failed: ' + JSON.stringify(err))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isLoading && config == null) onOpen()
  }, [config, isLoading])

  useEffect(() => {
    if (!isLoading && config == null) onOpen()
    if (config != null) {
      setLoading(true)
      fetchRoles(config?.graphqlUri, config?.secret)
        .then(result => {
          setRoleList(result.map(item => ({ text: item.name, value: item.name })))
        })
        .catch((err) => {
          setErrors('init app failed: ' + JSON.stringify(err))
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [config])

  useEffect(() => {
    initConfig()
  }, [])

  return (
    <Box
      // {...getRootProps()}
      position="relative"
    >
      <ConfigModal isOpen={isOpen} onClose={onClose} />
      <IconButton
        // position="absolute"
        // top="4"
        // right="4"
        colorScheme="blue"
        aria-label="config"
        onClick={onOpen}
        icon={<SettingsIcon />}
      />
      {/* <Box pointerEvents="none">
        <input {...getInputProps()} />
      </Box> */}
      <Text>test{errors}</Text>
      <Container h="100vh" maxW="container.xl">
        <Stack h="100vh" py="4">
          <Box
            flex={1}
            p="6"
            borderRadius="lg"
            onClick={e => {
              e.preventDefault()
              browseFile().then(filePath => {
                setFilePath(filePath)
              })
            }}
          >
            <Heading>Drag & Drop gql file</Heading>
            <Heading mt={4} size="sm">
              Selected Fileee: {formattedPath}
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
