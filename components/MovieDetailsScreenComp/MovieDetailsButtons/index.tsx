import { Entypo, Octicons } from "@expo/vector-icons";
import { Text, View } from "../../Themed";

import { Pressable } from "react-native";
import React from "react";
import styles from "./styles";

const MovieDetailsButtons = () => {
  return (
    <View>
      <Pressable style={styles.playbtn} onPress={() => console.warn("Play")}>
        <Text style={styles.playtxt}>
          <Entypo name="controller-play" size={20} color="black" /> Play
        </Text>
      </Pressable>
      <Pressable
        style={styles.downloadbtn}
        onPress={() => console.warn("Play")}
      >
        <Text style={styles.downloadtxt}>
          <Octicons
            name="download"
            size={18}
            color="lightgrey"
            style={{ marginRight: 5 }}
          />
          {"   "}Download
        </Text>
      </Pressable>
    </View>
  );
};

export default MovieDetailsButtons;
