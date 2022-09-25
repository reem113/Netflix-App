import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text } from "../../components/Themed";
import styles from "./styles";

const GetStartedScreen = (props: any) => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.background}
        source={{
          uri: "https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png",
        }}
      >
        <View>
          <LinearGradient
            style={styles.gradient}
            colors={["transparent", "black", "black"]}
          >
            <Text style={styles.sloganbold}>
              Unlimited movies,
              {"\n"}
              TV shows &#38; more
            </Text>
            <Text style={styles.sloganlight}>
              Watch anywhere. Cancel anytime
            </Text>
            <Pressable
              onPress={() => props.navigation.navigate("LoginScreen")}
              style={styles.btn}
            >
              <Text style={styles.txt}>GET STARTED</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default GetStartedScreen;
