import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#aaa",
  },
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "left",
    justifyContent: "center",
    margin: 20,
  },
  rowContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 36,
    color: "#000",
    fontWeight: "bold",
  },
  button: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "black",
    marginRight: 15,
    marginTop: 5,
  },
  buttontext: {
    fontSize: 18,
    paddingHorizontal: 5,
    width: "100%",

    textAlign: "center",
  },
});

export { styles };
