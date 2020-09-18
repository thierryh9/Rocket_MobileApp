import React, { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';


export default class ElevatorScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.navigation.getParam('id'),
            status: this.props.navigation.getParam('status')
        }
    }

    updateStatus = async () => {
      this.state.id = this.props.navigation.getParam('id');

      const response = await fetch(`https://morning-beach-03166.herokuapp.com/api/elevators/${this.state.id}/active`, {
              method: 'PUT',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                  'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
              },
              body: JSON.stringify({
                'status': 'Active'
              })
          });
      this.setState({ 
          status: 'Active'
      });
      this.button1();
    };

    button1 = () => {
      if(this.state.status === 'Active') {
        return(
          <View>
            <Text style={styles.informations} >Go back</Text>
            <Button style={styles.button} title='Back' onPress={() => this.props.navigation.navigate('Home')} />
          </View>
        );
      } else {
        return(
          <View>
            <Text style={styles.informations} >Update</Text>
            <Button style={styles.button} title='Update to active status' onPress={(this.updateStatus)} />
          </View>
        );
      }
    };

    render() {
        const { navigation } = this.props;
        if (this.state.isLoading) {
            return (
                <View style={styles.container} >
                    <ActivityIndicator />
                </View>
            )
        } else {
            let { id } = this.state;
            const status = this.state.status;
  
            return (
                <View style={styles.container} >
                    <Text style={styles.welcome} > Update status of elevator #{ navigation.getParam('id')}</Text>

                    
                        <Text> Elevator ID : { navigation.getParam('id')}</Text>
                        <Text> Column ID : { navigation.getParam('column_id')}</Text>
                        <Text> Serial number : { navigation.getParam('serialNumber')}</Text>
                        <Text> Notes : { navigation.getParam('notes')}</Text>

                        <Text style={[(status === "Active") ?  styles.operationalColor : styles.NonOperationalColor]}>
                         Current status: {status}</Text>
                    
                    {this.button1()}                   
                </View>
            )
        }
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#bdc3c7",
    fontWeight: "bold",
    padding: 20,
    paddingTop: 50,
  },
  item: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  buttonContainer: {
    backgroundColor: "#0b63a0",
    paddingVertical: 15,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700",
  },
  textList: {
    fontSize: 16,
  },
  buttonPending: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700",
  },
  buttonContainerInactive: {
    backgroundColor: "red",
    paddingVertical: 15,
    marginBottom: 10,
  },
  buttonContainerActive: {
    backgroundColor: "green",
    paddingVertical: 15,
    marginBottom: 10,
  },
});