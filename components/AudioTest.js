import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import axios from 'axios';




export default function AudioTest() {
  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }
  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
  
    });
  
    setRecordings(updatedRecordings);
  // axios.post('http://localhost:5000/upload_audio', { audioUri: recording.getURI() })
  // .then(response => {
  //   console.log(response.data.message);

  // })
  // .catch(error => {
  //   console.error(error);
  // });
  
// async function response() { 
//   await fetch('http://localhost:5000/upload_audio', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ audioUri: recording.getURI() })
//     });
//     const data = await response.json();
    
//     console.log(data.message);
//   }
}
  

  // async function stopRecording() {
  //   setRecording(undefined);
  //   await recording.stopAndUnloadAsync();

  //   let updatedRecordings = [...recordings];
  //   const { sound, status } = await recording.createNewLoadedSoundAsync();
  //   updatedRecordings.push({
  //     sound: sound,
  //     duration: getDurationFormatted(status.durationMillis),
  //     file: recording.getURI()

  //   });
    
  //   setRecordings(updatedRecordings);

  // const response =  fetch('http:localhost:5000/upload_audio', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({ audioUri: recording.getURI() })
  // });
  // const data =  response.json();

  // console.log(data.message);
  // }


 

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>Recording {index + 1}</Text>
          <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
         
        </View>
      );
    });
  }

  return (
    <View style={styles.container_a}>
      <Text>{message}</Text>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording} />
        {/* icon={<FontAwesome name = {recording ? 'stop': 'microphone'} size = {24} color = "white" />}
       */}
      {getRecordingLines()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container_a: {
    // position: 'absolute',
    flex: 1,
    backgroundColor: '#e3ebf1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    flex: 1,
    margin: 16
  },
  button: {
    margin: 16
  },

  // recordButton: {
  //   backgroundColor : recording ? '#e74c3c' : '#2ecc71',
  //   borderRadius: 50,
  //   width: 64,
  //   height : 64,
  //    alignItems : 'center',
  //    justifyContent:'center',
  //    marginBottom: 16,
  


  }
);
