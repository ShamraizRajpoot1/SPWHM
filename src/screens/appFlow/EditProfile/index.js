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
import React, { useState } from 'react';
import Header from '../../../components/Header';
import {AppStyles} from '../../../services/utilities/AppStyles';
import {appIcons, appImages} from '../../../services/utilities/Assets';
import InputField from '../../../components/InputField';
import * as ImagePicker from 'react-native-image-picker';
import { fontSize } from '../../../services/utilities/Fonts';

const EditProfile = ({navigation}) => {
  const [image, setImage] = useState(null);
  const drawer = () => {
    navigation.openDrawer();
  };
  const Back =() =>{
    navigation.goBack();
  }
  const pickImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('ImagePicker Response:', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setImage({ uri: response.assets[0].uri });
      }
    });
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
              <TouchableOpacity onPress={Back}>
                <Text style={AppStyles.red}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={Back}>
                <Text style={AppStyles.red}>Update</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={AppStyles.imageContainer} onPress={pickImage}>
            {image ? (
                <Image
                  style={[AppStyles.image, {borderRadius: scale(10)}]}
                  source={image}
                />
              ) : (
                <Image style={AppStyles.image} source={appIcons.user} />
              )}
              <Text style={[AppStyles.red,{fontWeight:'normal', fontSize:fontSize.lebal}]}>Change Photo</Text>
            </TouchableOpacity >
            <InputField lebal={'Name'} />
            <InputField lebal={'Email'} />
            <InputField lebal={'Phone'} />
            
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
