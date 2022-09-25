import { FlatList, Text, View } from "react-native";

import React from "react";
import UserCard from "../../components/UserCard";
import styles from "./styles";

const data = [
  {
    id: "1",
    name: "User1",
    img: "https://i.pinimg.com/550x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg",
  },
  {
    id: "2",
    name: "User2",
    img: "https://i.pinimg.com/550x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg",
  },
  {
    id: "3",
    name: "User3",
    img: "https://i.pinimg.com/736x/bd/ee/4c/bdee4c328550aaf21aa9f43fd19e2136.jpg",
  },
  {
    id: "4",
    name: "User4",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
  },
  {
    id: "5",
    name: "User5",
    img: "https://i.pinimg.com/originals/0c/91/71/0c9171ce965fb4ec175c2b001516e754.png",
  },
];
const WhoIsWatching = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Who's Watching?</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        renderItem={({ item }) => {
          return <UserCard name={item.name} img={item.img} />;
        }}
      />
    </View>
  );
};

export default WhoIsWatching;
