// import React from 'react';

// import {
//   View,
//   Text,
//   StyleSheet
// } from 'react-native';

// const App = () => {
//   return(
//     <View style = {styles.container}>
//       <Text style = {styles.title}>Ninrat Kettrakul</Text>
//       <Text>Information Technology</Text>
//       <Text style={{color:'pink',fontSize:18}}>Thai-Nichi Institute of Technology</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container : {
//     flex:1,
//     backgroundColor:'#F3B279',
//     alignItems:'center',
//     justifyContent:'center'
//   },
//   title : {
//     fontSize : 25,
//     alignContent:'center',
//     fontWeight:'bold',
//     color:'blue'
//   }
// });

// export default App;

// import React from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     TextInput,
//     Button
//   } from 'react-native';
//   const App = () => (
//     <View style={{padding:50}}>
//       <Text style={styles.title}>React Native</Text>
//     </View>
//   )


//   const styles = StyleSheet.create({
//   container : {
//     flex:1,
//     backgroundColor:'#FFF5EE',
//     paddingVertical:16,
//     paddingHorizontal:50
//     // alignItems:'center',
//     // justifyContent:'center'
//   },
//   title : {
//         fontSize : 25,
//         //alignContent:'center',
//         fontWeight:'bold',
//         color:'#808080',
//         marginTop:16,
//         paddingVertical:15,
//         borderWidth:4,
//         backgroundColor:'#F0FFF0',
//         textAlign:'center',
//         borderRadius:7
//       }
//     });

//     export default App;


// import React from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     TextInput,
//     Button
//   } from 'react-native';
//   const App = () => (
//     <View style={{padding:50}}>
//       <View 
//       style={{
//         flexDirection:'row',
//         justifyContent: 'space-between',
//         alignItems:'center'
//         }}> 
//           <TextInput 
//           placeholder='React Course'
//           style={{width:'80%',borderColor:'black',borderWidth:1,padding:10,}}
//           />
//           <Button title="ADD"/>
//       </View>
//     </View>
//   )


//   const styles = StyleSheet.create({
//   container : {
//     flex:1,
//     backgroundColor:'#FFF5EE',
//     paddingVertical:16,
//     paddingHorizontal:50
//     // alignItems:'center',
//     // justifyContent:'center'
//   },
//   title : {
//         fontSize : 25,
//         //alignContent:'center',
//         fontWeight:'bold',
//         color:'#808080',
//         marginTop:16,
//         paddingVertical:15,
//         borderWidth:4,
//         backgroundColor:'#F0FFF0',
//         textAlign:'center',
//         borderRadius:7
//       }
//     });

//     export default App;


// import React from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     TextInput,
//     Button
//   } from 'react-native';
//   const Cat = () => (
//     <View >
//       <Text>I am also a cat!!!</Text>
//     </View>
//   )
//   const Cafe = () => {
//     return (
//     <View>
//       <Text>Welcome!</Text>
//       <Cat/>
//       <Cat/>
//       <Cat/>
//     </View>
//     );
//   }


//   const styles = StyleSheet.create({
//   container : {
//     flex:1,
//     backgroundColor:'#FFF5EE',
//     paddingVertical:16,
//     paddingHorizontal:50
//     // alignItems:'center',
//     // justifyContent:'center'
//   },
//   title : {
//         fontSize : 25,
//         //alignContent:'center',
//         fontWeight:'bold',
//         color:'#808080',
//         marginTop:16,
//         paddingVertical:15,
//         borderWidth:4,
//         backgroundColor:'#F0FFF0',
//         textAlign:'center',
//         borderRadius:7
//       }
//     });

//     export default Cafe;




// import React from 'react';
// import {
//     View,
//     Text,
//   } from 'react-native';

//   const getFullName = (firstName, secondName, thirdName) => {
//     return firstName + " " + secondName + " " +thirdName; 
//   }
//   const Cat = () => {
//   return (
//     <Text>{getFullName("Ryoma","Kuroko","Moriarty")}</Text>
//   )
//   };

//     export default Cat;


// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// const Greeting = (props)=>{
//   // const {name} = props;
//   return(
//     <View style = {{alignItems:"center"}}>
//       <Text>Hello {props.name}</Text>
//     </View>
//   )
// }

// const LotsOfGreeting = () => {
//   return (
//     <View style = {{alignItems:'center',top:50}}>
//       <Greeting name = "Mery Christmas"/>
//       <Greeting name = "Happy New Year"/>
//       <Greeting name = "Songkran Fastival"/>
//     </View>
//   )
// }

// export default LotsOfGreeting

// const styles = StyleSheet.cr style = {{alignItems:'center',top:50}}eate({})

// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// const MyCustomTExtWith = (props)=>{
//   // const {name} = props;
//   return(
//     <View style = {{alignItems:"center"}}>
//       <Text>Your First Name is {props.fname} and Last Name is {props.lname}</Text>
//     </View>
//   )
// }

// const App = () => {
//   return (
//     <View style = {{alignItems:'center',justifyContent:'center',flex:1}}>
//       <MyCustomTExtWith fname = "Heart" lname = "Hye" />
//       <MyCustomTExtWith fname = "Kraaaaaa" lname = "Kye" />

//     </View>
//   )
// }

// export default App

// import React from 'react'
// import {useState, useMemo} from 'react'
// import { Button, Text, View , StyleSheet } from 'react-native'

// const App = () => {
//   //useState
//   const[number,setNumber] = useState(0)
//   const[isRandom,setRandom] = useState(false);
//   const randomWithoutMemo = Math.random();
//   const randomNumber = useMemo(()=>{
//     return Math.random();
//   }, [isRandom]
//   );
//   return (
//     <View style = {styles.container}>
//       <View style = {styles.countContainer}>
//         <Button title="down" onPress={()=>setNumber(number-1)}/>
//         <Text style={styles.countNumber}>{number}</Text>
//         <Button title="up" onPress={()=>setNumber(number+1)}/>
//       </View>
//       <Text>without Memo : {randomWithoutMemo}</Text>
//       <Text>Use Memo : {randomNumber}</Text>
//       <Button
//       title = "Rabdom"
//       onPress = {()=>{setRandom(!isRandom)}}
//       />
//     </View>
//   )
// }

// export default App


// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: '#ffffff',
//   padding: 10,
//   },
//   countContainer: {
//   flexDirection: 'row',
//   margin: 30,
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   },
//   countNumber: {
//   fontSize: 20,
//   fontWeight: 'bold',
//   color: 'red'
//   }
//   });


// import { react } from '@babel/types'
// import React from 'react'
// import {useState, useCallback} from 'react'
// import { 
//   StyleSheet,
//   Text,
//   ScrollView ,
//   SafeAreaView ,
//   RefreshControl} from 'react-native'

// const wait = (timeout)=>{
//   return new Promise(resolve => setTimeout(resolve,timeout))
// }

// const App = () => {
//   const[refreshing, setRefreshing] = React.useState(false);
//   const onRefresh = React.useCallback(()=>{
//     setRefreshing(true);
//     wait(2000).then(()=>setRefreshing(false));
//   },[])
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <ScrollView
//       contentContainerStyle = {styles.scrollView}
//       refreshControl = {
//         <RefreshControl refreshing = {refreshing} onRefresh={onRefresh}/>
//       }
//       >
//       <Text>Pull Down to se RfreshControl indicator</Text>
//       </ScrollView> */}

//     </SafeAreaView>
//   )
// }


// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//   },
//    scrollView: {
//    flex: 1,
//    backgroundColor: 'pink',
//    alignItems: 'center',
//    justifyContent: 'center',
//   },
// });
//    export default App;


// import { react } from '@babel/types'
// import React from 'react'
// import {useState} from 'react'
// import { 
//   StyleSheet,
//   Text,
//   SafeAreaView ,
//   TextInput} from 'react-native'

// const wait = (timeout)=>{
//   return new Promise(resolve => setTimeout(resolve,timeout))
// }

// const UselessTextInput = () => {
//   const [text,onChangeText] = useState("Useless Text: ")
//   const[number,onChangeNumber] = useState(null);

//   return (
//     <SafeAreaView style={styles.container}>
//       <TextInput 
//       style = {styles.input}
//       onChangeText = {onChangeText}
//       value = {text}
//       />
//        <TextInput 
//       style = {styles.input}
//       onChangeText = {onChangeNumber}
//       value = {number}
//       placeholder = "Useless plaeholder"
//       keyboardType = "numeric"
//       />
//       <Text>{text}</Text>

//     </SafeAreaView>
//   )
// }


// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//   },
//    scrollView: {
//    flex: 1,
//    backgroundColor: 'pink',
//    alignItems: 'center',
//    justifyContent: 'center',
//   },
//   input :{
//     height : 40,
//     margin : 12,
//     borderWidth : 1 ,
//     padding : 10,
//   }
// });
//    export default UselessTextInput;



import { react } from '@babel/types'
import React from 'react'
import { useState } from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  View
} from 'react-native'

const App = (timeout) => {
  const [inputValue, setInputValue] = useState('')
  const checkValueIsNumberOrNot = () => {
    if (isNaN(inputValue)) {
      alert("It is not a Number");
    }
    else {
      alert("It is a Number");
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Text"
          style={styles.textInputStyle}
          onChangeText={(inputValue) => { setInputValue(inputValue) }
          }
        />
        <Button
          title="Chest Value Is Number Or Not"
          color="#606070"
          onPress={checkValueIsNumberOrNot}
        />


      </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  textInputStyle: {
    textAlign: 'center',
    height: 50,
    width: '70%',
    marginBottom: 10,
    borderColor: 'black',
  },
});

