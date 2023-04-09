import { styled } from "nativewind";
import React from "react";
import { Pressable, View as NativeView } from "react-native";

const View = styled(NativeView);

const Checkbox = ({ checked, toggleCheck }) => {
  const checkedClasses = checked ? "bg-blue-600" : "bg-transparent";

  return (
    <Pressable
      onPress={toggleCheck}
      className="relative w-6 h-6 rounded-full border-2 border-blue-700 flex items-center justify-center"
    >
      <View className={`w-4 h-4 rounded-full ${checkedClasses}`} />
    </Pressable>
  );
};

export default Checkbox;
