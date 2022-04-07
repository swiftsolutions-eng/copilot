import { useMemo } from 'react'
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Stack,
  Text,
  Badge,
} from '@chakra-ui/react'
import _groupBy from 'lodash/groupBy'

const RoleList = (props: { rolesMap?: any[]; selectedRole?: string }) => {
  const { rolesMap, selectedRole } = props
  const selectedData = useMemo(() => {
    return rolesMap?.find((role: any) => role.roleName === selectedRole)
  }, [selectedRole, rolesMap])

  const groupedData = useMemo(() => {
    return _groupBy(selectedData?.tables ?? [], val => val.schema)
  }, [selectedData])

  if (!selectedData) {
    return <Text px="4">Select Role to view</Text>
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

export default RoleList
