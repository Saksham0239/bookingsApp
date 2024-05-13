import { View } from "react-native";
import { useEffect, useState } from "react";
import { starRatingStyles } from "./StarRating.styles";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../constants/commonConstants";
import uuid from "react-native-uuid";

const StarRating = ({ rating }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    console.log("rendering");
    readyStarArray();
  }, []);

  const readyStarArray = () => {
    const wholeRating = Math.floor(rating);
    const halfRating = rating > wholeRating;
    console.log("wholeRating ", wholeRating);
    console.log("halfRating ", halfRating);
    let starsArr = [];
    for (let index = 0; index < wholeRating; index++) {
      console.log("pushed");
      starsArr.push(
        <FontAwesome
          key={uuid.v4()}
          name="star"
          size={15}
          color={Colors?.ivory}
        />,
      );
    }

    if (halfRating) {
      starsArr.push(
        <FontAwesome
          key={uuid.v4()}
          name="star-half-empty"
          size={15}
          color={Colors?.ivory}
        />,
      );
    }
    console.log(starsArr.length);

    let remLength = 5 - starsArr.length;

    for (let i = 0; i < remLength; i++) {
      starsArr.push(
        <FontAwesome
          key={uuid.v4()}
          name="star-o"
          size={15}
          color={Colors?.ivory}
        />,
      );
    }
    console.log(starsArr);
    setStars(starsArr);
  };

  return (
    <View style={starRatingStyles?.container}>
      {stars.map((starEle) => {
        return starEle;
      })}
    </View>
  );
};

export default StarRating;
