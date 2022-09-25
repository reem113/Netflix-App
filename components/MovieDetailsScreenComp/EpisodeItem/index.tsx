import { Image, Pressable } from "react-native";
import { Text, View } from "../../Themed";

import { Episode } from "../../../types";
import { Octicons } from "@expo/vector-icons";
import React from "react";
import styles from "./styles";

interface EpisodeItemProps {
  episodes: Episode;
  onPress: (episode: Episode) => {};
}

const EpisodeItem = (props: EpisodeItemProps) => {
  const { episodes, onPress } = props;
  return (
    <Pressable onPress={() => onPress(episodes)} style={{ marginBottom: 20 }}>
      <View style={styles.rowContainer}>
        <Image style={styles.img} source={{ uri: episodes.poster }} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{episodes.title}</Text>
          <Text style={styles.duration}>{episodes.duration}</Text>
        </View>
        <Octicons
          style={{ marginRight: 12 }}
          name="download"
          size={26}
          color="white"
        />
      </View>
      <Text style={styles.plot}>{episodes.plot}</Text>
    </Pressable>
  );
};

export default EpisodeItem;
