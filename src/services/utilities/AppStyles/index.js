import { StyleSheet } from "react-native";
import { fontSize } from "../Fonts";
import { scale } from "react-native-size-matters";
import { Colors } from "../Colors";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

export const AppStyles = StyleSheet.create({
    input: {
        height: '100%',
        width: '80%',
        padding: 10,
        fontSize: fontSize.fieldText,
        borderRadius: scale(6),
        //color: Colors.fieldText,
      },
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
})