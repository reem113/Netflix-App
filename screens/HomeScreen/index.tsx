import { ImageBackground, ScrollView, Text, View } from "react-native";

import HomeCategory from "../../components/HomeCategory";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import categories from "../../assets/data/categories";
import styles from "./styles";

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <ImageBackground
          style={styles.background}
          source={{
            uri: "https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png",
          }}
        >
          <LinearGradient
            style={styles.gradient}
            colors={["transparent", "black", "black"]}
          >
            <Text style={{ color: "white" }}></Text>
          </LinearGradient>
        </ImageBackground>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {categories.items.map((item) => (
          <HomeCategory key={item.id} category={item} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;
