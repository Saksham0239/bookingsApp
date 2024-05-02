import { ScrollView, View } from "react-native";
import { homeStyles } from "./Home.styles";

const HomeWrapper = ({ searching, children }) => {
  if (searching) {
    return <View style={homeStyles?.container}>{children}</View>;
  }

  return <ScrollView style={homeStyles?.container}>{children}</ScrollView>;
};

export default HomeWrapper;
