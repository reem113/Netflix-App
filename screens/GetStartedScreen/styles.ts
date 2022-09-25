import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  gradient: {
    height: 400,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },

  sloganbold: {
    fontSize: 50,
    fontWeight: "900",
    color: "white",
  },
  sloganlight: {
    fontSize: 23,
    color: "lightgrey",
    fontWeight: "600",
  },
  btn: {
    width: "95%",
    backgroundColor: "#e30505",
    padding: 10,
    borderRadius: 3,
  },
  txt: {
    fontSize: 18,
    fontWeight: "900",
    color: "#fffcfc",
    alignSelf: "center",
  },
});

export default styles;
