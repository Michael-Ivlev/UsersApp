import React, { FlatList, ImageSourcePropType, View } from "react-native";
import styled from "styled-components/native";
import { useGetUsersQuery } from "../api/users.api";
import UserItem from "../components/UserItem/UserItem";

const Main = () => {
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
      <FlatList
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
