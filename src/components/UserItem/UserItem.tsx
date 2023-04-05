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
    <Image source={{ uri: imageUrl }} />
    <UserInfoContainer>
      <Text>{title}</Text>
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
      <Text>{id}</Text>
    </UserInfoContainer>
  </Container>
);

const Container = styled.View`
  border: 3px solid black;
  flex-direction: row;
`;

const UserInfoContainer = styled.View`
  flex-direction: column;
`;

const Text = styled.Text``;

const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

export default UserItem;
