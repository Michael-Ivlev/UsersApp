import { Box, HStack, Text } from "native-base";
import React from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
  onPress: (id: string) => void;
};

const UserItem = ({
  title,
  firstName,
  lastName,
  email,
  location,
  id,
  imageUrl,
  onPress,
}: Props) => {
  return (
    <Container>
      <MaterialCommunityIcons
        name="delete-off"
        size={24}
        color="red"
        onPress={() => onPress(id)}
      />
      {imageUrl && <Image source={{ uri: imageUrl }} />}
      <TextContainer>
        <Text>{`Name: ${title} ${firstName} ${lastName}`}</Text>
        <Text>{`Email: ${email}`}</Text>
        <Text>{`Adress: ${location.street} ${location.city} ${location.country}`}</Text>
        <Text>{`Id: ${id}`}</Text>
      </TextContainer>
    </Container>
  );
};

const Container = styled.View`
  border: 3px solid rgb(221, 221, 221);
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const TextContainer = styled.View`
  margin-left: 5px;
  flex-direction: column;
  max-width: 250px;
`;

const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

export default UserItem;
