import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 100,
  },
  input: {
    flex: 1,
    height: 77,
    backgroundColor: "#272626",
    borderColor: "#272626",
    color: "#c8c8c8",
    fontSize: 14,
    fontWeight: "600",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginLeft: 5,
    fontWeight: "600",
    marginBottom: 12,
  },
});

export default styles;
