import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Header from "../Header";
import { Dropdown } from "react-native-element-dropdown";
import DropdownComponentOne from "../DropDownOne";
import DropdownComponentTwo from "../DropDownTwo";
import AudioTest from "../AudioTest";
import SOSButton from "../SOSButton";
import axios from "axios";

//    } const sendSOS = () => {
//     const disasterType =

const HomeScreen = ({ navigation }) => {
  const data1 = [
    { label: "Landslide", value: "1" },
    { label: "Flood", value: "2" },
    { label: "Earthquake", value: "3" },
    { label: "Fire", value: "4" },
    { label: "Cyclone", value: "5" },
    { label: "Other", value: "6" },
    // { label: 'Item 7', value: '7' },
    // { label: 'Item 8', value: '8' },
  ];

  const data2 = [
    { label: "1-10", value: "1" },
    { label: "10-50", value: "2" },
    { label: "50-150", value: "3" },
    { label: "150-400", value: "4" },
    { label: "400-900", value: "5" },
    { label: "900+", value: "6" },
  ];

  const [selectedDisasterType, setSelectedDisasterType] = useState(null);
  const [selectedNumberOfPeople, setSelectedNumberOfPeople] = useState(null);
  const [audioFiles, setAudioFiles] = useState([]);
  // audioFiles=[audio1.av,audio2.av]
  const handleSOSButtonPress = () => {
    console.log(`Disaster type: ${selectedDisasterType}`);
    console.log(`Number of people: ${selectedNumberOfPeople}`);
  };
  const [apiData, setApiData] = useState();
  React.useEffect(() => {
    setApiData({
      selectedDisasterType,
      selectedNumberOfPeople,
      audioFiles,
    });
  }, [selectedDisasterType, selectedNumberOfPeople, audioFiles]);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.container2}>
        <Text style={styles.texting}>REPORT A DISASTER</Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.textin}>Type of Disaster:</Text>
        <DropdownComponentTwo
          data={data1}
          state={selectedDisasterType}
          setState={setSelectedDisasterType}
        />
      </View>
      <View style={styles.container3}>
        <Text style={styles.textin}>Number of People Need Help:</Text>
        <DropdownComponentTwo
          data={data2}
          state={selectedNumberOfPeople}
          setState={setSelectedNumberOfPeople}
        />
      </View>
      <View style={styles.container3}>
        <Text style={styles.textin}>Description:</Text>
      </View>
      <View>
        <AudioTest audioFiles={audioFiles} setAudioFiles={setAudioFiles} />
      </View>

      <SOSButton apiData={apiData} />
    </View>
  );
};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e3ebf1",
    height: height,
    width: width,
    margin: 0.7,
    flex: 1,
  },
  texting: {
    color: "#e81e25",
    fontWeight: "bold",
    fontSize: 25,
  },
  container2: {
    width: width,
    height: height / 9,
    alignItems: "center",
    justifyContent: "center",
  },
  container3: {
    width: width,
    height: height / 8,
  },
  textin: {
    fontSize: 23,
    color: "black",
    fontWeight: "bold",
  },
});

export default HomeScreen;
