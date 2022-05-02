import React from "react";
import { Box, Fab, Icon, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  handleModal: (value: boolean) => void;
};

const FloatingButton = ({ handleModal }: Props) => {
  return (
    <Fab
      onPress={() => handleModal(true)}
      mb={8}
      mr={2}
      icon={<Icon size="2xl" color="white" as={<MaterialIcons name="add" />} />}
    ></Fab>
  );
};

export default FloatingButton;
