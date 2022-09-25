import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 120,
    marginHorizontal: 8,
    marginVertical: 6,
    position: "relative",
  },
  img: {
    height: 140,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 5,
    resizeMode: "contain",
    opacity: 0.8,
    
  },
  txt: {
    fontSize: 16,
    fontWeight: "400",
    color: "lightgrey",
    textAlign: "center",
  },
});

export default styles;
