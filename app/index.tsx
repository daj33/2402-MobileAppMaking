import { Text, View, Button } from "react-native";
import { router } from "expo-router";


export default function Index() {
  return (
    <View>
      <Text style={{ fontSize: 20, margin: 10 }}> Home Screen</Text>
      <Button
        title="About"
        onPress={function () {
          router.navigate("about");
        }}
      />
      <View style={{ height: 10 }} />
      <Button
        title="Hello"
        onPress={function () {
          router.navigate("hello");
        }}
      />
      <View style={{ height: 10 }} />
      <Button
        title="구구단"
        onPress={function () {
          router.navigate("nine");
        }}
      />
    </View>
  );
}
