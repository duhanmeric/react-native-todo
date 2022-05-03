import React from "react";
import { Box, Center, FlatList, HStack, VStack } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import UserBadge from "../UserBadge";
import SuccessCard from "../SuccessCard";
import SwitchTheme from "../SwitchTheme";
import Logout from "../Logout";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

const ProfileEntry = (props: Props) => {
  const cards = [
    {
      id: 0,
      title: "Success Rate",
      rate: "75%",
      description: "1/3 completed tasks",
    },
    {
      id: 1,
      title: "Another thing",
      rate: "25%",
      description: "2/3 uncompleted",
    },
    {
      id: 2,
      title: "One More",
      rate: "25%",
      description: "15 tasks today",
    },
    {
      id: 3,
      title: "Second More",
      rate: "50%",
      description: "7 tasks left",
    },
  ];

  return (
    <Center flex={1} pt={60} justifyContent="space-between">
      <UserBadge />
      <SwitchTheme />
      <HStack px={3} py={3} justifyContent="space-between" alignItems="center">
        <FlatList
          numColumns={2}
          data={cards}
          renderItem={({ item }) => <SuccessCard item={item} />}
        />
      </HStack>
      <Logout />
    </Center>
  );
};

export default ProfileEntry;
