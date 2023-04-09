import React from "react";
import { Path, Svg } from "react-native-svg";

const Profile = (props) => {
  return (
    <Svg
      {...props}
      width="22"
      height="28"
      viewBox="0 0 22 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11 18.2319C16.7848 18.2319 21.6667 19.1719 21.6667 22.7986C21.6667 26.4266 16.7528 27.3333 11 27.3333C5.2165 27.3333 0.333336 26.3933 0.333336 22.7666C0.333336 19.1386 5.24718 18.2319 11 18.2319ZM11 0.666656C14.9188 0.666656 18.0586 3.80535 18.0586 7.72139C18.0586 11.6374 14.9188 14.7775 11 14.7775C7.08253 14.7775 3.94136 11.6374 3.94136 7.72139C3.94136 3.80535 7.08253 0.666656 11 0.666656Z"
        fill="currentColor"
      />
    </Svg>
  );
};

export default Profile;
