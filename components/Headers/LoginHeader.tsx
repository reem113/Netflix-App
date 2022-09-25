import { Image, StyleSheet, View } from "react-native";

import React from "react";

const LoginHeader = () => {
  return (
    <View>
      <Image
        style={{ width: 70, height: 60, resizeMode: "cover" }}
        source={{
          uri: "https://i.pinimg.com/originals/08/68/dc/0868dcacc7c50ca2c7d35b27be81e5a9.png",
        }}
      />
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({});
