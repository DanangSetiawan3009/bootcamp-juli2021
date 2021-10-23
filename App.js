import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const bgGreen = {
      backgroundColor: "green",
    }
    return (
      <ImageBackground style={styles.img} source={{ uri: "https://wallpaperaccess.com/full/57166.jpg" }}>
        <View style={styles.container} >
          <Text style={{ backgroundColor: "red" }}>Ini baru boleh text</Text>
          <Text style={bgGreen}>Ini text lagi</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    // flex: 1,
    width: "100%",
    height: "100%"
  }
})

export default App;