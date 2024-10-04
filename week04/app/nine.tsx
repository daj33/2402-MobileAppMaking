import { Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
var text_st = {
  fontSize: 30,
  margin: 10,
  backgroundColor: "lightgray",
  padding: 5,
};

export default function Nine() {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={text_st}>{A}</Text>
        <Text style={{ fontSize: 30, margin: 10 }}>X</Text>
        <Text style={text_st}>{B}</Text>
        <Text style={{ fontSize: 30, margin: 10 }}>=</Text>
        <Text style={text_st}>{A * B}</Text>
      </View>
      <View style={{ marginLeft: 10, flexDirection: "row" }}>
        <View>
          <Button
            title="+"
            onPress={function () {
              setA(A + 1);
            }}
          />
          <View style={{ height: 10 }}></View>
          <Button
            title="-"
            onPress={function () {
              setA(A - 1);
            }}
          />
        </View>
        <View style={{ width: 50 }}></View>
        <View style={{ width: 10 }}></View>
        <View>
          <Button
            title="+"
            onPress={function () {
              setB(B + 1);
            }}
          />
          <View style={{ height: 10 }}></View>
          <Button
            title="-"
            onPress={function () {
              setB(B - 1);
            }}
          />
        </View>
      </View>
    </View>
  );
}
