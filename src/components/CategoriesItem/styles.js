import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  categoriesItem: {
    flex: 1,
    width:"100%",
    height:100,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  container: {
    flexDirection: "row",
    width:"100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
  },
  textContainer: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "40%",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default styles;