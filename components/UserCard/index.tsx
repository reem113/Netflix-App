import * as ImagePicker from "expo-image-picker";

import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const UserCard = (props: any) => {
  const { name, img } = props;
  const [image, setImage] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permission Denied");
        }
      }
    };
  }, []);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      {!image && (
        
          <Pressable onPress={() => navigation.navigate("Root")}>
            <Image style={styles.img} source={{ uri: img }}/>
            <AntDesign
              onPress={PickImage}
              style={{ position: "absolute", top:8, right: -3 }}
              name="edit"
              size={24}
              color="lightgrey"
            />
          </Pressable>
        
      )}
      {image && (
        <Pressable onPress={() => navigation.navigate("Root")}>
          <Image source={{ uri: image }} style={styles.img} />
          <AntDesign
            onPress={PickImage}
            style={{ position: "absolute", top: 5, right: -3 }}
            name="edit"
            size={24}
            color="lightgrey"
          />
        </Pressable>
      )}
      <Text style={styles.txt}>{name}</Text>
    </View>
  );
};

export default UserCard;
