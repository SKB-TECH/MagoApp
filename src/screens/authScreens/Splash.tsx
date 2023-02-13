import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {COLORS} from '../../Constantes/Constantes';
import Style_splash from '../../Styles/Style_splash';
import {Circle} from 'react-native-animated-spinkit';
import {Image} from 'react-native';
const Splash = ({navigation: navigation}) => {
  setTimeout(() => {
    navigation.replace('Welcome');
  }, 2000);
  return (
    <View style={Style_splash.container}>
      <StatusBar backgroundColor={COLORS.blue} hidden={true} />
      <View style={Style_splash.logo}>
        <Image
          source={require('../../assets/logos/logo.png')}
          style={Style_splash.img}
        />
      </View>
      <Circle size={40} color={COLORS.blanc} style={Style_splash.load} />
    </View>
  );
};

export default Splash;
