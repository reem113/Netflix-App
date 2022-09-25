import { TextInput, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";

const SearchBar = (props: any) => {
  const { term, onTermChange, onTermSubmit } = props;
  return (
    <View style={styles.container}>
      <Ionicons
        style={{ marginHorizontal: 18, alignSelf: "center" }}
        name="search"
        size={20}
        color="lightgrey"
      />
      <TextInput
        style={{ fontSize: 16, width: "100%", padding: 10, color: "white" }}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search for a movie,show,etc."
        placeholderTextColor={"lightgrey"}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
    flexDirection: "row",
    backgroundColor: "#3a3939",
  },
});

export default SearchBar;
