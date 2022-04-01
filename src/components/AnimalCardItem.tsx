import React from "react";
import { useColorModeValue, Badge, Box, Text, Button } from "@chakra-ui/react";

interface AnimalCardItemProps {
  data;
}

export const AnimalCardItem: React.FC<AnimalCardItemProps> = ({ data }) => {
  return (
    <Box
      paddingLeft={5}
      border={"solid"}
      paddingTop={5}
      w="400px"
      rounded="20px"
      overflow="hidden"
      boxShadow="sm"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Badge variant="solid" colorScheme={"purple"} marginRight={2}>
        {data.category}
      </Badge>

      <Badge variant="solid" colorScheme={"messenger"}>
        {data.breedCategory}
      </Badge>
      <Text as="h2" fontWeight="semibold" fontSize="xl" my={2}>
        {data.name !== "null" ? data.name : "Unknown"}
      </Text>
      <Text fontWeight="semibold" fontSize="lg">
        ${data.listPrice}
      </Text>
      <Box textAlign={"center"}>
        <Button
          variant={useColorModeValue("gray.100", "gray.900")}
          size="lg"
          mt={3}
          _hover={{ boxShadow: "md" }}
        >
          Adopt
        </Button>
      </Box>
    </Box>
  );
};

export default AnimalCardItem;
