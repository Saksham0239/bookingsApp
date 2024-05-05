import { View } from "react-native";
import { cardRowStyles } from "./CardRow.styles";

const CardRow = ({ children }) => {
  return <View style={cardRowStyles?.container}>{children}</View>;
};

export default CardRow;
