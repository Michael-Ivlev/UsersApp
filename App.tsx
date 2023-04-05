import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { useGetUsersQuery, usersApi } from "./store/api/users.api";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Test from "./components/Test";

export default function App() {
  const store = configureStore({
    reducer: {
      [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersApi.middleware),
  });

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Test />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
