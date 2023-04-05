import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "react-native-get-random-values";

import { NavigationContainer } from "@react-navigation/native";
import { usersApi } from "./src/api/users.api";
import Main from "./src/screens/Main";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddUser from "./src/screens/AddUser";
import { NativeBaseProvider } from "native-base";

export default function App() {
  const store = configureStore({
    reducer: {
      [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersApi.middleware),
  });

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider store={store}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Main} />
            <Stack.Screen name="AddUser" component={AddUser} />
          </Stack.Navigator>
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
