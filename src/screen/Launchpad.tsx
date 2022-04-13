import { useState, useEffect, useMemo } from 'react'
import {
  Text,
  IconButton,
  Box,
  Heading,
  Stack,
  useDisclosure,
  Divider,
  HStack,
  useToast,
} from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'
import { useForm, useWatch } from 'react-hook-form'

import ConfigModal from '../components/ConfigModal'

import { fetchRoles } from '../lib/apollo'

import { Config, loadConfig } from '../utils/config'
import { addRoleToQuery, loadCoreUIQueries } from '../utils/parser'
import AssignRoleModal from '../components/AssignRoleModal'

const Launchpad = () => {
  const { isOpen: isConfigModalOpen, onOpen: onConfigModalOpen, onClose: onConfigModalClose } = useDisclosure()
  const { isOpen: isAOpen, onOpen: onAOpen, onClose: onAClose } = useDisclosure()

  const [filePath, setFilePath] = useState('')
  const [config, setConfig] = useState<Config | null>()
  const [isLoading, setLoading] = useState(true)
  const [roleList, setRoleList] = useState<any[]>([])
  const [queryList, setQueryList] = useState<any[]>([])

  const toast = useToast()

  const initConfig = async () => {
    setLoading(true)
    try {
      const config = await loadConfig()
      setConfig(config)
    } catch (err) {
      toast({
        title: 'Error',
        description: 'failed to init config: ' + JSON.stringify(err),
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  const loadRoles = async () => {
    if (config == null) return
    setLoading(true)
    try {
      const result = await fetchRoles(config?.graphqlUri, config?.secret)
      setRoleList(result.map(item => ({ text: item.name, value: item.name })))
    } catch (err) {
      toast({
        title: 'Error',
        description: 'failed to load roles: ' + JSON.stringify(err),
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  const loadUIQueries = async () => {
    if (config == null) return
    setLoading(true)
    try {
      const queries = await loadCoreUIQueries()
      setQueryList(queries)
    } catch (err) {
      toast({
        title: 'Error',
        description: 'failed to load UI queries: ' + JSON.stringify(err),
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isLoading && config == null) onConfigModalOpen()
  }, [config, isLoading])

  useEffect(() => {
    loadRoles()
    loadUIQueries()
  }, [config])

  useEffect(() => {
    initConfig()
  }, [])

  return (
    <>
      <ConfigModal isOpen={isConfigModalOpen} onClose={onConfigModalClose} />
      <AssignRoleModal
        isOpen={isAOpen}
        onClose={() => {onAClose();setFilePath('')}}
        roleList={roleList}
        filePath={filePath}
      />
      <Box flex={1} color="black">
        <Box h="100%" p="4">
          <HStack justifyContent="space-between">
            <Heading size="lg">
              Queries
            </Heading>
            <IconButton
              colorScheme="blue"
              aria-label="config"
              onClick={onConfigModalOpen}
              icon={<SettingsIcon />}
            />
          </HStack>
          <Stack
            overflowY="scroll"
            spacing={0}
            divider={<Divider borderColor="gray.600" />}
          >
            {queryList.map((query) => (
              <Box
                onClick={() => {
                  setFilePath(query.path)
                  onAOpen()
                }}
                key={query.name}
                cursor="pointer"
                borderLeftWidth="4px"
                borderStyle="solid"
                color="blackAlpha.700"
                borderLeftColor="transparent"
                fontWeight="bold"
                _hover={{
                  color: 'blackAlpha.800',
                  borderLeftColor: 'blackAlpha.800',
                }}
                px="4"
                py="2"
              >
                <Text>{query.name}</Text>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default Launchpad
