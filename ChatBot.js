import { StyleSheet, Text, View } from 'react-native';
import Chatbot from './src';

export default function Home() {
  return (
    <View style={styles.container}>
      <Chatbot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
// import React from 'react';
// import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import FlashcardApp from './Flashcard.js';
// import MapScreen from './Map.js';

// const Stack = createStackNavigator();

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     width: 150,
//     height: 150,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     margin: 10,
//     borderRadius: 25, // Make the button round
//     alignItems: 'center', // Center content horizontally
//     justifyContent: 'center', // Center content vertically
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold', // Make the text bold
//     fontFamily: 'cursive', // Use a fancy font (you can replace 'cursive' with your preferred font)
//   },
// });

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Flashcards" component={FlashcardApp} />
//         <Stack.Screen name="Map" component={MapScreen} /> {/* Add this line for the Map screen */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Image source={require('./assets/LingoAlly.png')} style={styles.logo} />
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Flashcards')}>
//           <Text style={styles.buttonText}>Learn</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Connect')}>
//           <Text style={styles.buttonText}>Connect</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
//           <Text style={styles.buttonText}>Discuss</Text> {/* Change "Map" to "Discuss" here */}
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

