import { Box, Button, FlatList, Icon, Spinner } from "native-base";
import React, { ImageSourcePropType, SafeAreaView, View } from "react-native";
import styled from "styled-components/native";
import { useGetUsersQuery } from "../api/users.api";
import UserItem from "../components/UserItem/UserItem";
import { Fab } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useForm } from "react-hook-form";
import CustomInput from "../components/Input/Input";
import { editUser } from "../api/reducers/userSlice.reducer";

type Props = {
  navigation: any; //TODO: fix this any
};

const Main = ({ navigation }: Props) => {
  const { isLoading } = useGetUsersQuery({});
  const users = useSelector((state: RootState) => state.usersSlice);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const textInputRules = (name: string) => ({
    required: {
      value: true,
      message: `${name} is required`,
    },
    minLength: {
      value: 3,
      message: "Please enter more then 3 letters",
    },
  });

  return (
    <Container>
      {isLoading ? (
        <Spinner size="lg" />
      ) : (
        <>
          <Fab
            renderInPortal={false}
            shadow={2}
            size="sm"
            icon={<Icon color="white" as={AntDesign} name="plus" size="md" />}
            onPress={() => navigation.navigate("AddUser")}
          />
          <FlatList
            style={{ width: "100%" }}
            data={users}
            renderItem={({ item }) => <UserItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default Main;
