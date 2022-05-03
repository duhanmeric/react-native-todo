import React from "react";
import { Box, Text, VStack } from "native-base";

type Props = {
  item: {
    id: number;
    title: string;
    rate: string;
    description: string;
  };
};

const SuccessCard = ({ item }: Props) => {
  return (
    <Box m={2} bg="#dedede" minH="175" flex={1} py={3} borderRadius={18}>
      <Text fontWeight="bold" fontSize="md" textAlign="center">
        {item.title}
      </Text>
      <VStack justifyContent="center" alignItems="center" flex={1}>
        <Box>
          <Text fontSize="5xl">{item.rate}</Text>
        </Box>
        <Box mt={2}>
          <Text fontSize="md" textAlign="center">
            {item.description}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default SuccessCard;
