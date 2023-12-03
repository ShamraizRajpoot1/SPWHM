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
import { Colors } from '../../../services/utilities/Colors';
import { scale } from 'react-native-size-matters';
import { LineChart } from 'react-native-chart-kit';
import { responsiveScreenHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { fontSize } from '../../../services/utilities/Fonts';

  const PlantInfo = ({navigation}) => {
    const [image, setImage] = useState(null);
    const drawer = () => {
      navigation.openDrawer();
    };
    const Back =() =>{
      navigation.goBack();
    }
    const data = {
        labels: ['12AM', '3AM', '6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM'], // Updated labels for hours
        datasets: [
          {
            data: [25, 30, 28, 22, 26, 24, 28, 29, 25], // Temperature data
            color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red for temperature
            strokeWidth: 2,
          },
          {
            data: [60, 50, 55, 70, 65, 75, 68, 62, 120], // Humidity data
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Blue for humidity
            strokeWidth: 2,
          },
          {
            data: [40, 35, 45, 30, 38, 42, 36, 40, 38], // Soil moisture data
            color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`, // Green for soil moisture
            strokeWidth: 2,
          },
        ],
      };
    
      const legend = [
        { label: 'Temperature', color: 'rgba(255, 0, 0, 1)' },
        { label: 'Humidity', color: 'rgba(0, 0, 255, 1)' },
        { label: 'Soil Moisture', color: 'rgba(0, 128, 0, 1)' },
      ];
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
                 
                </TouchableOpacity>
                <TouchableOpacity >
                  <Image source={appIcons.download} style={styles.icon} />
                </TouchableOpacity>
              </View>
              <View style={styles.graphContainer}>
              <View style={{  marginBottom: 10 }}>
        {legend.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
            <View style={{ width: responsiveWidth(3), height: responsiveWidth(3), backgroundColor: item.color, marginRight: 5 }} />
            <Text style={{color:Colors.lebal, fontSize: fontSize.fieldText,}}>{item.label}</Text>
          </View>
        ))}
      </View>

      <LineChart
        data={data}
        width={350}
        height={300}
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '1',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  };
  
  export default PlantInfo;
  
  const styles = StyleSheet.create({
    icon:{
        tintColor:Colors.lebal,
        height:scale(25)
    },
    graphContainer:{
        alignSelf:'center'
    }
  });
  