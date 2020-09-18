import React, { useState } from 'react';
import { Text, View, ActivityIndicator, Button, FlatList, ImageBackground, 
         TouchableOpacity, StyleSheet} from 'react-native';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            both_data: null,
            intervention_data: null,
            inactive_data: null
        }
    }

    componentDidMount() {
        this.getElevators();
    }

    getElevators = async () => {
        const response = await fetch('https://morning-beach-03166.herokuapp.com/api/elevator');
        
        const both_elevators = await response.json(response.body);
      
        this.setState({
            isLoading: false,
            both_data: both_elevators ,
            intervention_data: intervention_elevators,
            inactive_data: inactive_elevators

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
            return (
            <View style={styles.container} >
                <Text style={styles.information} >There are currently {this.state.both_data.length} who are "Inactive" or in "Intervention</Text>              
                <FlatList style={styles.listElevator}
                    data = {this.state.both_data} 
                    keyExtractor = {(key, val) => val.toString()}
                    renderItem = {({ item }) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ElevatorScreen', item)}>                        
                            <Text>Elevator ID #{item.id} Status : {item.status}</Text>                       
                        </TouchableOpacity>
                    )}
                />
                <Button style={styles.button} title='LogOut' onPress={() => this.props.navigation.navigate('StartUpScreen')} />
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
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700",
  },
  flatList: {
    height: "80%",
    flexGrow: 0,
  },
});