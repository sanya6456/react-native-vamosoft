import { styled } from "nativewind";
import React from "react";
import { View as NativeView, ImageBackground, Pressable } from "react-native";
import Badge from "./badge";
import ProgressBar from "./progressbar";
import Text from "./text";

const View = styled(NativeView);

const TaskCard = ({
  period,
  children,
  classes,
  imageUrl,
  completedPercent,
  onPush,
}) => {
  return (
    <Pressable
      onPress={onPush}
      className={`w-32 min-h-[192px] rounded-[20px] p-4 flex flex-col justify-between items-center relative overflow-hidden ${
        classes || ""
      }`}
    >
      {imageUrl && (
        <ImageBackground
          className="absolute w-full h-full"
          resizeMode="cover"
          resizeMethod="scale"
          source={imageUrl}
        />
      )}
      {!!period && <Badge classes="bg-white block ml-auto">{period}</Badge>}
      {children}
      <View className="w-full">
        <Text
          fontFamily="600"
          classes="text-white text-xxs text-left w-full mb-1"
        >
          Progress
        </Text>
        <ProgressBar
          percent={completedPercent ?? 0}
          activeColorClass="bg-white"
        />
      </View>
    </Pressable>
  );
};

export default TaskCard;
