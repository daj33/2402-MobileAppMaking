import { TextInput, View, Text } from "react-native";
import { useState } from "react";
var text_st = { fontSize: 30, padding: 10, margin: 10 };
var input_st = { fontSize: 30, borderWidth: 1, padding: 10, margin: 10 };
function Mult() {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  return (
    <View style={{ flex: 1, flexDirection: "row", height: 20 }}>
      <TextInput style={input_st} onChangeText={setA} />
      <Text style={text_st}> X</Text>
      <TextInput style={input_st} onChangeText={setB} />
      <Text style={text_st}> = </Text>
      <Text style={text_st}> {A * B}</Text>
    </View>
  );
}

export default Mult;
