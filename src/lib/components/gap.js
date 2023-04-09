import { styled } from "nativewind";
import React from "react";
import { View as NativeView } from "react-native";

const View = styled(NativeView);

const Gap = ({ gap }) => <View className={`w-${gap ?? 2}`} />;

export default Gap;
