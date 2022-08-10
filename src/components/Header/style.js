import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 75,
    backgroundColor: "#008ACE",
  },
  innerHeader: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  logoText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    textAlign: "center",
    color: "#ffffffff",
    fontSize: 20,
    fontWeight: "500",
  },

  logo: {
    margin: 9,
    width: 17,
    height: 13,
  },
});

export default styles;
