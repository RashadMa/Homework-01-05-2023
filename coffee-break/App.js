import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BodyText from "./components/BodyText";
import Card from "./components/Card";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BodyText />
      <Card />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
});
