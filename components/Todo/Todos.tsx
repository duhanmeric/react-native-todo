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
  searchInput: string;
};

const Todos = ({ todos, changeItem, searchInput }: Props) => {
  const filteredData = todos.filter((todo) => {
    if (searchInput === "") return todo;
    return todo.title.toLowerCase().includes(searchInput);
  });

  return (
    <Box flex={1} w="100%" px={8} my={2}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={filteredData}
        renderItem={({ item }) => (
          <SingleTodo changeItem={changeItem} item={item} />
        )}
      />
    </Box>
  );
};

export default Todos;
