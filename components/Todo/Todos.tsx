import React from "react";
import { Box, FlatList } from "native-base";
import SingleTodo from "./SingleTodo";
import { useState } from "react";
import { useEffect } from "react";

type Props = {};

const Todos = (props: Props) => {
  const [todos, setTodos] = useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Make a markdown editor",
      timeStamp: "12:47 PM",
      completed: false,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Develop a note taking app with markdown editor",
      timeStamp: "11:11 PM",
      completed: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Learn Expo",
      timeStamp: "6:22 PM",
      completed: true,
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      title: "Learn Nativebase",
      timeStamp: "8:56 PM",
      completed: false,
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      title: "Be millionaire! 💸",
      timeStamp: "12:47 PM",
      completed: false,
    },
  ]);

  const changeItem = (id: string) => {
    let updatedTodos = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, completed: !todo.completed }
        : { ...todo };
    });
    setTodos(updatedTodos);
  };

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
