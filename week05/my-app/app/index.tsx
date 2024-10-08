//TOD0: install expo-av
import { View, ImageBackground } from "react-native";
import { Audio } from "expo-av";
import { useState } from "react";
async function play00() {
  //async function: 정상적인 싱크(작업 수행시기)를 벗어난 함수. 내부에 await이 있을 경우, 필수적으로 사용해야 한다.
  //await 코드에서 loading이 길어지는 경우, main의 다음 함수를 동작하기까지 시간이 오래 걸린다.
  //async를 사용하여, async 함수의 동작이 끝나지 않아도 다른 동작을 동시에 수행할 수 있다.
  console.log("Loading Sound");
  var s = await Audio.Sound.createAsync(require("../assets/notes/note00.m4a"));
  //await을 사용하지 않을 경우, loading이 완료되기 전에, 다음 코드로 넘어가서 playAsync();가 동작하지 않을 수 있다.
  //즉, await을 사용하면, loading이 끝난 이후에 다음 코드로 연결한다. 파일 크기가 클 경우, 로딩에 시간이 오래 걸려서, 로딩이 끝나기 전에 다음 코드가 실행되어 제대로 동작되지 않는 것을 방지할 수 있다.
  console.log("Playing Sound");
  s.sound.playAsync();
}
async function play02() {
  var s = await Audio.Sound.createAsync(require("../assets/notes/note02.m4a"));
  s.sound.playAsync();
}
async function play04() {
  var s = await Audio.Sound.createAsync(require("../assets/notes/note04.m4a"));
  s.sound.playAsync();
}
async function play05() {
  var s = await Audio.Sound.createAsync(require("../assets/notes/note05.m4a"));
  s.sound.playAsync();
}
async function play07() {
  var s = await Audio.Sound.createAsync(require("../assets/notes/note07.m4a"));
  s.sound.playAsync();
}
async function play09() {
  var s = await Audio.Sound.createAsync(require("../assets/notes/note09.m4a"));
  s.sound.playAsync();
}
async function play11() {
  var s = await Audio.Sound.createAsync(require("../assets/notes/note11.m4a"));
  s.sound.playAsync();
}
async function play12() {
  var s = await Audio.Sound.createAsync(require("../assets/notes/note12.m4a"));
  s.sound.playAsync();
}

const [key1, setKey1] = useState(0);
const [key2, setKey2] = useState(0);
const [key4, setKey4] = useState(0);
const [key5, setKey5] = useState(0);
const [key7, setKey7] = useState(0);
const [key9, setKey9] = useState(0);
const [key11, setKey11] = useState(0);
const [key12, setKey12] = useState(0);

const handleTouchEnd2 = function () {
  setKey2(0);
};
const handleTouchEnd4 = () => {
  setKey4(0);
};
const key_st = {
  flex: 1,
  margin: 5,
  backgroundColor: "rgb(100, 100, 100, 0.2)", //투명도 설정
};
export default function HomeScreen() {
  return (
    //touch와 drag를 구분하기 위해, View에서 손을 땔 때, 동작한다. 터치하는 순간 동작시키기 위해, Button이 아닌 View와 OnTouchStart로 구현한다.
    <View style={{ flex: 1 }}>
      {/* 1. flex Direction Default: column 
          2. 'flex: 1'의 의미: 일정한 높이를 차지한다는 것을 나타낸다. 1이 아니어도 된다.(기본적으로 높이를 정하지 않은 요소는 나타나지 않는다)
          3. %를 사용하는 것과 달리, 비율을 사용하면 '다른 요소가 들어가고 남은 공간'에 대한 화면 분할을 할 수 있다.*/}
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        resizeMode="stretch"
        source={require("../assets/images/keyboard.png")}
      >
        <View
          style={[key_st, { opacity: key1 }]}
          //style = {{ }}에서 바깥쪽 괄호는 js 표현식임을, 안쪽 괄호는 js 객체를 나타내기 위해 사용된다
          //style 속성은 하나의 객체만을 전달받으므로, key_st 객체와 {opacity: key1} 객체를 병합해야한다. 이때, [ ]를 사용해 객체를 병합한다.
          onTouchStart={function () {
            play00();
            setKey1(1);
          }}
          onTouchEnd={function () {
            setKey1(0);
            //function(){ }과 같은 익명함수를 사용하지 않고, setKey(1)을 그대로 작성할 경우 오류가 발생한다.
            //이벤트 핸들러에는 (즉시 실행된) 함수 호출 결과를 직접적으로 할당하는 것이 아니라, 함수 자체를 반환해야되기 때문이다.
            //별도의 함수를 정의하여 할당할 수도 있다. 예) line: 55 ~
          }}
        />
        <View
          style={[key_st, { opacity: key2 }]}
          onTouchStart={function () {
            play02();
            setKey2(1);
          }}
          onTouchEnd={handleTouchEnd2}
        />
        <View
          style={[key_st, { opacity: key4 }]}
          onTouchStart={function () {
            play04();
            setKey4(1);
          }}
          onTouchEnd={handleTouchEnd4}
        />
        <View
          style={[key_st, { opacity: key5 }]}
          onTouchStart={function () {
            play05();
            setKey5(1);
          }}
          onTouchEnd={function () {
            setKey5(0);
          }}
        />
        <View
          style={[key_st, { opacity: key7 }]}
          onTouchStart={function () {
            play07();
            setKey7(1);
          }}
          onTouchEnd={function () {
            setKey7(0);
          }}
        />
        <View
          style={[key_st, { opacity: key9 }]}
          onTouchStart={function () {
            play09();
            setKey9(1);
          }}
          onTouchEnd={function () {
            setKey9(0);
          }}
        />
        <View
          style={[key_st, { opacity: key11 }]}
          onTouchStart={function () {
            play11();
            setKey11(1);
          }}
          onTouchEnd={function () {
            setKey11(0);
          }}
        />
        <View
          style={[key_st, { opacity: key12 }]}
          onTouchStart={function () {
            play12();
            setKey12(1);
          }}
          onTouchEnd={function () {
            setKey12(0);
          }}
        />
      </ImageBackground>
    </View>
  );
}
