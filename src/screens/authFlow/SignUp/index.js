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

const SignUp = ({navigation}) => {
  const Login = () =>{
    navigation.navigate('Login')
     }
     const Signup =()=>{
      navigation.navigate('DrawerNavigation',{screen:'Home'})
     }
  return (
    <View style={styles.container}>
      <Text style={styles.lebal}>SignUp</Text>
      <InputField lebal={'Email'} placeholder={"s@gmail.com"}  />
      <InputField lebal={'Password'} secureTextEntry={true} />
      <InputField lebal={'Confirm Password'} secureTextEntry={true} />
      <View style={styles.btnContainer}>
        <Button text={'SignUp'} onPress={Signup}/>
      </View>
      <View
        style={[styles.btnContainer, {marginTop: responsiveScreenHeight(15)}]}>
        <Button text={'Login'} background={Colors.fieldText} onPress={Login}/>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lebal: {
    alignSelf: 'center',
    marginTop: responsiveScreenHeight(15),
    fontSize: fontSize.plus,
    fontWeight: 'bold',
    color: '#000000',
  },
  btnContainer: {
    marginTop: responsiveScreenHeight(5),
    marginLeft: responsiveScreenWidth(20),
  },
});
