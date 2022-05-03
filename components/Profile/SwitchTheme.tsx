import React from "react";
import { Text, HStack, Switch, Box } from "native-base";

type Props = {};

const SwitchTheme = (props: Props) => {
  return (
    <HStack alignItems="center" w="100%" px={8}>
      <Text fontSize="lg">Switch theme: </Text>
      <Switch size="lg" />
    </HStack>
  );
};

export default SwitchTheme;
