import { Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
var text_st = { fontSize: 20, margin: 10 };
var input_st = {
  fontSize: 20,
  borderWidth: 1,
  padding: 10,
  margin: 10,
};

export default function Hello() {
  const [greet, setGreet] = useState("Hello");
  const [name, setName] = useState("Ewha");
  return (
    <View>
      <Text style={text_st}>
        {greet}, {name}
      </Text>
      <TextInput style={input_st} onChangeText={setName} />

      <View style={{ margin: 10, flexDirection: "row-reverse" }}>
        <Button
          title="Nice"
          onPress={function () {
            setGreet("Nice to meet you");
          }}
        />
        <View style={{ width: 10 }}></View>
        <Button
          title="Hello"
          onPress={function () {
            setGreet("Hello");
          }}
        />
      </View>
    </View>
  );
}
