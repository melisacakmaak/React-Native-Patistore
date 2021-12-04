import React from "react";
import { View, Text, TextInput } from "react-native";

const SearhBar = ({ title, onChange }) => {
  return (
    <View
      style={{
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        padding: 10,
        margin: 5,
      }}
    >
      <TextInput placeholder={title} onChangeText={onChange} />
    </View>
  );
};
export default SearhBar;
