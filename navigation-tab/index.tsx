import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoEntry from "../components/Todo/TodoEntry";
import { Ionicons } from "@expo/vector-icons";
import ProfileEntry from "../components/Profile/ProfileEntry";

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Todo"
        component={TodoEntry}
        options={{
          tabBarIcon: (props) => {
            return <Ionicons name="checkbox" {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileEntry}
        options={{
          tabBarIcon: (props) => {
            return <Ionicons name="person" size={24} color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
