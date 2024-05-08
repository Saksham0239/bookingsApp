import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/commonConstants";

export const cartScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.white,
    padding: 20,
    marginBottom:5,
  },
  text: {
    fontSize: 30,
  },
  checkOutButtonStyles:{
    marginBottom:40,
    height:'50%',
  },
  amountText:{
    fontSize:20,
    paddingVertical:5,
    fontFamily:"roboto-light",
  },
  boldText:{
    fontFamily:"roboto-bold",
  },
  fixedContainer:{
   height:110,
   padding:7,
   backgroundColor:Colors?.offWhite,
   borderRadius:10,
  }
});
