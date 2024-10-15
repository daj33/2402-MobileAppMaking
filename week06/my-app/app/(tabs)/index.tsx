import { useState } from "react";
import { Text, View, Image, ScrollView, Button, TextInput } from "react-native";
//lab1
var name = "Ewha";
var element = <Text> Hello {name} </Text>;
element = <View style={{ borderWidth: 1, padding: 10 }}>{element}</View>;
element = <View style={{ borderWidth: 1, padding: 10 }}>{element}</View>;
for (var i = 0; i < 3; i++) {
  element = element = (
    <View style={{ borderWidth: 1, padding: 10 }}>{element}</View>
  );
}

//lab 1.5
var L = [
  <Text key={1}>Hello</Text>,
  <Text key={2}>Ewha</Text>,
  <Image
    key={3}
    style={{ width: 141, height: 81 }}
    source={require("./smile_cat.jpg")}
  />,
];
var element_L = <View>{L}</View>;

//lab2
var L2 = [<Text>Hello</Text>, <Text>Ewha</Text>];
for (var i = 0; i < 10; i++) {
  L2.push(<Text>count {i}</Text>);
}
for (var i = 0; i < 3; i++) {
  L2.push(
    <Image
      style={{ width: 141, height: 81 }}
      source={require("./smile_cat.jpg")}
    />
  );
}
//lab3
var L3 = [];
for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    L3.push(
      <Text>
        {i} * {j} = {i * j}
      </Text>
    );
  }
}
//lab4
var text_st = {
  fontSize: 20,
  borderWidth: 1,
  borderColor: "gray",
  flex: 1,
  padding: 5,
  margin: 2,
};
var input_st = {
  fontSize: 20,
  borderWidth: 1,
  flex: 1,
  padding: 5,
  margin: 5,
};
var N = ["Ewha", "June", "Jane", "Nick"];
var P = [1111, 2222, 3333, 4444];

export default function HomeScreen() {
  var L4 = [];
  for (var i = 0; i < N.length; i++) {
    var a = (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={text_st}>{N[i]}</Text>
        <Text style={text_st}>{P[i]}</Text>
      </View>
    );
    L4.push(a);
  }
  //lab 5 ~ 7
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [refresh, setRefresh] = useState(0);
  function add_item() {
    N.push(name);
    P.push(phone);
    setRefresh(refresh + 1);
  }
  function del_item() {
    N.pop(name);
    P.pop(phone);
    setRefresh(refresh - 1);
  }
  var L5 = [];
  for (var i = 0; i < N.length; i++) {
    var a = (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={text_st}>{N[i]}</Text>
        <Text style={text_st}>{P[i]}</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <View
        style={{
          margin: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: "#ff048a77",
        }}
      >
        {element}
      </View>
      <View
        style={{
          margin: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: "#ff048a77",
        }}
      >
        {element_L}
      </View>
      <View
        style={{
          margin: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: "#ff048a77",
        }}
      >
        {L2}
      </View>
      <View
        style={{
          margin: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: "#ff048a77",
        }}
      >
        {L3}
      </View>
      <View
        style={{
          margin: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: "#ff048a77",
        }}
      >
        <Text style={{ fontSize: 40 }}>Phone Book</Text>
        <View style={{ margin: 10, flexDirection: "row" }}>
          <TextInput style={input_st} onChangeText={setName} />
          <TextInput style={input_st} onChangeText={setPhone} />
          <Button title="ADD" onPress={add_item} />
          <View style={{ margin: 2 }} />
          <Button title="DEL" onPress={del_item} />
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>{L4}</View>
      </View>
    </ScrollView>
  );
}
