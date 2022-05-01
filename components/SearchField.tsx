import React from "react";
import { Box, Heading, Icon, Input, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {};

const SearchField = (props: Props) => {
  return (
    <Box px={8}>
      <VStack w="100%" space={5} alignSelf="center">
        <Input
          placeholder="Görev ara"
          width="100%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="16"
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
          InputRightElement={
            <Icon
              m="2"
              mr="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="mic" />}
            />
          }
        />
      </VStack>
    </Box>
  );
};

export default SearchField;
