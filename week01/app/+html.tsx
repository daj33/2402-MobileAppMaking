import { Text, View, Image, TextInput, ScrollView } from "react-native";

export default function Index() {
  //함수 이름은 APP() 등 파일명과 달라도 괜찮습니다

  var text_st = { padding: 20, fontSize: 20, color: "gray" };
  var hello = "Nice to meet you";

  return (
    <View
      style={
        {
          //flex: 1,
          //justifyContent: "center",
          //alignItems: "center",
        }
      }
    >
      <Image
        style={{
          width: 200,
          height: 200,
          borderColor: "red",
          borderWidth: 1,
          //borderWidth가 정해지지 않으면 border가 나타나지 않는다
          margin: 30,
        }}
        source={require("./smile_cat.jpg")}
      />
      <Text
        style={{
          fontSize: 40,
          borderColor: "red",
          borderWidth: 1,
          padding: 20,
        }}
      >
        Hello Ewha {hello}
      </Text>
      <Text
        style={{
          fontSize: 20,
          borderColor: "red",
          borderWidth: 1,
          marginLeft: 20,
          marginTop: 50,
        }}
      >
        Nice to meet you
      </Text>
      <Text>
        web과 달리 native에서는 margin과 margin 사이가 중첩되지 않는다. 10+20=30
      </Text>
      {/*font 사이즈에 따라 높이가 자동으로 맞추어 정해진다. 너비는 최대한 크게 결정된다(view의 조건: ) */}

      <TextInput
        style={{ height: 40, width: 200, borderColor: "green", borderWidth: 2 }}
        defaultValue="텍스트를 입력하세요!"
      />
      <Text>스크롤이 자동으로 되지 않는다 - ScrollView</Text>
      <ScrollView
        style={{ width: 200, height: 200, borderColor: "blue", borderWidth: 5 }}
        contentContainerStyle={{ borderColor: "gray", borderWidth: 5 }}
      >
        <Text style={text_st}>으아아아ㅏ아악</Text>
        <Text style={{ padding: 20 }}>으아아아ㅏ아악</Text>
        <Text style={text_st}>으아아아ㅏ아악</Text>
        <Text style={{ padding: 20 }}>으아아아ㅏ아악</Text>
        <Text style={text_st}>으아아아ㅏ아악</Text>
        <Text style={{ padding: 20 }}>으아아아ㅏ아악</Text>
        <Text style={text_st}>으아아아ㅏ아악</Text>
        <Text style={{ padding: 20 }}>으아아아ㅏ아악</Text>
      </ScrollView>
    </View>
  );
}
