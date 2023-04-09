import { styled } from "nativewind";
import React from "react";
import { Text as NativeText } from "react-native";
import useFontFamily from "../hooks/use-font-family";

const StyledText = styled(NativeText);

const Text = ({ children, classes, fontFamily }) => {
  const font = useFontFamily({ fontFamily: fontFamily ?? "" });

  return (
    <StyledText style={{ fontFamily: font }} className={classes || ""}>
      {children}
    </StyledText>
  );
};

export default Text;
