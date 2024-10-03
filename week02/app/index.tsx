import { Text, View, Button, TextInput, ScrollView } from "react-native";
import { useState } from "react";

var lab_st = {
  fontSize: 20,
  backGroundColor: "lightpink",
  margin: 10,
};

var text_st = {
  fontSize: 30,
  backGroundColor: "lightgray",
  padding: 10,
  margin: 10,
};

var input_st = {
  fontSize: 30,
  borderWidth: 1,
  padding: 10,
  margin: 10,
};

//const [C, setC] = useState(0);

export default function App() {
  const [greet, setGreet] = useState("Hello");
  const [name, setName] = useState("Default");
  const [val, setVal] = useState(0);
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  return (
    <ScrollView>
      <View style={lab_st}>
        <Text> LAB 01, 02 </Text>
        <Text style={text_st}> {greet}</Text>
        <Text style={text_st}> {greet}</Text>
        <Button
          title="Press Me"
          onPress={function () {
            setGreet("Hello, This is Button 1");
          }}
        />
        <View style={{ height: 10 }}> </View>
        <View
          style={{
            margin: 10,
            flexDirection: "row-reverse",
          }}
        >
          <Button
            title="Touch Me"
            onPress={function () {
              setGreet("Hello, This is Button 2");
            }}
          />
          <Button
            title="Click Me"
            onPress={function () {
              setGreet("Hello, This is Button 3");
            }}
          />
        </View>
      </View>

      <View style={lab_st}>
        <Text> LAB 03, 04 </Text>
        <Text style={text_st}>
          {greet}, {name}
        </Text>
        <TextInput style={input_st} onChangeText={setName} />
        <Button
          title="Change Greeting 01"
          onPress={function () {
            setGreet("Nice to meet you");
          }}
        />
        <Button
          title="Change Greeting 02"
          onPress={function () {
            setGreet("Hello");
          }}
        />
      </View>

      <View style={lab_st}>
        <Text> LAB 05 </Text>
        <Text style={text_st}>{val}</Text>
        <View style={{ margin: 20 }}>
          <Button
            title="Up 1"
            onPress={function () {
              setVal(val + 1);
            }}
          />
          {/* 외않되?
          <Button title="Up 2" onPress={setVal} /> 
          <Button title="Up 3" onPress={setVal(val + 1)} /> 
          <Button title="Up 4" onPress={setVal()} />  
          */}
          {/*GPT의 설명:
           onPress는 함수를 받는다
           그러나 setVal, setVal(), setVal(sth)는 함수가 실행되어 return 값이 전달되므로 오류가 발생한다
           + onChangeText는 내부적으로 return 값을 받도록 설계되어 있어, setName이라고 써도 오류가 나지 않는다!
          */}
          <Button
            title="Down 1"
            onPress={function () {
              setVal(val - 1);
            }}
          />
        </View>

        <View style={lab_st}>
          <Text> LAB 06, 07 </Text>
          <Text style={text_st}>{A}</Text>
          <Text style={text_st}>{B}</Text>
          <Text style={text_st}>{A * B}</Text>

          <View style={{ margin: 20 }}>
            <Button
              title="Up A"
              onPress={function () {
                setA(A + 1);
              }}
            />
            <Button
              title="Down A"
              onPress={function () {
                setA(A - 1);
              }}
            />
          </View>

          <View style={{ margin: 20 }}>
            <Button
              title="Up B"
              onPress={function () {
                setB(B + 1);
              }}
            />
            <Button
              title="Down B"
              onPress={function () {
                setB(B - 1);
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
