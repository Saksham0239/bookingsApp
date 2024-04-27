import { View, TextInput, Text } from "react-native";
import { searchBarStyles } from "./SearchBar.styles";
import CustomButton from "../CustomButton/CustomButton";
import { Colors } from "../../constants/commonConstants";

const SearchBar = ({ onChangeSearchText, searchText,onCancelButtonClick }) => {
  return (
    <View style={searchBarStyles?.searchBarContainer}>
      <TextInput
        value={searchText}
        style={searchBarStyles?.searchBarInput}
        onChangeText={onChangeSearchText}
      />
      {/* <CustomButton
        clickHandler={onCancelButtonClick}
        bg={Colors?.cobaltBlue}
        title="cancel"
        containerStyles={{
          width: "30%",
          paddingVertical: 4,
          paddingHorizontal: 2,
        }}
        textStyles={{ fontSize: 18 }}
      /> */}
    </View>
  );
};

export default SearchBar;
