import { Text, View } from "react-native";
import { useState, useEffect } from "react";
var text_st = {
  fontSize: 60,
  padding: 20,
};
export default function HomeScreen() {
  //const [d, setd] = useState(new Date());
  const [hh, sethh] = useState("");
  const [mm, setmm] = useState("");
  const [ss, setss] = useState("");
  const [ap, setap] = useState("");

  useEffect(function () {
    setInterval(run_everysec, 1000);
  }, []);

  function run_everysec() {
    //var now = new Date();
    //setd(now);
    var d = new Date();
    sethh(d.getHours());
    setmm(d.getMinutes());
    setss(d.getSeconds());
    if (d.getHours() < 12) {
      setap("am");
    } else {
      setap("pm");
    }
  }

  return (
    <View>
      <View style={{ backgroundColor: "#fff47541" }}>
        <Text>
          <Text style={[text_st, { fontWeight: "bold", color: "black" }]}>
            {hh} : {mm}
          </Text>
          <Text style={[text_st, { fontWeight: "normal", color: "gray" }]}>
            : {ss}
          </Text>
          <Text style={[text_st, { fontWeight: "normal", color: "gray" }]}>
            {ap}
          </Text>
        </Text>
      </View>
    </View>
  );
}
