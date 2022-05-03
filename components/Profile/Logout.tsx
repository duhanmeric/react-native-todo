import React from "react";
import { Box, Button, Text } from "native-base";

type Props = {};

const Logout = (props: Props) => {
  return (
    <Box mb={5}>
      <Button onPress={() => console.log("hello world")}>
        <Text fontSize="lg" color="#fff" px={3}>
          Logout
        </Text>
      </Button>
    </Box>
  );
};

export default Logout;
