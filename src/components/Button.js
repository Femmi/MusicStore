import React from "react";
import { Text, TouchableOpacity } from "react-native";

//destructuring props to get direct access to the element in the object
const Button = ({ children, whenPressed }) => {
  const { ButtonStyle, textStyle } = styles;
  return (
    // onPress is a click event equivalent in ReactNative
    <TouchableOpacity onPress={whenPressed} style={ButtonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  ButtonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;
