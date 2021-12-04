import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  body_container: {
    backgroundColor: "#f5f5f5",
    flexDirection: "column",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    flex: 1,
  },
  image: {
    height: 150,
    minWidth: 150,
    resizeMode: "contain",
    backgroundColor: "#FFFFFF",
  },
  text_container: {
    flexDirection: "column",
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#808080",
  },
  inStock_Container: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#E56A6A",
    marginTop: 10,
  },
  inStock: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
});
export default styles;
