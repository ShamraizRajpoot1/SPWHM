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
import { appImages } from '../../services/utilities/Assets';

const DrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

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
        <Image source={appImages.logo3} style={styles.logo}/>
        <TouchableOpacity onPress={() => navigateToScreen('Home')}>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('AddDevice')}>
          <Text style={styles.text}>Add Device</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('ProfileStack')}>
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
        
      </View>
    </LinearGradient>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: responsiveScreenWidth(5),
    borderTopRightRadius: scale(30),
    borderBottomRightRadius: scale(30),
  },
  container: {
    flex: 1,
    paddingTop: responsiveHeight(2),
  },
  text: {
    fontSize: responsiveFontSize(3),
    marginVertical: responsiveScreenHeight(2),
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  logo:{
    width:scale(150),
    height:scale(150),
    alignSelf:'center'
  }
});
