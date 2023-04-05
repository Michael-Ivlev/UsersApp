import { Provider } from "react-redux";
import "react-native-get-random-values";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./src/screens/Main";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddUser from "./src/screens/AddUser";
import { NativeBaseProvider } from "native-base";
import { store } from "./src/store/store";

export default function App() {
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
