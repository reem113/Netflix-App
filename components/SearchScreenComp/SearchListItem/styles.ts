import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 2,
    backgroundColor: "#272626",
  },
  infoWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    aspectRatio: 16 / 9,
    height: 70,
    resizeMode: "stretch",
  },
  name: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 12,
  },
});

export default styles;
