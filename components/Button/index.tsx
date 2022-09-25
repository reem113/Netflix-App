import { ActivityIndicator, Pressable, Text } from "react-native";

import React from "react";
import styles from "./styles";

const Button = (props: any) => {
  const { onPress, loading, btnText } = props;
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      {loading ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <Text style={styles.txt}>{btnText}</Text>
      )}
    </Pressable>
  );
};

export default Button;
