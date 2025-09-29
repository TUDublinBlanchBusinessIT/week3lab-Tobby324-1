import {View, Text, TextInput,Button} from 'react-native';
import React, {useState} from 'react';
import Logo from './components/logo'

  export default function App()
 {function buttonClicked() {
    //Alert.alert("button clicked"); //This works on a mobile phone
    alert("button clicked"); // this works on the web version - try uncommenting one or the other lines as necessary
}
const {fullname, setFullname} = useState("Tobby");
const [fname, setFname] = useState("Tobby");
const [lname, setLname] = useState("Akinwale");
const [dob, setDob] = useState("06 November 1998");
  return (
    <View >
      <Logo/>
      <Text>Hello, World {fullname}</Text>
      <TextInput stylplaceholder="enter your name" onChangeText={setFullname}/>
      <TextInput placeholder="Enter your firstname" onChangeText={setFname}/>
      <TextInput placeholder="Enter your lastname" onChangeText={setLname}/>
      <TextInput placeholder="Enter your date of birth" onChangeText={setDob}/>
      <Button title="SUBMIT" onPress={buttonClicked}/>
    </View>
  
  )
};
