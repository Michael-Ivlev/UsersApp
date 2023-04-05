import { Button, HStack } from "native-base";
import React, { ImageSourcePropType, View } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { removeUser } from "../../api/reducers/userSlice.reducer";
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
};

const UserItem = ({
  title,
  firstName,
  lastName,
  email,
  location,
  id,
  imageUrl,
}: Props) => {
  const dispatch = useDispatch();
  return (
    <Container space={2}>
      <Button onPress={() => dispatch(removeUser(id))}>
        <MaterialCommunityIcons name="delete-off" size={24} color="red" />
      </Button>
      <Image source={{ uri: imageUrl }} />
      <UserInfoContainer>
        <Text>{`${title} ${firstName} ${lastName}`}</Text>
        <Text>{email}</Text>
        <Text>{id}</Text>
      </UserInfoContainer>
    </Container>
  );
};

const Container = styled(HStack)`
  border: 3px solid black;
  align-items: center;
`;

const UserInfoContainer = styled.View`
  margin-left: 5px;
  flex-direction: column;
`;

const Text = styled.Text``;

const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

export default UserItem;
