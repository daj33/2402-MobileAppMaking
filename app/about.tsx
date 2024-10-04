import { Text, View, Image } from "react-native";

var text_st = { fontSize: 20, margin: 10 };

export default function About() {
  return (
    <View>
      <Text style={text_st}> This is about the app</Text>
      <Image
        style={{
          width: 350,
          height: 200,
          margin: 10,
        }}
        source={require("./selfie-cat.jpg")}
      />
    </View>
  );
}
