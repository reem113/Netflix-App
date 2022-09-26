import { Text, TextInput, View } from "react-native";

import React from "react";
import styles from "./styles";

interface InputProps {
  placeholder: string;
  value: string;
  error: string;
  onChangeText: () => {};
  secureTextEntry: any;
  keyboard:any;
  contentText:any
}

const Input = (props: InputProps) => {
  const { placeholder, value, error, onChangeText, secureTextEntry, keyboard,contentText } = props;
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={"#c8c8c8"}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        keyboardType={keyboard}
        textContentType={contentText}
      />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default Input;
