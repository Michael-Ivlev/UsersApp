import { Box, FlatList, Icon } from "native-base";
import React, { ImageSourcePropType, SafeAreaView, View } from "react-native";
import styled from "styled-components/native";
import { useGetUsersQuery } from "../api/users.api";
import UserItem from "../components/UserItem/UserItem";
import { Fab } from "native-base";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  navigation: any; //TODO: fix this any
};

const Main = ({ navigation }: Props) => {
  const { data } = useGetUsersQuery({});

  const DATA = data?.results.map((user) => ({
    id: user.login.uuid,
    title: user.name.title,
    firstName: user.name.first,
    lastName: user.name.last,
    email: user.email,
    location: {
      country: user.location.country,
      city: user.location.city,
      street: user.location.street.name,
    },
    imageUrl: user.picture.medium,
  }));

  return (
    <Container>
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        icon={<Icon color="white" as={AntDesign} name="plus" size="md" />}
        onPress={() => navigation.navigate("AddUser")}
      />
      <FlatList
        style={{ width: "100%" }}
        data={DATA}
        renderItem={({ item }) => <UserItem {...item} />}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Main;
