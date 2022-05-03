import React from "react";
import { Box, Text, Image, HStack, VStack } from "native-base";

type Props = {};

const UserBadge = (props: Props) => {
  return (
    <Box px={8} py={5} width="100%">
      <HStack justifyContent="space-between">
        <Box>
          <HStack alignItems="center">
            <Image
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt="Alternate Text"
              size="md"
              borderRadius="full"
            />
            <VStack>
              <Text fontWeight="bold" fontSize="lg" ml={5}>
                Meriç Korkmaz
              </Text>
              <Text fontSize="md" ml={5}>
                Successful
              </Text>
            </VStack>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default UserBadge;
