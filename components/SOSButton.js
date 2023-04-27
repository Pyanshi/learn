import React, { useState } from "react";
import { View, TouchableOpacity, Animated, Text } from "react-native";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const SOSButton = ({ apiData }) => {
  const [animation] = useState(new Animated.Value(1));

  const handlePress = () => {
    // send apiData in api as payload
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
    // Perform SOS action here
  };

  const waveScale = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [0.8, 2],
  });

  const waveOpacity = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [1, 0],
  });

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          width: 200,
          height: 200,
          borderRadius: 40,

          position: "relative",
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",

          marginTop: width / 5,
        }}
      >
        <Animated.View
          style={{
            // position: 'relative',

            width: 200,
            height: 200,
            borderRadius: 40,
            borderWidth: 4,

            // position: 'relative',

            borderColor: "white",
            transform: [{ scale: waveScale }],
            opacity: waveOpacity,
          }}
        />
      </View>
      {/* <Text style={{ color: 'white', fontWeight: 'bold' ,padding:20 }}>Report A Disaster</Text> */}
      <Text>I'm another button</Text>
    </TouchableOpacity>
  );
};

export default SOSButton;

// import React, { useState } from 'react';
// import { View, TouchableOpacity, Animated } from 'react-native';
// import { Dimensions } from 'react-native';

// const { height, width } = Dimensions.get('window');

// const SOSButton = () => {
//   const [animation] = useState(new Animated.Value(1));

//   const handlePress = () => {
//     Animated.sequence([
//       Animated.timing(animation, {
//         toValue: 2,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//       Animated.timing(animation, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//     ]).start();
//     // Perform SOS action here
//   };

//   const waveScale = animation.interpolate({
//     inputRange: [1, 2],
//     outputRange: [0.8, 2],
//   });

//   const waveOpacity = animation.interpolate({
//     inputRange: [1, 2],
//     outputRange: [1, 0],
//   });

//   return (
//     <TouchableOpacity onPress={handlePress}>

//       <View

//         style={{
//           width: 100,
//           height: 100,
//           borderRadius: 40,

//           position: 'relative',
//           backgroundColor: 'red',
//           justifyContent: 'center',
//           alignItems: 'center',

//           marginTop: width/5,
//         }}>
//         <Animated.View
//           style={{

//             // position: 'relative',

//             width: 100,
//             height: 100,
//             borderRadius: 40,
//             borderWidth: 4,

//             // position: 'relative',

//             borderColor: 'white',
//             transform: [{ scale: waveScale }],
//             opacity: waveOpacity,
//           }}
//         />
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default SOSButton;

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const SOSButton = () => {
//   const buttonClickedHandler = () => {
//     console.log('You have been clicked a button!');
//     // do something
//   };
//   return (
//     <View style={styles.screen}>
//       <TouchableOpacity
//         onPress={buttonClickedHandler}
//         style={styles.roundButton2}>
//         <Text style={styles.texting}>Report</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   texting: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   roundButton2: {
//     marginTop: 20,
//     width: 150,
//     height: 150,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 100,
//     backgroundColor: '#ff3131',
//     borderColor: 'white',
//   },
// });

// export default SOSButton;

// // import React, { useState } from 'react';
// // import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// // const SOSButton = () =>  {
// //   // const [animation] = useState()
// //   // const [animation] = useState(new Animated.Value(1));
// //   const buttonClickedHandler = () => {
// //     console.log('You have been clicked a button!');
// //     // do something
// //   };

// // // const handlePress = () => {
// //   //   Animated.sequence([
// //   //     Animated.timing(animation, {
// //   //       toValue: 2,
// //   //       duration: 1000,
// //   //       useNativeDriver: true,
// //   //     }),
// //   //     Animated.timing(animation, {
// //   //       toValue: 1,
// //   //       duration: 1000,
// //   //       useNativeDriver: true,
// //   //     }),
// //   //   ]).start();
// //   //   // Perform SOS action here
// //   // };

// //   // const waveScale = animation.interpolate({
// //   //   inputRange: [1, 2],
// //   //   outputRange: [0.8, 2],
// //   // });

// //   // const waveOpacity = animation.interpolate({
// //   //   inputRange: [1, 2],
// //   //   outputRange: [1, 0],
// //   // });
// //   return (
// //     <View style={styles.screen}>

// //       <TouchableOpacity
// //         onPress={buttonClickedHandler}
// //         style={styles.roundButton2}>
// //         <Text style = {styles.texting}>Report </Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

// // // Styles
// // const styles = StyleSheet.create({

// //   screen: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   texting: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //   },
// //   roundButton2: {
// //     marginTop: 20,
// //     width: 150,
// //     height: 150,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     padding: 10,
// //     borderRadius: 100,
// //     backgroundColor: '#ff3131',
// //     borderColor: 'white'
// //   },
// // });

// // export default SOSButton;
