import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";

import AlbumDetail from "./AlbumDetail";

//This is a class component

/**
 * There are 2 types of component, functional component and a class component.
 *
 * A functional component is used for presenting static data - It is easy to write
 * Basically used for presentation needs.
 *
 * A class component is used for dynamic sources of data
 * Handles any data that might change - more code to write
 */

export default class AlbumList extends Component {
  // below are class level properties.
  state = {
    albumState: {
      albums: [],
      loading: true,
      loaded: false
    }
  };

  albumsUrl = "https://rallycoding.herokuapp.com/api/music_albums";

  /**
   * componentWillMount is called the instance the component is about to be placed (rendered) on the screen. This is one of the life cycle
   * hooks.
   */
  componentWillMount() {
    axios.get(this.albumsUrl).then(response =>
      this.setState({
        albumState: {
          albums: response.data,
          loaded: true,
          loading: false
        }
      })
    );
  }

  renderAlbums() {
    return this.state.albumState.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    //console.log(this.state);
    // use scrollView if you need your component to scroll.
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

//fetch(URL).then((res) => res.json());
