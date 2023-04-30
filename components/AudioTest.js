// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { Button, StyleSheet, Text, View } from "react-native";
// import { Audio } from "expo-av";
// import axios from "axios";

// export default function AudioTest({ audioFiles, setAudioFiles }) {
import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

export default function AudioTest() {
  const [recording, setRecording] = React.useState();

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    console.log(recording);
    let b = await fetch(recording?._uri).then((r) => r.blob());
    const obj = {
      config: {
        spampleRate: recording.spampleRate,
      },
      audio: {
        uri: recording?._uri,
      },
    };
    axios.post("", obj);
    console.log(b);
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container_a: {
    // position: 'absolute',
    flex: 1,
    backgroundColor: "#e3ebf1",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    flex: 1,
    margin: 16,
  },
  button: {
    margin: 16,
  },

  // recordButton: {
  //   backgroundColor : recording ? '#e74c3c' : '#2ecc71',
  //   borderRadius: 50,
  //   width: 64,
  //   height : 64,
  //    alignItems : 'center',
  //    justifyContent:'center',
  //    marginBottom: 16,
});
