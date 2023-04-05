import { Button, FlatList, Icon, Modal, Spinner, Text } from "native-base";
import React from "react-native";
import styled from "styled-components/native";
import { useGetUsersQuery } from "../store/api/users.api";
import UserItem from "../components/UserItem/UserItem";
import { Fab } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { removeUser } from "../store/reducers/userSlice.reducer";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation.types";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "AddUser">;
};

const Main = ({ navigation }: Props) => {
  const { isLoading } = useGetUsersQuery({});
  const users = useSelector((state: RootState) => state.usersSlice);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState("");

  const handleDeleteClick = (id: string) => {
    setShowModal(true);
    setCurrentId(id);
  };

  return (
    <Container>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Delete User</Modal.Header>
          <Modal.Body>
            <Text>Are you sure you want to delete this user?</Text>{" "}
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setShowModal(false);
              }}
            >
              No
            </Button>
            <Button
              colorScheme="error"
              onPress={() => {
                dispatch(removeUser(currentId));
                setShowModal(false);
              }}
            >
              Yes
            </Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      {isLoading ? (
        <Spinner size="lg" />
      ) : (
        <>
          <Fab
            renderInPortal={false}
            shadow={2}
            size="sm"
            colorScheme="green"
            icon={<Icon color="white" as={AntDesign} name="plus" size="md" />}
            onPress={() => navigation.navigate("AddUser")}
          />
          <FlatList
            style={{ width: "100%" }}
            data={users}
            renderItem={({ item }) => (
              <UserItem {...item} onPress={() => handleDeleteClick(item.id)} />
            )}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export default Main;
