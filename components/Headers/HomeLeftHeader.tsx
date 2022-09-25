import { Image, StyleSheet, View } from "react-native";

import React from "react";

const HomeHeader = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={{
          uri: "https://w0.peakpx.com/wallpaper/656/1013/HD-wallpaper-netflix-logo-netflix-logo-black-red-design.jpg",
        }}
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  logo: {
    width: 25,
    height: 50,
    resizeMode: "contain",
  },
});
