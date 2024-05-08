import uuid from "react-native-uuid";

const cartScreenData = [
  {
    productName: "Cola",
    productImageUri:
      "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg",
    productDetails: "20+ brought previous month",
    percentageDiscount: 20,
    saleName: "Great Summer Sale",
    discountedPrice: 549,
    originalPrice: 700,
    quantity: 1,
  },
  {
    productName: "Nivea Creme",
    productImageUri:
      "https://m.media-amazon.com/images/I/71SCEu7Bu0L.jpg",
    productDetails: "50+ brought previous month",
    percentageDiscount: 15,
    saleName: "Great Summer Sale",
    discountedPrice: 549,
    originalPrice: 700,
    quantity: 0,
  },
  {
    productName: "MB Peanut Butter",
    productImageUri:
      "https://img4.hkrtcdn.com/29313/prd_2931273-MuscleBlaze-Chocolate-Peanut-Butter-1-kg-Creamy_o.jpg",
    productDetails: "200+ brought previous month",
    percentageDiscount: 20,
    saleName: "Great Summer Sale",
    discountedPrice: 900,
    originalPrice: 1200,
    quantity: 2,
  },
  {
    productName: "Avvatar Whey Protein",
    productImageUri:
      "https://www.avvatarindia.com/images/product_images/1697552095_FOP.jpg",
    productDetails: "100+ brought previous month",
    percentageDiscount: 10,
    saleName: "Great Summer Sale",
    discountedPrice: 2250,
    originalPrice: 2500,
    quantity: 1,
  },
];

const calculateDiscountedPrice = (discount, originalPrice) => {
  return (discount / 100) * originalPrice;
};

export const prepareCartScreenData = () => {
  cartScreenData.forEach((data) => {
    data.discountedPrice =
      data.originalPrice -
      calculateDiscountedPrice(data.percentageDiscount, data.originalPrice);
    if (data.quantity <= 0) {
      data.inStock = false;
    } else {
      data.inStock = true;
    }
    data.id = uuid.v4();
  });
  return cartScreenData;
};
