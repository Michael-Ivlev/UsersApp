import React, { ImageSourcePropType, View } from "react-native";
import styled from "styled-components/native";

type Props = {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  location: {
    country: string;
    city: string;
    street: string;
  };
  id: string;
  imageUrl: string;
};

const UserItem = ({
  title,
  firstName,
  lastName,
  email,
  location,
  id,
  imageUrl,
}: Props) => (
  <Container>
    <Text>{title}</Text>
    <Text>{firstName}</Text>
    <Text>{lastName}</Text>
    <Text>{email}</Text>
    <Text>{id}</Text>
    <Image source={{ uri: imageUrl }} />
  </Container>
);

const Container = styled.View``;

const Text = styled.Text``;

const Image = styled.Image`
  width: 50px;
  height: 50px;
`;

export default UserItem;
