import React, { useEffect, FC } from "react";
import { StyleSheet } from "react-native";
import {
  Box,
  Checkbox,
  Text,
  HStack,
  Icon,
  Pressable,
  IconButton,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  item: {
    id: string;
    title: string;
    timeStamp: string;
    completed: boolean;
  };
  changeItem: (id: string) => void;
};

const SingleTodo: FC<Props> = ({ item, changeItem }) => {
  useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <Box bg="#dfdfdf" my={2} p={5} borderRadius="10">
      <HStack alignItems="center" justifyContent="space-between">
        <Box flex={1} flexDir="row" alignItems="center" maxW="85%">
          <Checkbox
            onChange={() => changeItem(item.id)}
            isChecked={item.completed}
            value=""
            accessibilityLabel="todo"
            boxSize="5"
          />
          <Text
            style={item.completed ? styles.todoTextUnderlined : null}
            ml={3}
            fontSize="18"
          >
            {item.title}
          </Text>
        </Box>
        <IconButton
          size={10}
          variant="outlined"
          _icon={{
            color: "#121212",
            size: 8,
            as: MaterialIcons,
            name: "delete",
          }}
          _pressed={{
            borderRadius: 32,
            bg: "coolGray.100:alpha.80",
          }}
        />
      </HStack>
    </Box>
  );
};

export default SingleTodo;

const styles = StyleSheet.create({
  todoTextUnderlined: {
    textDecorationLine: "line-through",
    color: "grey",
    fontStyle: "italic",
  },
});
