import { StyleSheet } from "react-native";
import { fontSize } from "../Fonts";
import { scale } from "react-native-size-matters";
import { Colors } from "../Colors";
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from "react-native-responsive-dimensions";

export const AppStyles = StyleSheet.create({
    
      contentContainer: {
        flexGrow: 1,
      },
      input: {
        height: '100%',
        width: '80%',
        padding: 0,
        fontSize: fontSize.fieldText,
        borderRadius: scale(6),
        color: Colors.fieldText,
      },
      productImage: {
        marginVertical:responsiveScreenHeight(1),
        width: responsiveScreenWidth(12),
        height: responsiveScreenHeight(5),
      },
      priceContainer: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      arrowRight: {
        width: scale(13),
        height: scale(13),
        tintColor: Colors.blackText,
        marginLeft: responsiveScreenWidth(2),
      },
      line: {
        height: responsiveScreenWidth(0.2),
        backgroundColor: Colors.border1,
        marginHorizontal: 10,
      },
      addCollection: {
        alignSelf: 'center',
        width: '90%',
        height: responsiveScreenHeight(10),
        borderWidth: scale(1),
        borderRadius: scale(6),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.fieldBackground,
        borderColor: Colors.border1,
      },
      field: {
        fontSize: fontSize.lebal,
        color:Colors.lebal
      },
      dcontainer: {
    
        height: responsiveHeight(7),
        borderRadius: 5,
        width: responsiveWidth(80),
        marginTop: responsiveHeight(1),
      },
      Dropdown: {
        backgroundColor: Colors.fieldBackground,
        borderRadius: scale(5),
       // borderColor: Colors.border1,
        width: responsiveWidth(80),
      },
      dropDownStyle: {
        backgroundColor: Colors.fieldBackground,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
       // borderColor: Colors.border1,
        width: responsiveWidth(90),
      },
      btnContainer: {
        marginTop: responsiveScreenHeight(5),
        marginLeft: responsiveScreenWidth(20),
      },
      imageContainer: {
        marginVertical: responsiveHeight(1),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
      image: {
        height: responsiveWidth(30),
        width: responsiveWidth(30),
        borderRadius: scale(100),
      },
      red:{
        color:Colors.red,
        fontSize: fontSize.h1,
        fontWeight:'bold'
      },
      row:{
        marginTop:responsiveScreenHeight(1),
        marginHorizontal:responsiveWidth(5),
        flexDirection:'row',
        justifyContent:'space-between'
      }
})