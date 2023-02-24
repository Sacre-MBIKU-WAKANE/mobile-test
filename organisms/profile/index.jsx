import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "@rneui/themed";
import { Button } from "@rneui/themed";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Avatar
        size={80}
        rounded
        containerStyle={styles.avatar}
        source={require("../../assets/183a146f25ab8487c04dfcac7c5bf2e2.jpg")}
      />
      <Text style={styles.title}>Lois Adjetey Annan</Text>
      <View style={styles.descriptionContainer}>
        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>137</Text>
          <Text style={styles.descriptionText}>Projects</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>137</Text>
          <Text style={styles.descriptionText}>Followers</Text>
        </View>
        <View style={{ marginLeft: 15 }}>
          <Button
            color='#ffba02'
            buttonStyle={{ paddingHorizontal: 25, borderRadius: 20 }}
          >
            Follow
          </Button>
        </View>
        <View></View>
        <View></View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
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
