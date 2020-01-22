import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import {createViewPortConfig} from 'react-native-responsive-view-port';

const { vw, vh } = createViewPortConfig();

const imageUrl = 'https://media.glassdoor.com/sql/958743/mroads-squarelogo-1458830826065.png';
const userImage = 'https://img.icons8.com/pastel-glyph/2x/user-male.png';
const emailImage = 'https://image.flaticon.com/icons/png/512/9/9923.png';
const passwordImage = 'http://icons.iconarchive.com/icons/iconsmind/outline/512/Key-icon.png';

export default class Register extends Component {

  constructor(props) {
    super(props);
    state = {
      fullName: '',
      email   : '',
      password: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer} ><Image style={styles.imageStyle} source={{uri: imageUrl }}/></View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: userImage }}/>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: emailImage }}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: passwordImage }}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#545454',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderBottomWidth: 1,
      width: 450 * vw,
      height: 60 * vh,
      marginBottom: 20 * vh,
      flexDirection: 'row',
      alignItems:'center',
      borderRadius: 8,
  },
  inputs:{
      height: 60 * vh,
      marginLeft: 16 * vw,
      borderBottomColor: '#FFFFFF',
      flex:1,
      justifyContent: 'center',
  },
  inputIcon:{
    width: 45 * vw,
    height: 45 * vh,
    marginLeft: 10 * vw,
    justifyContent: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#545454',
    marginBottom: 10 * vh,
  },
  imageStyle: {
    width: 130 * vw,
    height: 130 * vh,
    marginLeft: 15 * vw,
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonContainer: {
    height: 60 * vh,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20 * vh,
    width: 125 * vw,
    borderRadius: 8,
  },
  signupButton: {
    backgroundColor: 'green',
  },
  signUpText: {
    color: 'white',
  }
});