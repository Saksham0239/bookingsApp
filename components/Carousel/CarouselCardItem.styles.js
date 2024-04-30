import { StyleSheet } from "react-native";
import { Colors,ITEM_WIDTH } from "../../constants/commonConstants";


export const caraouselCardItemStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors?.white,
        borderRadius: 20,
        width: ITEM_WIDTH,
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    image: {
        width: ITEM_WIDTH,
        height: 200,
        borderRadius:10,
    },
    header: {
        color: Colors?.textColor,
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 10
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20
    }
})