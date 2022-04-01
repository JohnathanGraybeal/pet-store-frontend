import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, useColorModeValue, Text } from "@chakra-ui/react";
import React from "react";

interface MerchandiseCardItemProps {
  data;
}

export const MerchandiseCardItem: React.FC<MerchandiseCardItemProps> = ({
  data,
}) => {
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
      <Badge variant="solid" colorScheme={"purple"}>
        {data.categoryId}
      </Badge>
      <Text as="h2" fontWeight="semibold" fontSize="xl" my={2}>
        {data.description}
      </Text>
      <Text fontWeight="semibold" fontSize="lg">
        ${data.listPrice}
      </Text>
      <Text fontWeight="semibold" fontSize="lg">
        In Stock: {data.quantityOnHand}
      </Text>
      <Box>
        <Box as="span">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </Box>

        <Text as="h3" fontSize={"lg"} fontWeight="semibold">
          {Math.floor(Math.random() * 100)} Reviews
        </Text>
      </Box>

      <Box textAlign={"center"}>
        <Button
          variant={useColorModeValue("gray.100", "gray.900")}
          size="lg"
          mt={3}
          _hover={{ boxShadow: "md" }}
        >
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};
export default MerchandiseCardItem;
