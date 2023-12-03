import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { Colors } from '../../services/utilities/Colors';
import { scale } from 'react-native-size-matters';
import { appIcons, appImages } from '../../services/utilities/Assets';

const Header = (props) => {

  return (
    <LinearGradient
    colors={Colors.linearGradient}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={[
        styles.linearGradient,
      ]}
    >
      <View style={styles.container}>
       {props.menu &&
        <TouchableOpacity onPress={props.onPress}>
        <Image source={appIcons.menu} style={styles.logo}/>
        </TouchableOpacity>}
        {props.back &&
        <TouchableOpacity onPress={props.press}>
        <Image source={appIcons.back} style={styles.logo}/>
        </TouchableOpacity>}
      </View>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  linearGradient: {
    height:responsiveScreenHeight(8),
    width:'100%',
    paddingHorizontal: responsiveScreenWidth(5),
  },
  container: {
    flex: 1,
   // paddingTop: responsiveHeight(2),
    justifyContent:'center'
  },
  text: {
    fontSize: responsiveFontSize(3),
    marginVertical: responsiveScreenHeight(2),
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  logo:{
    width:scale(30),
    height:scale(30),
  }
});
