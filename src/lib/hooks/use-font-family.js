import { useEffect, useRef, useState } from "react";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const useFontFamily = ({ fontFamily }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  const font = useRef();

  useEffect(() => {
    if (fontsLoaded) {
      switch (fontFamily) {
        case "400":
          font.current = "Poppins_400Regular";
          break;
        case "500":
          font.current = "Poppins_500Medium";
          break;
        case "600":
          font.current = "Poppins_600SemiBold";
          break;
        case "700":
          font.current = "Poppins_700Bold";
          break;

        default:
          font.current = "Poppins_400Regular";
          break;
      }
    }
  }, [fontFamily, fontsLoaded]);

  return font.current;
};

export default useFontFamily;
