import uuid from "react-native-uuid";

const productScreenData = [
  {
    productName: "Cola",
    productImageUri:
      "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg",
    productDetails: "20+ brought previous month",
    percentageDiscount: 20,
    saleName: "Great Summer Sale",
    discountedPrice: 549,
    originalPrice: 700,
    quantity: 100,
    rating: 4,
    numberOfPeopleRated: 1200,
    deliveryTime: "2 working days",
  },
  {
    productName: "Nivea Creme",
    productImageUri: "https://m.media-amazon.com/images/I/71SCEu7Bu0L.jpg",
    productDetails: "50+ brought previous month",
    percentageDiscount: 15,
    saleName: "Great Summer Sale",
    discountedPrice: 549,
    originalPrice: 700,
    quantity: 120,
    rating: 5,
    numberOfPeopleRated: 1500,
    deliveryTime: "3 working days",
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
    quantity: 200,
    rating: 3.2,
    numberOfPeopleRated: 5000,
    deliveryTime: "Today evening",
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
    quantity: 100,
    rating: 4.2,
    numberOfPeopleRated: 800,
    deliveryTime: "3 working days",
  },
];

const calculateDiscountedPrice = (discount, originalPrice) => {
  return (discount / 100) * originalPrice;
};

export const prepareProductScreenData = () => {
  productScreenData.forEach((data) => {
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
  return productScreenData;
};
