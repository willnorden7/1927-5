// Button consist two props: title and onPres
import React from 'react';
import {AppRegistry, View, Alert, Button, StyleSheet, Dimensions, PanResponder } from 'react-native';

async function checkSensors(){
    const response = await fetch('https://bot6.seattleacademy.software/sensors');
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));  
    if (myJson.batteryCharge>1483){
      fetch('https://bot6.seattleacademy.software/sing?song=[[69,1],[80,1],[95,1],[110,1],[130,1]]');
    }
    else{
      fetch('https://bot6.seattleacademy.software/sing?song=[[69,1],[80,1],[95,1],[110,1],[130,1]]');
    }
  }

export default class HandlingTouchesComponent extends React.Component {
  _onPress1() {
    fetch('https://bot6.seattleacademy.software/sing?song=[69,100]')
  }

  _onPress2() {
    fetch('https://bot6.seattleacademy.software/drive?right=300&left=300')
  }

  _onPress3() {
    fetch('https://bot6.seattleacademy.software/drive?right=-300&left=-300')
    fetch('https://bot6.seattleacademy.software/sing?song=[[69,50],[0,50],[69,50],[0,50],[69,50]]')
  
  }

  _onPress4() {
    fetch('https://bot6.seattleacademy.software/drive?right=0&left=0')
  }

  _onPress5() {
    fetch('https://bot6.seattleacademy.software/drive?right=-100&left=100')
  }
  _onPress6() {
    fetch('https://bot6.seattleacademy.software/drive?right=100&left=-100')
  }
  _onPress7() {
    checkSensors()
  }

  render() {
    return (
      <View style= {styles.container}>
        <View style= {styles.button}>
          <Button 
            title='sing' 
            onPress={this._onPress1}  
          />
        </View>
        <View style= {styles.button}>
          <Button 
            title='Forward' 
            onPress={this._onPress2}
          />
        </View>
        <View style= {styles.button}>
          <Button
            title='Backward' 
            onPress={this._onPress3}
          />
        </View>
        <View style= {styles.button}>
          <Button 
            title='Halt' 
            onPress={this._onPress4}
          />
        </View>
        <View style= {styles.button}>
          <Button 
            title='left' 
            onPress={this._onPress5}
          />
        </View>
        <View style= {styles.button}>
          <Button 
            title='right' 
            onPress={this._onPress6}
          />
        </View>
        <View style= {styles.button}>
          <Button 
            title='battery check' 
            onPress={this._onPress7}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',

    },
    button: {
      color: 'red',
      margin: 20
    }
});

