import { FlatList, Image, Pressable } from "react-native";

import React from "react";
import { Text } from "../Themed";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      poster: string;
    }[];
  };
}
const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  const navigation = useNavigation();
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        horizontal
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("MovieDetailsScreen");
            }}
          >
            <Image style={styles.img} source={{ uri: item.poster }} />
          </Pressable>
        )}
      />
    </>
  );
};

export default HomeCategory;
