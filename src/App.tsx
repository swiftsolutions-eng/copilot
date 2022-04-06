import { useEffect, useState } from 'react'
import {
  Text,
  Box,
  Stack,
  Heading,
  Button,
  Image,
  useDisclosure,
} from '@chakra-ui/react'
import _groupBy from 'lodash/groupBy'
import AddPermissionModal from './AddPermissionModal'
import MergeRoleModal from './MergeRoleModal'
import RoleList from './RoleList'

import Sidebar from './Sidebar'
import AddRoleModal from './AddRoleModal'

export function App() {
  const {
    isOpen: isOpenAddPermission,
    onClose: onCloseAddPermission,
    onOpen: onOpenAddPermission,
  } = useDisclosure()
  const {
    isOpen: isOpenMerge,
    onClose: onCloseMerge,
    onOpen: onOpenMerge,
  } = useDisclosure()
  const {
    isOpen: isOpenAddRole,
    onClose: onCloseAddRole,
    onOpen: onOpenAddRole,
  } = useDisclosure()
  const [isAppReady, setReady] = useState(false)
  const [raw, setRaw] = useState<any>()
  const [selectedRole, setSelectedRole] = useState<string | undefined>(
    'user'
  )

  console.log(raw)

  useEffect(() => {
    window.Main.on('is-ready', setReady)
  }, [])

  useEffect(() => {
    if (isAppReady) {
      window.Main.sendMessage('fetch-raw')

      window.Main.on('fetch-raw-resolved', (data: any) => {
        setRaw(data)
      })
    }
  }, [isAppReady])

  if (!isAppReady) {
    return (
      <Stack h="100vh" w="100vw">
        <Box>
          <Text textAlign="center">Here's how to find metadata source:</Text>
          <Image
            mx="auto"
            h="sm"
            src={folderSelectionImage}
            alt="Select 'warmindo > hasura > metadata > databases > default > tables' folder"
          />
        </Box>
        <Stack alignItems="center">
          <Button
            colorScheme="pink"
            size="lg"
            onClick={() => {
              window.Main.sendMessage('choose-source')
            }}
          >
            Browse Metadata Source
          </Button>
        </Stack>
      </Stack>
    )
  }

  return (
    <>
      <AddPermissionModal
        selectedRole={selectedRole}
        raw={raw}
        isOpen={isOpenAddPermission}
        onClose={onCloseAddPermission}
      />
      <MergeRoleModal
        selectedRole={selectedRole}
        raw={raw}
        isOpen={isOpenMerge}
        onClose={onCloseMerge}
      />
      <Box h="100vh">
        <Stack flexDir="row" h="100%">
          <Sidebar {...{ raw, selectedRole, onOpenAddRole, setSelectedRole }} />
          <Box flex={1}>
            <Stack h="100%">
              <Stack
                px="4"
                mb="1"
                flexDir="row"
                justify="space-between"
                align="center"
              >
                <Heading size="md">{selectedRole}</Heading>
                <Box display="flex" flexDirection="row">
                  <Button colorScheme="purple" mr="2" onClick={onOpenMerge}>
                    Merge Role
                  </Button>
                  <Button colorScheme="blue" onClick={onOpenAddPermission}>
                    Add Permission
                  </Button>
                </Box>
              </Stack>
              <Box flex={1} overflowY="scroll">
                <RoleList
                  rolesMap={raw?.rolesMap}
                  selectedRole={selectedRole}
                />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  )
}
