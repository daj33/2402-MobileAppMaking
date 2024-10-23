import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
var st_red = { color: "red", fontSize: 20, backgroundColor: "#ffa07a" };
var st_bigBlue = { color: "blue", fontSize: 30, backgroundColor: "#b0e0e6" };
function LayoutTest() {
  return (
    <View style={{ flex: 1, justifyContent: "space-evenly" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
        }}
      ></View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "baseline",
          //폰트 기준 줄 맞춤 (세로 배치 의미 없음)
        }}
      >
        <Text style={st_bigBlue}>큰 파랑</Text>
        <Text style={[st_bigBlue, st_red]}>보통 빨강</Text>
        <Text
          style={[
            st_bigBlue,
            st_red,
            { color: "green", backgroundColor: "#bffd9f" },
          ]}
        >
          보통 초록
        </Text>
      </View>
    </View>
  );
}
var st_dice = {
  padding: 10,
  backgroundColor: "rgb(234, 236, 238)",
};
var st_circle = {
  width: 40,
  height: 40,
  backgroundColor: "rgb(97, 238, 151)",
  borderRadius: 20,
  borderWidth: 4,
  borderColor: "rgb(70, 121, 96)",
  margin: 2,
};
function Circle() {
  return <View style={st_circle} />;
}
function Blank() {
  return (
    <View style={[st_circle, { backgroundColor: undefined, borderWidth: 0 }]} />
  );
}
function Dice(props) {
  if (props.num == 1) {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Circle />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Blank />
        </View>
      </View>
    );
  } else if (props.num == 2) {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  } else if (props.num == 3) {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Circle />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  } else if (props.num == 4) {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  } else if (props.num == 5) {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Circle />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  } else if (props.num == 6) {
    return (
      <View style={st_dice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  }
}

export default function HomeScreen() {
  const [N1, setN1] = useState(1);
  const [N2, setN2] = useState(1);
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ textAlign: "center", fontSize: 20, margin: 5 }}>
        Double Dice
      </Text>
      <Text style={{ textAlign: "center", fontSize: 20, margin: 5 }}>
        {N1 + N2}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Dice num={N1} />
        <View style={{ width: 40 }}></View>
        <Dice num={N2} />
      </View>
      <View style={{ marginHorizontal: 100, marginVertical: 30 }}>
        <Button
          title="Roll"
          onPress={function () {
            setN1(Math.floor(Math.random() * 6 + 1));
            setN2(Math.floor(Math.random() * 6 + 1));
          }}
        />
      </View>
    </View>
  );
}
