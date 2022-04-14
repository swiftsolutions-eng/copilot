import { useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  Badge,
  Box,
  Button,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
  useToast,
} from "@chakra-ui/react";

import FormSelect from "./FormSelect";

import { addRoleToQuery } from "../utils/parser";

type FormDataType = {
  role: string;
};

interface AssignRoleModalProps extends Omit<ModalProps, "children"> {
  filePath: string;
  roleList: { text: string; value: string }[];
}

const AssignRoleModal = (props: AssignRoleModalProps) => {
  const { filePath, roleList } = props;

  const { control } = useForm<FormDataType>();
  const selectedRole = useWatch({ control, name: "role" });

  const toast = useToast();

  const formattedPath = useMemo(() => {
    if (!filePath) return "";

    return filePath.match(/\/([^/]+)\/?$/)?.[1];
  }, [filePath]);

  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState<any[]>([]);

  const handleSave = async () => {
    try {
      setLoading(true);
      setResult([]);
      const res = await addRoleToQuery(filePath, selectedRole);
      setResult(res);
    } catch (err) {
      toast({
        title: "Error",
        description: "failed to add role: " + JSON.stringify(err),
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal {...props} isCentered size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Role to Query Tables</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box flex={1}>
            <FormSelect
              label="Role"
              placeholder="Select Role"
              control={control}
              name="role"
              options={roleList}
            />
          </Box>
          <Text mt={2}>
            Selected File:{" "}
            <Text as="span" fontWeight="bold">
              {formattedPath}
            </Text>
          </Text>
          {result.length > 0 ? (
            <Box mt="4">
              <Text fontSize="xl" mb={4}>
                <Text as="span" fontWeight="bold" color="pink.600">
                  {selectedRole}
                </Text>{" "}
                successfully added to{" "}
                <Text as="span" fontWeight="bold" color="purple.600">
                  {result.length}
                </Text>{" "}
                tables
              </Text>
              <List>
                {result.map((item) => (
                  <ListItem key={item.schema + "_" + item.name}>
                    table{" "}
                    {item.schema ? (
                      <Badge colorScheme="pink">
                        {item.schema + "_" + item.name}
                      </Badge>
                    ) : (
                      <Badge colorScheme="pink">{item.name}</Badge>
                    )}{" "}
                    with context{" "}
                    <Badge colorScheme="purple">
                      {item.context ?? "No Context"}
                    </Badge>
                  </ListItem>
                ))}
              </List>
            </Box>
          ) : null}
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            onClick={handleSave}
            isLoading={isLoading}
            isDisabled={!filePath || !selectedRole}
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AssignRoleModal;
