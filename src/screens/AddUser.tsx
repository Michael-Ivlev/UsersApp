import {
  Box,
  FormControl,
  Text,
  WarningOutlineIcon,
  Button,
} from "native-base";
import React, { TextInput } from "react-native";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import { RootState } from "../store/store";
import { useForm, FormProvider, Controller } from "react-hook-form";
import CustomInput from "../components/Input/Input";
import { addUser } from "../api/reducers/userSlice.reducer";

const AddUser = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      addUser({
        title: data.title,
        firstName: data.firstname,
        lastName: data.lastname,
        email: data.email,
        location: {
          country: data.country,
          city: data.city,
          street: data.street,
        },
        id: "string",
        imageUrl: "https://randomuser.me/api/portraits/med/men/79.jpg",
      })
    );
  };

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
      <CustomInput
        name="firstname"
        control={control}
        rules={textInputRules("firstname")}
        errorMessage={String(errors.firstname?.message)}
      />
      <CustomInput
        name="lastname"
        control={control}
        rules={textInputRules("lastname")}
        errorMessage={String(errors.lastname?.message)}
      />
      <CustomInput
        name="email"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Email is required",
          },
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Please enter a valid email address",
          },
        }}
        errorMessage={String(errors.email?.message)}
      />
      <CustomInput
        name="title"
        control={control}
        rules={textInputRules("title")}
        errorMessage={String(errors.title?.message)}
      />
      <CustomInput
        name="city"
        control={control}
        rules={textInputRules("city")}
        errorMessage={String(errors.city?.message)}
      />
      <CustomInput
        name="country"
        control={control}
        rules={textInputRules("country")}
        errorMessage={String(errors.country?.message)}
      />
      <CustomInput
        name="street"
        control={control}
        rules={textInputRules("street")}
        errorMessage={String(errors.street?.message)}
      />
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </Container>
  );
};

const Container = styled(Box)`
  flex: 1;
`;

export default AddUser;
