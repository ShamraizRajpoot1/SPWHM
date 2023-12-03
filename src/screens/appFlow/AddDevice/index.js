import {
  Keyboard,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../../../components/Header';
import {AppStyles} from '../../../services/utilities/AppStyles';
import {Colors} from '../../../services/utilities/Colors';
import {responsiveHeight, responsiveScreenHeight} from 'react-native-responsive-dimensions';
import {scale} from 'react-native-size-matters';
import * as ImagePicker from 'react-native-image-picker';
import { appIcons, appImages } from '../../../services/utilities/Assets';
import InputField from '../../../components/InputField';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../../../components/Button';

const AddDevice = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState('');
  const items = [
    {label: 'Safroon Crocus', value: 'Safroon Crocus'},
    {label: 'Vanila Orchard', value: 'Vanila Orchard'},
    {label: 'Ginsang', value: 'Ginsang'},
   
  ];
  const drawer = () => {
    navigation.openDrawer();
  };
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
  const Add = () =>{
    navigation.navigate('Home')
     }
  return (
    <ImageBackground source={appImages.background} style={{flex:1}}>
      <Header menu={true} onPress={drawer} />
      <KeyboardAvoidingView
        style={{flex: 1,}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            style={{flex: 1}}
            contentContainerStyle={[AppStyles.contentContainer]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              onPress={pickImage}
              style={[
                AppStyles.addCollection,
                {marginTop: responsiveScreenHeight(3), height: responsiveScreenHeight(20)},
              ]}>
              {image ? (
                <Image
                  style={[styles.image, {borderRadius: scale(10)}]}
                  source={image}
                />
              ) : (
                <Image style={styles.image} source={appIcons.camera} />
              )}
              <Text style={styles.camtext}>Add Photo</Text>
            </TouchableOpacity>
            <InputField lebal={'Location'} placeholder={"Sialkot"}  />
            
            <View style={{marginHorizontal: '10%',marginTop:responsiveScreenHeight(2)}}>
              <Text style={AppStyles.field}>Plant Name</Text>
              <View >
                <DropDownPicker
                  items={items.map((item, index) => ({
                    label: item.label,
                    value: item.value,
                    key: index.toString(),
                  }))}
                  arrowColor={Colors.blackText}
                  labelStyle={styles.label}
                  placeholder={' '}
                  dropDownMaxHeight={170}
                  containerStyle={AppStyles.dcontainer}
                  style={AppStyles.Dropdown}
                  setValue={value => setStatus(value)}
                  setOpen={() => setIsOpen(!isOpen)}
                  open={isOpen}
                  value={status}
                  dropDownStyle={AppStyles.dropDownStyle}
                 // dropDownDirection="TOP"
                />
              </View>
            </View>
            <View style={styles.btn}>
              <Button text={'Add Device'} onPress={Add} />
            </View>

          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </ImageBackground>
  );
};

export default AddDevice;

const styles = StyleSheet.create({
  image: {
    height: scale(120),
    width: scale(120),
  },
  btn:{
    marginTop:responsiveScreenHeight(2),
    alignSelf: 'center',
  }
});

