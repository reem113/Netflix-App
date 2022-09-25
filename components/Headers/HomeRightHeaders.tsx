import { Pressable, StyleSheet, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeRightHeaders = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("SearchScreen")}>
        <Ionicons
          style={{ marginHorizontal: 12 }}
          name="search"
          size={24}
          color="lightgrey"
        />
      </Pressable>
    </View>
  );
};

export default HomeRightHeaders;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
