import { Image, Text, View } from "react-native";
import { cardSectionStyles } from "./CardSection.styles";
import SampleImage from "../../assets/images/e-commerce-removebg-1.png";

const CardSection = () => {
  return (
    <View style={cardSectionStyles?.container}>
      <View style={cardSectionStyles?.upperContainer}>
        <View style={cardSectionStyles?.leftImageContainer}>
          <Image
            style={cardSectionStyles?.image}
            source={SampleImage}
            resizeMode="contain"
          />
        </View>
        <View style={cardSectionStyles?.rightTextContainer}>
          <Text style={cardSectionStyles?.productName}>Name</Text>
          <Text style={cardSectionStyles?.productDetails}>some details</Text>
        </View>
      </View>
      <View style={cardSectionStyles?.middleContainer}></View>
      <View style={cardSectionStyles?.lowerContainer}></View>
    </View>
  );
};

export default CardSection;
