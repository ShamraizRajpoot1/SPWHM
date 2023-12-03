import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import {AppStyles} from '../../../services/utilities/AppStyles';
import {appIcons, appImages} from '../../../services/utilities/Assets';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';

const Profile = ({navigation}) => {
  const drawer = () => {
    navigation.openDrawer();
  };
  const Edit = () => {
    navigation.navigate('EditProfile');
  };
  return (
    <ImageBackground source={appImages.background} style={{flex: 1}}>
      <Header menu={true} onPress={drawer} />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            style={{flex: 1}}
            contentContainerStyle={[AppStyles.contentContainer]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <View style={AppStyles.row}>
              <TouchableOpacity >
                {/* <Text style={AppStyles.red}>Back</Text> */}
              </TouchableOpacity>
              <TouchableOpacity onPress={Edit}>
                <Text style={AppStyles.red}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={AppStyles.imageContainer}>
              <Image style={AppStyles.image} source={appIcons.user} />
              
            </View>
            <InputField lebal={'Name'} />
            <InputField lebal={'Email'} />
            <InputField lebal={'Phone'} />
            <View style={AppStyles.btnContainer}>
              <Button text={'Logout'} />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Profile;

const styles = StyleSheet.create({});
