import { Stack } from "expo-router";
//Tabs, Drawer 와 같은 레이아웃도 존재하지만, 동시에 사용할 수 없다
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="hello" options={{ title: "Hello" }} />
      <Stack.Screen name="nine" options={{ title: "구구단" }} />
    </Stack>
  );
}
