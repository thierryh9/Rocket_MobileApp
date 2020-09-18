import React from 'react';
import { ActivityIndicator, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Text, TextInput, View } 
from 'react-native';

export default class StartupScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null
        }
    }

    componentDidMount() {
        this.onLogin();
    }

    onLogin = async () => {
        const response = await fetch(`https://morning-beach-03166.herokuapp.com/api/employee/${this.state.email}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS'
            }
        });


        if (response.status === 200 && validPassword.status === 200) {
            this.props.navigation.navigate('HomeScreen');
        } else {
            return alert('Please enter a valid email and password');
        }
        this.setState({
            isLoading: false
        });
    };

    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.container} >
                    <ActivityIndicator />
                </View>
            )
        } else {
            let { email } = this.state;
            
            return (
              <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View>
                  <Image
                    style={{ width: 250, height: 80, marginBottom: 20 }}
                    source={require("../assets/R2.png")}
                  />
        
                  <TextInput
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder="Email Address"
                    placeholderTextColor="#DADDD8"
                    returnKeyType="go"
                    onSubmitEditing={this.userLogin}
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    keyboardType="email-address"
                    style={styles.input}
                  />
                  <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={this.userLogin}>
                      LOGIN
                    </Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
            );
          }
        }
        
    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "#bdc3c7",
    color: "#636e72",
    fontWeight: "600",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: "#0b63a0",
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700",
  },
});