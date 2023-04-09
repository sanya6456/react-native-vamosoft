import React from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import Dashboard from "../screens/dashboard";
import DetailPriorityTask from "../screens/detail-priority-task";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  const navigationRef = useNavigationContainerRef();
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent";

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Dashboard"
        activeColor="#006EE9"
        inactiveColor="#ABCEF5"
        barStyle={{
          backgroundColor: "white",
          shadowRadius: 20,
          shadowOffset: { width: 0, height: -1 },
          shadowColor: "#006ee91a",
        }}
        labeled={false}
        theme={theme}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="calendar-outline"
                color={color}
                size={26}
              />
            ),
          }}
          name="DetailPriorityTask"
          component={DetailPriorityTask}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="face-man-profile"
                color={color}
                size={26}
              />
            ),
          }}
          name="Profile"
          component={View}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
