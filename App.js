import * as React from 'react';
import { Text, View,Image ,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';


function ReadScreen() {
  return (
    <View>
      <Text>Read!</Text>
    </View>
  );
}

function WriteScreen() {
  return (
    <View>
    <View style={{alignItems:'center'}}>
     <TextInput placeholder={"Book's Name"}style={{borderWidth:1.5,width:350,height:35,marginTop:50}}></TextInput>
     <TextInput placeholder={'Author Name'}style={{borderWidth:1.5,width:350,height:35,marginTop:10}}></TextInput>
     <TextInput placeholder={'Write your Story here'} keyboardAppearance={'dark'} style={{borderWidth:1.5,width:350,height:400,marginTop:20,paddingLeft:5,paddingBottom:350}}></TextInput>

<TouchableOpacity> <Text>Submit</Text></TouchableOpacity>
    </View>

    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    
    screenOptions={({ route }) => ({

      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        
        if (route.name === 'Read') {
          
          return <Image style={{height:40,width:40}} source={require('./read.png')} />
          
        }
        
        else if (route.name === 'Write') {
          return <Image style={{height:40,width:40}} source={require('./write.png')} />
          
              
        }

        // You can return any component that you like here!
        
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>

      <Tab.Screen name="Read" component={ReadScreen}/>

      <Tab.Screen name="Write" component={WriteScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
