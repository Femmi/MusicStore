import React from "react";
import { Text, View } from "react-native";

// use props to pass data from parent to child. props is a javascript object
const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    //justifyContent used to position content in vertical direction - options: flex-end,flex-start(default),center
    justifyContent: "center",
    // alignItems used to position elements in the horizontal directions - options: options: flex-end,flex-start(default),center
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
