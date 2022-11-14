import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import Loading from "./Loading";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "bb677d30a851c952ab712c00c3f2922c";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const { data: { main: { temp }, weather } } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=48.501717&lon=35.095600&appid=${API_KEY}&units=metric`);
    this.setState({ isLoading: false, temp: temp, condition: weather[0].main });
    //console.log(weather[0].main);
  };

  getLocation = async () => {
    try {
      // throw Error();
      // const response = await Location.requestForegroundPermissionsAsync();
      // console.log(response);
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      //-TODO: - Сделать запрос к API
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Не могу определить местопожение", "Очень грустно :)");
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
