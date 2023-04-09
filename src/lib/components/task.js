import React, { useState } from "react";
import { Pressable } from "react-native";
import Checkbox from "./checkbox";
import Text from "./text";

const Task = ({ name }) => {
  const [checked, setChecked] = useState(false);
  const toggleCheck = () => setChecked(!checked);

  return (
    <Pressable
      onPress={toggleCheck}
      className="p-3 flex flex-row items-center justify-between bg-white shadow-sm rounded-xl"
    >
      <Text fontFamily="500" classes="text-blue-600 text-sm">
        {name}
      </Text>
      <Checkbox checked={checked} toggleCheck={toggleCheck} />
    </Pressable>
  );
};

export default Task;
