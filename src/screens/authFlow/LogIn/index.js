import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputField from '../../../components/InputField';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {fontSize} from '../../../services/utilities/Fonts';
import Button from '../../../components/Button';
import {Colors} from '../../../services/utilities/Colors';

const Login = ({navigation}) => {
  const SignUp = () =>{
 navigation.navigate('SignUp')
  }
  const Login = () =>{
    navigation.navigate('App')
     }
  return (
    <View style={styles.container}>
      <Text style={styles.lebal}>Login</Text>
      <InputField lebal={'Email'} placeholder={"s@gmail.com"}  />
      <InputField lebal={'Password'} secureTextEntry={true} />
      <View style={styles.btnContainer}>
        <Button text={'Login'} onPress={Login} />
      </View>
      <View
        style={[styles.btnContainer, {marginTop: responsiveScreenHeight(20)}]}>
        <Button text={'SignUp'} background={Colors.fieldText} onPress={SignUp}/>
      </View>
    </View>
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
    color: '#000000',
  },
  btnContainer: {
    marginTop: responsiveScreenHeight(5),
    marginLeft: responsiveScreenWidth(20),
  },
});
