import React, { Text, View } from "react-native";
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import { FormControl, Input } from "native-base";

type Props = {
  control: Control<FieldValues, any>;
  name: string;
  rules: RegisterOptions;
  errorMessage?: string;
};

const CustomInput = ({ control, name, rules, errorMessage }: Props) => {
  return (
    <FormControl isInvalid={errorMessage !== "undefined"}>
      <FormControl.Label>{name.toUpperCase()}</FormControl.Label>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder={name}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
        rules={rules}
        defaultValue=""
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default CustomInput;
