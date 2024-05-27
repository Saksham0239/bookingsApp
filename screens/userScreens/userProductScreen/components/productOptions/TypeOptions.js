import { StyleSheet, Text, Pressable, View, ScrollView } from "react-native";
import { Colors } from "../../../../../constants/commonConstants";
import { useReducer, useState } from "react";
import { defaultStateReducer } from "../../../../../utils/CommonUtils";

const TypeOptions = () => {
  const initialState = {
    typeOptions: {
      options: [
        { name: "Lemon,Lime", isClicked: false },
        { name: "Lemon", isClicked: false },
        { name: "Lime,Lemon Lime", isClicked: false },
        { name: "Sprite", isClicked: false },
        { name: "lemon", isClicked: false },
      ],
    },
  };
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);
  const { typeOptions } = state;

  const optionsStylesClicked = {
    borderStyle: "solid",
    borderColor: Colors?.darkBlue,
    backgroundColor: Colors?.lightBlue,
  };

  const optionsStylesDefault = {
    borderStyle: "dashed",
  };

  const optionClickHandler = (name) => {
    typeOptions.options.forEach((element) => {
      if (element.name === name) {
        element.isClicked = true;
      } else {
        element.isClicked = false;
      }
    });
    dispatch({
      payload: {
        typeOptions: {
          options: typeOptions.options,
        },
      },
    });
  };

  return (
    <ScrollView horizontal={true} style={styles?.container}>
      {typeOptions.options.map((option) => {
        return (
          <Pressable
            key={option.name}
            style={
              option.isClicked
                ? { ...styles?.typeOption, ...optionsStylesClicked }
                : { ...styles?.typeOption, ...optionsStylesDefault }
            }
            onPress={() => optionClickHandler(option.name)}
          >
            <Text>{option.name}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default TypeOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  typeOption: {
    height: 50,
    width: 150,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});
