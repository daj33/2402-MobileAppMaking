import { Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
import Mult from "./Mult";
var input_st = {
  fontSize: 20,
  borderWidth: 1,
  padding: 5,
  margin: 5,
};
var p = [
  { name: "Ewha", phone: "1111" },
  { name: "June", phone: "2222" },
  { name: "Jane", phone: "3333" },
  { name: "Nick", phone: "4444" },
];
export default function HomeScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [refresh, setRefresh] = useState(0);
  function add_item() {
    p.push({ name: name, phone: phone });
    setRefresh(refresh + 1);
  }
  function del_item() {
    p.pop();
    setRefresh(refresh - 1);
  }
  var L = [];
  for (var i = 0; i < p.length; i++) {
    var a = (
      <Text style={{ fontSize: 20 }}>
        {p[i].name} :{p[i].phone}
      </Text>
    );
    L.push(a);
  }

  return (
    <View style={{ flex: 1 }}>
      <Mult />
      <Mult />
      <Mult />
      <Text style={{ fontSize: 40 }}>Phone Book</Text>
      <View style={{ margin: 10, flexDirection: "row" }}>
        <TextInput style={input_st} onChangeText={setName} />
        <TextInput style={input_st} onChangeText={setPhone} />
        <Button title="ADD" onPress={add_item} />
        <View style={{ margin: 2 }} />
        <Button title="DEL" onPress={del_item} />
      </View>
      <View>{L}</View>
    </View>
  );
}
