import { View, Text, Image } from "react-native";
import React from "react";

const Walkthrough1 = () => {
  return (
    <View
      style={{ alignItems: "center", height: 370, backgroundColor: "black" }}
    >
      <Image
        source={{
          uri: "https://www.bhaktiphotos.com/wp-content/uploads/2021/07/Sivan-hd-Images-1080p.jpg",
        }}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
          opacity: 0.5,
        }}
      />
      <Text>Walkthrough1</Text>
    </View>
  );
};

export default Walkthrough1;
