import { styled } from "nativewind";
import React from "react";
import { View as NativeView } from "react-native";
import Text from "./text";

const View = styled(NativeView);

const DateCard = ({ children, type, classes }) => {
  return (
    <View
      className={`bg-blue-600 rounded-2xl flex flex-col items-center justify-center text-center py-4 flex-1 max-w-[108px] ${
        classes || ""
      }`}
    >
      <Text classes="text-4xl text-white" fontFamily="700">
        {children}
      </Text>
      <Text classes="text-sm text-white">{type}</Text>
    </View>
  );
};

export default DateCard;
