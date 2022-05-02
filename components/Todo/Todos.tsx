import React from "react";
import { Box, FlatList } from "native-base";
import SingleTodo from "./SingleTodo";

type Props = {
  todos: {
    id: string;
    title: string;
    timeStamp: string | Date;
    completed: boolean;
  }[];
  changeItem: (type: string, id: string) => void;
};

const Todos = ({ todos, changeItem }: Props) => {
  console.log(todos);

  return (
    <Box flex={1} w="100%" px={8} my={5}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={todos}
        renderItem={({ item }) => (
          <SingleTodo changeItem={changeItem} item={item} />
        )}
      />
    </Box>
  );
};

export default Todos;
