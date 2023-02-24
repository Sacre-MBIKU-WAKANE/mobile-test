import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Profile from "./organisms/profile";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/stock-photo-beautiful-african-american-woman-body.jpeg")}
        style={styles.image}
        resizeMode='cover'
      >
        <Profile />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
