import { View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { searchBarStyles } from "./SearchBar.styles";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Item from "./Item";
import { useEffect, useRef } from "react";

const SearchBar = ({
  onChangeSearchText,
  searchText,
  onCancelButtonClick,
  filteredData,
  onTextFocus,
  searching,
}) => {
  const textSearchRef = useRef(null);

  useEffect(() => {
    if (searching) {
      textSearchRef.current.focus();
    }
  });

  const renderItemsFlatList = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <View style={searchBarStyles?.searchBarContainer}>
      <View style={searchBarStyles?.innerContainer}>
        <AntDesign
          style={searchBarStyles?.iconStyles}
          name="search1"
          size={20}
          color="black"
        />
        <TextInput
          ref={textSearchRef}
          onFocus={onTextFocus}
          placeholder="search here"
          value={searchText}
          style={searchBarStyles?.searchBarInput}
          onChangeText={onChangeSearchText}
        />
        <TouchableOpacity onPress={onCancelButtonClick}>
          <Entypo name="cross" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {filteredData && searching && (
        <FlatList
          data={filteredData}
          renderItem={renderItemsFlatList}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default SearchBar;
