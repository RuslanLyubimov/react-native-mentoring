import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  phoneBlock: {
    width: 155,
    height: 160,
    padding: 5,
    margin: 20,
    borderRadius: 5,
    backgroundColor: "#fff",
    elevation: 8,
  },

  phonePhoto: {
    width: 100,
    height: 100,
    marginHorizontal: 27,
    justifyContent: "center",
  },

  phoneTitle: {
    fontFamily: "Roboto",
    fontSize: 15,
    color: "#4A4A4A",
    marginTop: 5,
    fontWeight: "400",
  },

  phonePrice: {
    fontFamily: "Roboto",
    fontSize: 15,
    color: "#4A4A4A",
    fontWeight: "700",
    marginTop: 7,
  },
});

export default styles;
