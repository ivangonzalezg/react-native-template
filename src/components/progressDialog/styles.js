import { Dimensions, Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: Platform.select({
      android: "100%",
      default: Dimensions.get("screen").width,
    }),
    height: Platform.select({
      android: "100%",
      default: Dimensions.get("screen").height,
    }),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 99,
  },
  container: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 3,
    width: "85%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  text: {
    marginLeft: 20,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
