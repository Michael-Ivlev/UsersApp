import { Button, useToast, ScrollView } from "native-base";
import React from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../components/CustomInput/CustomInput";
import { addUser } from "../store/reducers/userSlice.reducer";
import "react-native-get-random-values";
import { nanoid } from "nanoid";

const AddUser = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const toast = useToast();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
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
        id: nanoid(),
        imageUrl: "https://randomuser.me/api/portraits/med/men/79.jpg",
      })
    );
    toast.show({
      description: "User added successfully",
      placement: "top",
      variant: "solid",
    });
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
      <Button onPress={handleSubmit(onSubmit)} colorScheme="green">
        Add User
      </Button>
    </Container>
  );
};

const Container = styled(ScrollView)``;

export default AddUser;
