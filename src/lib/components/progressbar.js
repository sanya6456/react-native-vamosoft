import React from "react";
import PropTypes from "prop-types";
import { View as NativeView } from "react-native";
import Text from "./text";
import { styled } from "nativewind";

const View = styled(NativeView);

const ProgressBar = ({
  percent,
  activeColorClass,
  bgColorClass,
  height: incomingHeight,
  showPercentText,
}) => {
  const completedPercent = `${((percent ?? 0) / 100) * 100}%`;
  const height = incomingHeight ?? "h-1.5";
  const bgColor = bgColorClass ?? "bg-[#004797]";

  return (
    <View
      className={`relative rounded-3xl w-full overflow-hidden ${height} ${bgColor}`}
    >
      <View
        style={{ width: completedPercent }}
        className={`absolute h-full z-10 ${activeColorClass || "bg-white"}`}
      />
      {!!showPercentText && (
        <Text classes="relative z-20 text-center mt-1 text-white text-xxs">
          {completedPercent}
        </Text>
      )}
    </View>
  );
};

ProgressBar.prototype = {
  activeColorClass: PropTypes.string,
};

export default ProgressBar;
