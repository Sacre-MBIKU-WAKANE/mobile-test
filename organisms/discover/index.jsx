import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Icon } from "@rneui/themed";

const width =
  Dimensions.get("screen").width + Dimensions.get("screen").width / 10;

import { Button } from "@rneui/themed";
const Discover = () => {
  return (
    <View style={styles.container}>
      <View style={styles.discoverTextContainer}>
        <Text style={styles.discoverTitle}>Discover Models or Be</Text>
        <View
          style={{
            paddingHorizontal: 1,
            paddingVertical: 5,
            backgroundColor: "#24B6AD",
            width: 150,
            marginBottom: 10,
            marginTop: 5,
          }}
        >
          <Text style={styles.discoverSecondTitle}>Discovered</Text>
        </View>
        <Text style={styles.discoverSecondDescription}>
          A Platform that provides many kinds of the best and most trusted
          fashion
        </Text>
      </View>
      <View style={styles.discoverTextContainerSlider}>
        <Icon
          reverse
          name='arrow-forward-outline'
          type='ionicon'
          color='#ffba02'
        />
        <View style={{ flexDirection: "row" }}>
          <Button buttonStyle={{ borderRadius: 100 }} color='#bbbbbf' />
          <Button
            buttonStyle={{ borderRadius: 100, marginLeft: 10 }}
            color='#bbbbbf'
          />
          <Button
            buttonStyle={{ borderRadius: 100, marginLeft: 10, width: 50 }}
            color='#ffba02'
          />
        </View>
      </View>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    backgroundColor: "#1a202c",
    transform: [
      { translateX: -20 },
      { translateY: 100 },
      { rotateZ: "-10deg" },
    ],
    width,
    borderRadius: 30,
    paddingVertical: 35,
  },
  discoverTextContainer: {
    transform: [{ rotateZ: "10deg" }],
    paddingHorizontal: 50,
    alignItems: "center",
  },
  discoverTextContainerSlider: {
    transform: [{ translateX: -20 }, { rotateZ: "10deg" }],
    alignItems: "center",
    marginTop: 15,
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
  discoverTitle: {
    color: "#ffba02",
    fontWeight: "800",
    fontSize: 20,
  },
  discoverSecondTitle: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5,
  },
  discoverSecondDescription: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 20,
    textAlign: "center",
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
