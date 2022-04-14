import { useState, useEffect, useMemo } from "react";
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
  Input,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { useDebounce } from "react-use";

import ConfigModal from "../components/ConfigModal";

import { fetchRoles } from "../lib/apollo";

import { Config, loadConfig } from "../utils/config";
import { loadCoreUIQueries } from "../utils/parser";
import AssignRoleModal from "../components/AssignRoleModal";

const Launchpad = () => {
  const {
    isOpen: isConfigModalOpen,
    onOpen: onConfigModalOpen,
    onClose: onConfigModalClose,
  } = useDisclosure();
  const {
    isOpen: isAOpen,
    onOpen: onAOpen,
    onClose: onAClose,
  } = useDisclosure();

  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");
  useDebounce(
    () => {
      setDebouncedKeyword(keyword);
    },
    200,
    [keyword]
  );
  const [filePath, setFilePath] = useState("");
  const [config, setConfig] = useState<Config | null>();
  const [isLoading, setLoading] = useState(true);
  const [roleList, setRoleList] = useState<any[]>([]);
  const [queryList, setQueryList] = useState<
    {
      name: string;
      path: string;
    }[]
  >([]);
  const filteredQueryList = useMemo(() => {
    return queryList.filter((item) => item.name.includes(debouncedKeyword));
  }, [debouncedKeyword, queryList]);

  const toast = useToast();

  const initConfig = async () => {
    setLoading(true);
    try {
      const config = await loadConfig();
      setConfig(config);
    } catch (err) {
      toast({
        title: "Error",
        description: "failed to init config: " + JSON.stringify(err),
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const loadRoles = async () => {
    if (config == null) return;
    setLoading(true);
    try {
      const result = await fetchRoles(config?.graphqlUri, config?.secret);
      setRoleList(
        result.map((item) => ({ text: item.name, value: item.name }))
      );
    } catch (err) {
      toast({
        title: "Error",
        description: "failed to load roles: " + JSON.stringify(err),
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const loadUIQueries = async () => {
    if (config == null) return;
    setLoading(true);
    try {
      const queries = await loadCoreUIQueries();
      setQueryList(queries);
    } catch (err) {
      toast({
        title: "Error",
        description: "failed to load UI queries: " + JSON.stringify(err),
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoading && config == null) onConfigModalOpen();
  }, [config, isLoading]);

  useEffect(() => {
    loadRoles();
    loadUIQueries();
  }, [config]);

  useEffect(() => {
    initConfig();
  }, []);

  return (
    <>
      <ConfigModal isOpen={isConfigModalOpen} onClose={onConfigModalClose} />
      <AssignRoleModal
        isOpen={isAOpen}
        onClose={() => {
          onAClose();
          setFilePath("");
        }}
        roleList={roleList}
        filePath={filePath}
      />
      <Box flex={1}>
        <Box h="100vh" overflow="hidden" display="flex" flexDirection="column">
          <Box bg="gray.50" px="6" pt="3" pb="6" shadow="md">
            <HStack justifyContent="space-between">
              <Heading size="lg">Queries & Mutation Parser</Heading>
              <IconButton
                colorScheme="blue"
                aria-label="config"
                onClick={onConfigModalOpen}
                icon={<SettingsIcon />}
              />
            </HStack>
            <Box mt={3}>
              <Input
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
                size="md"
                placeholder="Search Query / Mutation"
              />
            </Box>
          </Box>
          <Box flex={1} overflowY="scroll" px="6">
            <Stack
              py="4"
              spacing={0}
              divider={<Divider borderColor="gray.400" />}
            >
              {filteredQueryList.map((query) => (
                <Box
                  onClick={() => {
                    setFilePath(query.path);
                    onAOpen();
                  }}
                  key={query.name}
                  cursor="pointer"
                  borderLeftWidth="4px"
                  borderStyle="solid"
                  borderLeftColor="transparent"
                  fontWeight="bold"
                  _hover={{
                    color: "blackAlpha.600",
                    borderLeftColor: "blackAlpha.600",
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
      </Box>
    </>
  );
};

export default Launchpad;
