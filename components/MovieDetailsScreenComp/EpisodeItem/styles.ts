import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },

  img: {
    height: 75,
    aspectRatio: 16 / 9,
    resizeMode: "cover",
    borderRadius: 3,
  },

  infoContainer: {
    flex: 1,
    padding: 5,
    marginLeft: 5,
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
  },

  duration: {
    color: "#757575",
    fontSize: 14,
  },

  plot: {
    color: "#757575",
    marginHorizontal: 10,
    marginVertical: 4,
  },
});

export default styles;
