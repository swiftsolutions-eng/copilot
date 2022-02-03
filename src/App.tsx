import { useEffect, useState, useMemo } from 'react'
import {
  Text,
  Box,
  Stack,
  Divider,
  Heading,
  Badge,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useDisclosure,
} from '@chakra-ui/react'
import _groupBy from 'lodash/groupBy'
import AddPermissionModal from './AddPermissionModal'

export function App() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [raw, setRaw] = useState<any>()
  const [selectedRole, setSelectedRole] = useState<string | undefined>(
    'super_user'
  )

  useEffect(() => {
    window.Main.sendMessage('fetch-raw')

    window.Main.on('fetch-raw-resolved', (data: any) => {
      setRaw(data)
    })
  }, [])

  return (
    <>
      <AddPermissionModal
        selectedRole={selectedRole}
        raw={raw}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Box h="100vh">
        <Stack flexDir="row" h="100%">
          <Stack
            spacing={0}
            divider={<Divider borderColor="gray.600" />}
            bg="gray.800"
            h="100%"
          >
            {Array.from(raw?.AVAILABLE_ROLES ?? [])?.map((role: any) => (
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
                <Button colorScheme="blue" onClick={onOpen}>
                  Add Permission
                </Button>
              </Stack>
              <Box flex={1} overflowY="scroll">
                <TableList
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

const TableList = (props: { rolesMap?: any[]; selectedRole?: string }) => {
  const { rolesMap, selectedRole } = props
  const selectedData = useMemo(() => {
    return rolesMap?.find((role: any) => role.roleName === selectedRole)
  }, [selectedRole, rolesMap])

  const groupedData = useMemo(() => {
    return _groupBy(selectedData?.tables ?? [], val => val.schema)
  }, [selectedData])

  if (!selectedData) {
    return <Text>Select Role to view</Text>
  }

  return (
    <Box px="4" pb="6">
      <Accordion allowToggle>
        {Object.keys(groupedData).map(gkey => (
          <AccordionItem key={gkey}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {gkey} (
                  <Text as="span" fontWeight="bold">
                    {groupedData[gkey].length}
                  </Text>
                  )
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel bg="gray.200" pb={4}>
              <Stack spacing={2}>
                {groupedData[gkey]?.map((table: any) => (
                  <Box
                    display="flex"
                    flexDir="row"
                    bg="white"
                    alignItems="center"
                    justifyContent="space-between"
                    key={`${table.schema}_${table.name}`}
                    w="full"
                    p="2"
                  >
                    <Text fontWeight="bold">
                      {table.schema}_{table.name}
                    </Text>
                    <Box
                      display="flex"
                      flexDir="row"
                      alignItems="center"
                      columnGap={1}
                    >
                      {table?.permission?.allow_aggregations ? (
                        <Box>
                          <Badge colorScheme="blue">Aggregation</Badge>
                        </Box>
                      ) : null}
                      {table?.permission?.filter?.company_id ? (
                        <Box>
                          <Badge colorScheme="pink">Company</Badge>
                        </Box>
                      ) : null}
                      {table?.permission?.filter?.warehouse_id ? (
                        <Box>
                          <Badge colorScheme="orange">Warehouse</Badge>
                        </Box>
                      ) : null}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}
