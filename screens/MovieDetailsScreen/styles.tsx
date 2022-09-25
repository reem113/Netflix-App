import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  img: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
    position: "relative",
  },
  playicon: {
    position: "absolute",
    top: 125,
    left: "40%",
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  picker: {
    backgroundColor: "#272626",
    color: "lightgrey",
    padding: 8,
    width: "30%",
    borderRadius: 4,
    borderColor: "#272626",
    margin: 10,
    fontWeight: "bold",
  },
});

export default styles;
