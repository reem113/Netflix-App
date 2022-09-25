import { Image, Pressable } from "react-native";
import { Text, View } from "../../components/Themed";

import React from "react";
import { StyleSheet } from "react-native";

const DownloadsScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Introducing Downloads for You</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>
        We'll download a personalized selection of movies and shows for you, so
        there's always something to watch on your phone
      </Text>
      <Image
        style={styles.img}
        source={{
          uri: "https://www.whats-on-netflix.com/wp-content/uploads/2022/09/netflix-tudum-2022-lineup-revealed.jpg",
        }}
      />
      <Pressable
        style={styles.btn}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text style={styles.btnText}>Find More To Download</Text>
      </Pressable>
    </View>
  );
};

export default DownloadsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  img: {
    width: 300,
    height: 300,
    marginVertical: 20,
    borderRadius: 150,
    justifyContent: "center",
    alignSelf: "center",
  },
  txt: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
    color: "#ffffffcc",
  },
  btn: {
    backgroundColor: "#e30505",
    padding: 25,
    borderRadius: 5,
  },
  btnText: {
    color: "#ffffffcc",
    fontSize: 24,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
