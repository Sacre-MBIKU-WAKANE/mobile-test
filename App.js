import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/stock-photo-beautiful-african-american-woman-body.jpeg")}
        style={styles.image}
        resizeMode='container'
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
