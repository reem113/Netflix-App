import { Text, View } from "../../components/Themed";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";

const GamesScreen = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        style={{}}
        name="md-game-controller-outline"
        size={200}
        color="lightgrey"
      />
      <Text>Get Ready For Fun Challenges and Unique Online Gameplay Soon</Text>
    </View>
  );
};

export default GamesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
