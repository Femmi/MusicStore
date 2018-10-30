import React from "react";
import { View, Text, Image, Linking } from "react-native"; // Linking API is a way we interface our app to another app running on the users mobile device.

import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

export default (AlbumDetail = ({ album }) => {
  // destructuring object
  const {
    headerContentStyles,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyles}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button whenPressed={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
});

const styles = {
  headerContentStyles: {
    flexDirection: "column",
    justifyContent: "space-around"
  },

  headerTextStyle: {
    fontSize: 18
  },

  thumbnailStyle: {
    height: 50,
    width: 50
  },

  thumbnailContainerStyle: {
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
