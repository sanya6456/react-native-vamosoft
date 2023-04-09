import { styled } from "nativewind";
import React from "react";
import { View as NativeView } from "react-native";
import Text from "./text";

const View = styled(NativeView);

const Badge = ({ children, classes }) => {
  return (
    <View className={`rounded-3xl px-2 py-1 ${classes || ""}`}>
      <Text className="text-xxs">{children}</Text>
    </View>
  );
};

export default Badge;
