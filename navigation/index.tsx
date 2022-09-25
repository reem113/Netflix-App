import * as React from "react";

import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { RootStackParamList, RootTabParamList } from "../types";

import { ColorSchemeName } from "react-native";
import Colors from "../constants/Colors";
import DownloadsScreen from "../screens/DownloadsScreen";
import GamesScreen from "../screens/GamesScreen";
import GetStartedScreen from "../screens/GetStartedScreen";
import HomeHeader from "../components/Headers/HomeLeftHeader";
import HomeRightHeaders from "../components/Headers/HomeRightHeaders";
import HomeScreen from "../screens/HomeScreen/index";
import LinkingConfiguration from "./LinkingConfiguration";
import LoginHeader from "../components/Headers/LoginHeader";
import LoginScreen from "../screens/LoginScreen";
import ModalScreen from "../screens/ModalScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen/index";
import NotFoundScreen from "../screens/NotFoundScreen";
import SearchScreen from "../screens/SearchScreen";
import SignUpScreen from "../screens/SignUpScreen";
import WhoIsWatching from "../screens/WhoIsWatchingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useColorScheme from "../hooks/useColorScheme";

/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="GetStartedScreen">
      <Stack.Screen
        name="GetStartedScreen"
        component={GetStartedScreen}
        options={() => ({
          headerTitle: () => <HomeHeader />,
          headerTransparent: true,
        })}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ title: "", headerStyle: { backgroundColor: "black" } }}
      />
      <Stack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={() => ({
          headerStyle: { backgroundColor: "black" },
          headerTitleContainerStyle: { left: 0 },
          headerTitle: () => <LoginHeader />,
        })}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={() => ({
          headerStyle: { backgroundColor: "black" },
          headerTitleContainerStyle: { left: 0 },
          headerTitle: () => <LoginHeader />,
        })}
      />
      <Stack.Screen
        name="WhoIsWatchingScreen"
        component={WhoIsWatching}
        options={() => ({
          headerStyle: { backgroundColor: "black" },
          headerBackVisible: false,
          headerTitleAlign: "center",
          headerTitle: () => <LoginHeader />,
          headerRight: () => (
            <MaterialIcons name="edit" size={22} color="lightgrey" />
          ),
        })}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: () => <HomeHeader />,
          headerTransparent: true,
          headerRight: () => <HomeRightHeaders />,
          tabBarLabelStyle: { paddingVertical: 5 },
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: { paddingVertical: 5 },
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color}/>
          ),
        }}
      />
      <BottomTab.Screen
        name="Games"
        component={GamesScreen}
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: { fontWeight: "bold", fontSize: 24 },
          tabBarLabelStyle: { paddingVertical: 5 },
          tabBarIcon: ({ color }) => (
            <Ionicons name="game-controller" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={DownloadsScreen}
        options={{
          tabBarLabelStyle: { paddingVertical: 5 },
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: { fontWeight: "bold", fontSize: 24 },
          tabBarIcon: ({ color }) => (
            <AntDesign name="download" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
