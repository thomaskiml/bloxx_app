import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  menu: {
    padding: 20,
  },
  downArrow: {
    padding: 20,
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "left",
    justifyContent: "center",
    margin: 20,
    height: "100%",
  },
  tinyLogo: {
    width: 25,
    height: 25,
  },
  rowContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 36,
    color: "#000",
    fontWeight: "bold",
    width: "100%",
  },
  black: {
    marginBottom: 7,
    minWidth: "40%",
    backgroundColor: "black",
  },
  orange: {
    marginBottom: 7,
    minWidth: "40%",
    backgroundColor: "orange",
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
