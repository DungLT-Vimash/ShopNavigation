import { Text, StyleSheet, View, Button } from "react-native";
import React, { Component } from "react";

export default class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Home</Text>
        <Button
          title="Product"
          onPress={() => {
            navigation.navigate("Product");
          }}
        ></Button>
        <Button
          title="SignUp"
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        ></Button>
        <Button
          title="SignIn"
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
