import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box, Center, Modal } from "native-base";
import SearchField from "./components/SearchField";
import FloatingButton from "./components/FloatingButton";
import Todos from "./components/Todo/Todos";
import AddTodo from "./components/Todo/AddTodo";
import { useState } from "react";

type Props = {
  id: string;
  title: string;
  timeStamp: string | Date;
  completed: boolean;
}[];

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [todos, setTodos] = useState<Props>([
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

  const handleModal = (value: boolean) => {
    setShowModal(value);
  };

  const receiveNewTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: (Math.random() * 1000).toString(),
        completed: false,
        timeStamp: new Date(),
        title,
      },
    ]);
    console.log(title);
  };

  const changeItem = (type: string, id: string) => {
    switch (type) {
      case "completed":
        let updatedTodos = todos.map((todo) => {
          return todo.id === id
            ? { ...todo, completed: !todo.completed }
            : { ...todo };
        });
        setTodos(updatedTodos);
        break;
      case "delete":
        let deletedTodos = todos.filter((todo) => {
          return todo.id !== id;
        });
        setTodos(deletedTodos);
        break;
      default:
        break;
    }
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} pt={60} justifyContent="flex-start">
        <SearchField />
        <Todos todos={todos} changeItem={changeItem} />
        <AddTodo
          receiveNewTodo={receiveNewTodo}
          showModal={showModal}
          handleModal={handleModal}
        />
        <FloatingButton handleModal={handleModal} />
      </Center>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
