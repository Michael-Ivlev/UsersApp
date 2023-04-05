import React, { Text, View } from "react-native";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import { Input } from "native-base";
import { isEmpty, isUndefined } from "lodash";

type Props = {
  control: Control<FieldValues, any>;
  name: string;
  rules: RegisterOptions;
  errorMessage?: string;
};

const CustomInput = ({ control, name, rules, errorMessage }: Props) => {
  return (
    <View>
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
      {errorMessage !== "undefined" && <Text>{errorMessage}</Text>}
    </View>
  );
};

export default CustomInput;
