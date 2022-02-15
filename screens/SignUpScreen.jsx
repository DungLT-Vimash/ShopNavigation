import { Text, StyleSheet, View, Button } from "react-native";
import React, { Component } from "react";

export default class SignUpScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Sign Up</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
