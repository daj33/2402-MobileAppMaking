import { View, Button, Text } from "react-native";
import { Audio } from "expo-av";

async function play00() {
  //async function: 싱크가 맞지 않는 함수. 내부에 await이 있을 경우, 필수적으로 사용해야 한다.
  //await 코드에서 loading이 길어지는 경우, main의 다음 함수를 동작하기까지 시간이 오래 걸린다.
  //async를 사용하여, async 함수의 동작이 끝나지 않아도 다른 동작을 동시에 수행할 수 있다.
  console.log("Loading Sound");
  var s = await Audio.Sound.createAsync(require("../assets/notes/note00.m4a"));
  //await을 사용하지 않을 경우, loading이 완료되기 전에, 다음 코드로 넘어가서 playAsync();가 동작하지 않을 수 있다.
  //즉, await을 사용하면, loading이 끝난 이후에 다음 코드로 연결한다. 파일 크기가 클 경우, 로딩에 시간이 걸려서 app의 동작이 멈추는 것을 방지할 수 있다.
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

export default function HomeScreen() {
  return (
    <View>
      {/* touch와 drag를 구분하기 위해, button에서 손을 땔 때, 동작한다*/}
      <Button title="Playing Sound" onPress={play00}></Button>
      <Button title="Playing Sound" onPress={play02}></Button>
      <Button title="Playing Sound" onPress={play04}></Button>
      <Button title="Playing Sound" onPress={play04}></Button>
    </View>
  );
}
