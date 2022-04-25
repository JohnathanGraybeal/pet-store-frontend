import React from "react";
import { useColorModeValue, Center, Badge, Box, Text, Button, Collapse, useDisclosure } from "@chakra-ui/react";
import { AdoptionForm } from "../components/adoptionForm";

interface AnimalCardItemProps {
  data;
}

export const AnimalCardItem: React.FC<AnimalCardItemProps> = ({ data }) => {
  const { isOpen, onToggle } = useDisclosure()
  var styles = {
    formStyle: {
        backgroundImage: useColorModeValue("linear-gradient(#EDF2F7, skyblue)", "linear-gradient(#171923, #17194B)"),
    },
  }

  return (
    <Box
      border={"solid"}
      paddingTop={5}
      w="400px"
      rounded="20px"
      overflow="hidden"
      boxShadow="sm"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Badge marginLeft={5} variant="solid" colorScheme={"purple"} marginRight={2}>
        {data.category}
      </Badge>

      <Badge variant="solid" colorScheme={"messenger"}>
        {data.breedCategory}
      </Badge>
      <Text marginLeft={5} as="h2" fontWeight="semibold" fontSize="xl" my={2}>
        {data.name !== "null" ? data.name : "Unknown"}
      </Text>
      <Text marginLeft={5} fontWeight="semibold" fontSize="lg">
        ${data.listPrice}
      </Text>
        <Center><Button
          
          variant={useColorModeValue("gray.100", "gray.900")}
          size="lg"
          mt={3}
          _hover={{ boxShadow: "md" }}
          onClick={onToggle}
        >
          Adopt
        </Button>
        </Center>
        <Collapse style={styles.formStyle} in={isOpen}>
          <AdoptionForm  animalID={data.id} animalName={data.name}></AdoptionForm>
        </Collapse>
    </Box>
  );
};

export default AnimalCardItem;
