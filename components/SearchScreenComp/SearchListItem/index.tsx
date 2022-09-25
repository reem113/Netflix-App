import { Image, Pressable, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const SearchListItem = (props: any) => {
  const { movie } = props;
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("MovieDetailsScreen")}
      >
        <View style={styles.infoWrapper}>
          <Image style={styles.img} source={{ uri: movie.poster }} />
          <Text style={styles.name}>{movie.name}</Text>
        </View>
        <AntDesign
          style={{ marginRight: 12 }}
          name="playcircleo"
          size={24}
          color="white"
        />
      </Pressable>
    </View>
  );
};

export default SearchListItem;
