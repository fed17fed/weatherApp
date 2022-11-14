import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#000046', '#1CB5E0'],
    title: 'На улице дождь!',
    subtitle: 'А значит скоро будет радуга.'
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#56CCF2', '#2F80ED'],
    title: 'На улице солнышко!',
    subtitle: 'Берите с собой хорошее настроение.'
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#757F9A', '#D7DDEB'],
    title: 'На улице облака!',
    subtitle: 'Пасмурно, но дождя не будет.'
  },
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#141E30', '#243B55'],
    title: 'Сиди дома!',
    subtitle: 'Ты видишь что на улице?'
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#3a7bd5', '#3a6073'],
    title: 'Возми зонтик!',
    subtitle: 'Возможно скоро дождь усилится.'
  },
  Dust: {
    iconName: 'weather-windy-variant',
    gradient: ['#879891', '#947168'],
    title: 'Пыльно!',
    subtitle: 'Лучше закройте окна.'
  },
  Smoke: {
    iconName: 'weather-windy',
    gradient: ['#56CCF2', '#2f80ED'],
    title: 'На улице смог :(!',
    subtitle: 'Не советую выходить без необходимости.'
  },
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#3E5151', '#DECBA4'],
    title: 'На улице туман!',
    subtitle: 'Внимательно смотрите себе под ноги.'
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#606c88', '#3f4c6b'],
    title: 'На улице туман!',
    subtitle: 'Внимательно смотрите себе под ноги.'
  },
  Snow: {
    iconName: 'snowflake',
    gradient: ['#83a4d4', '#b6fbff'],
    title: 'На улице снежок!',
    subtitle: 'Одевайтесь по теплее, берите с собой лижи.'
  }

}

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textConteiner}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temp: {
    color: "white",
    fontSize: 42,
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left"
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
    textAlign: "left"
  },
  textConteiner: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  }
})
