import { Dispatch, SetStateAction } from 'react'
import { Stack, Button, Divider, Box, Text } from '@chakra-ui/react'

type SidebarProps = {
  raw: any
  selectedRole: string | undefined
  setSelectedRole: Dispatch<SetStateAction<string | undefined>>
  onOpenAddRole: () => void
}

const Sidebar = ({ raw, selectedRole, onOpenAddRole, setSelectedRole }: SidebarProps) => {
  return (
    <Stack
      bg="gray.800"
      h="100%"
    >
      <Stack px="4" py="2" flexDir="row" justifyContent="space-between">
        <Text fontWeight="bold" fontSize="xl" color="white" my="auto">Roles</Text>
        <Button colorScheme="blue" onClick={onOpenAddRole}>Add</Button>
      </Stack>
      <Stack
        overflowY="scroll"
        spacing={0}
        divider={<Divider borderColor="gray.600" />}
      >
        {Array.from(raw?.AVAILABLE_ROLES ?? [])?.sort().map((role: any) => (
          <Box
            onClick={() => {
              setSelectedRole(role)
            }}
            cursor="pointer"
            borderLeftWidth="4px"
            borderStyle="solid"
            borderLeftColor={
              selectedRole === role ? 'gray.100' : 'transparent'
            }
            color={selectedRole === role ? 'white' : 'whiteAlpha.500'}
            fontWeight="bold"
            _hover={{
              color: 'white',
              borderLeftColor: 'gray.100',
            }}
            key={role}
            px="4"
            py="2"
          >
            <Text>{role}</Text>
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}

export default Sidebar
