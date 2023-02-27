import { View, Text, StyleSheet, Dimensions } from "react-native";

const width =
  Dimensions.get("screen").width + Dimensions.get("screen").width / 10;

import { Button } from "@rneui/themed";
const Discover = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey</Text>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a202c",
    transform: [{ translateX: -20 }, { translateY: 50 }, { rotateZ: "-10deg" }],
    width,
    borderRadius: 30,
  },
  avatar: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 5,
  },
  title: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  descriptionContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  description: {
    alignItems: "center",
    paddingHorizontal: 15,
    borderRightWidth: 1,
    borderRightColor: "gray",
  },
  descriptionTitle: {
    color: "#fff",
    fontWeight: "700",
  },
  descriptionText: {
    color: "#fff",
  },
});
