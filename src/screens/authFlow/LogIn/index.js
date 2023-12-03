import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputField from '../../../components/InputField';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {fontSize} from '../../../services/utilities/Fonts';
import Button from '../../../components/Button';
import {Colors} from '../../../services/utilities/Colors';
import { appImages } from '../../../services/utilities/Assets';
import { AppStyles } from '../../../services/utilities/AppStyles';

const Login = ({navigation}) => {
  const SignUp = () =>{
 navigation.navigate('SignUp')
  }
  const Login = () =>{
    navigation.navigate('DrawerNavigation',{screen:'Home'})
     }
  return (
    <ImageBackground style={{flex:1}} source={appImages.background}>
    <View style={styles.container}>
      <Text style={styles.lebal}>Login</Text>
      <InputField lebal={'Email'} placeholder={"s@gmail.com"}/>
      <InputField lebal={'Password'} secureTextEntry={true} />
      <View style={AppStyles.btnContainer}>
        <Button text={'Login'} onPress={Login} />
      </View>
      <View
        style={[AppStyles.btnContainer, {marginTop: responsiveScreenHeight(20)}]}>
        <Button text={'SignUp'} background={Colors.fieldText} onPress={SignUp}/>
      </View>
    </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lebal: {
    alignSelf: 'center',
    marginTop: responsiveScreenHeight(20),
    fontSize: fontSize.plus,
    fontWeight: 'bold',
    color: Colors.lebal,
  },
  
});
