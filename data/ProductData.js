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
    category: ["Cola", "Soft Drinks", "Cold Drinks", "Beverages"],
    productInformation: {
      images: [
        {
          imgUrl:
            "https://www.bigbasket.com/media/uploads/p/xxl/40032983_8-sprite-soft-drink.jpg",
        },
        {
          imgUrl:
            "https://www.jiomart.com/images/product/original/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg?im=Resize=(1000,1000)",
        },
        {
          imgUrl:
            "https://brandstruck.co/wp-content/uploads/2016/04/Sprite-brand-strategy-positioning.jpeg",
        },
      ],
    },
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
    category: ["Nivea Creme", "creams", "moisturizer"],
    productInformation: {
      images: [
        {
          imgUrl:
            "https://www.bigbasket.com/media/uploads/p/xxl/40032983_8-sprite-soft-drink.jpg",
        },
        {
          imgUrl:
            "https://www.jiomart.com/images/product/original/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg?im=Resize=(1000,1000)",
        },
        {
          imgUrl:
            "https://brandstruck.co/wp-content/uploads/2016/04/Sprite-brand-strategy-positioning.jpeg",
        },
      ],
    },
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
    category: ["MB Peanut Butter", "Peanut Butters", "butter"],
    productInformation: {
      images: [
        {
          imgUrl:
            "https://www.bigbasket.com/media/uploads/p/xxl/40032983_8-sprite-soft-drink.jpg",
        },
        {
          imgUrl:
            "https://www.jiomart.com/images/product/original/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg?im=Resize=(1000,1000)",
        },
        {
          imgUrl:
            "https://brandstruck.co/wp-content/uploads/2016/04/Sprite-brand-strategy-positioning.jpeg",
        },
      ],
    },
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
    category: ["Avvatar Whey Protein", "Whey Protein", "Protein Powder"],
    productInformation: {
      images: [
        {
          imgUrl:
            "https://www.bigbasket.com/media/uploads/p/xxl/40032983_8-sprite-soft-drink.jpg",
        },
        {
          imgUrl:
            "https://www.jiomart.com/images/product/original/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg?im=Resize=(1000,1000)",
        },
        {
          imgUrl:
            "https://brandstruck.co/wp-content/uploads/2016/04/Sprite-brand-strategy-positioning.jpeg",
        },
      ],
    },
  },
  {
    productName: "Sprite",
    productImageUri:
      "https://www.jiomart.com/images/product/original/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg?im=Resize=(1000,1000)",
    productDetails: "30+ bought previous month",
    percentageDiscount: 15,
    saleName: "Great Summer Sale",
    discountedPrice: 450,
    originalPrice: 530,
    quantity: 150,
    rating: 4.5,
    numberOfPeopleRated: 900,
    deliveryTime: "2 working days",
    category: ["Sprite", "Soft Drinks", "Cold Drinks", "Beverages"],
    productInformation: {
      images: [
        {
          imgUrl:
            "https://www.bigbasket.com/media/uploads/p/xxl/40032983_8-sprite-soft-drink.jpg",
        },
        {
          imgUrl:
            "https://www.jiomart.com/images/product/original/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg?im=Resize=(1000,1000)",
        },
        {
          imgUrl:
            "https://brandstruck.co/wp-content/uploads/2016/04/Sprite-brand-strategy-positioning.jpeg",
        },
      ],
    },
  },
  {
    productName: "Lipton Green Tea",
    productImageUri:
      "https://m.media-amazon.com/images/I/61WfU6eYd0L._AC_SL1024_.jpg",
    productDetails: "40+ bought previous month",
    percentageDiscount: 10,
    saleName: "Great Summer Sale",
    discountedPrice: 350,
    originalPrice: 390,
    quantity: 180,
    rating: 4.7,
    numberOfPeopleRated: 1200,
    deliveryTime: "3 working days",
    category: ["Lipton Green Tea", "Tea", "Green Tea", "Beverages"],
    productInformation: {
      images: [
        {
          imgUrl:
            "https://www.bigbasket.com/media/uploads/p/xxl/40032983_8-sprite-soft-drink.jpg",
        },
        {
          imgUrl:
            "https://www.jiomart.com/images/product/original/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg?im=Resize=(1000,1000)",
        },
        {
          imgUrl:
            "https://brandstruck.co/wp-content/uploads/2016/04/Sprite-brand-strategy-positioning.jpeg",
        },
      ],
    },
  },
  {
    productName: "Red Bull Energy Drink",
    productImageUri:
      "https://m.media-amazon.com/images/I/71pF2gZSdVL._SL1500_.jpg",
    productDetails: "60+ bought previous month",
    percentageDiscount: 25,
    saleName: "Great Summer Sale",
    discountedPrice: 240,
    originalPrice: 320,
    quantity: 250,
    rating: 4.3,
    numberOfPeopleRated: 1500,
    deliveryTime: "2 working days",
    category: [
      "Red Bull Energy Drink",
      "Energy Drinks",
      "Cold Drinks",
      "Beverages",
    ],
    productInformation: {
      images: [
        {
          imgUrl:
            "https://www.bigbasket.com/media/uploads/p/xxl/40032983_8-sprite-soft-drink.jpg",
        },
        {
          imgUrl:
            "https://www.jiomart.com/images/product/original/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg?im=Resize=(1000,1000)",
        },
        {
          imgUrl:
            "https://brandstruck.co/wp-content/uploads/2016/04/Sprite-brand-strategy-positioning.jpeg",
        },
      ],
    },
  },
  {
    productName: "Pepsi",
    productImageUri:
      "https://m.media-amazon.com/images/I/71yCz8GK4fL._SL1500_.jpg",
    productDetails: "25+ bought previous month",
    percentageDiscount: 20,
    saleName: "Great Summer Sale",
    discountedPrice: 400,
    originalPrice: 500,
    quantity: 200,
    rating: 4.4,
    numberOfPeopleRated: 1100,
    deliveryTime: "2 working days",
    category: ["Pepsi", "Soft Drinks", "Cold Drinks", "Beverages"],
    productInformation: {
      images: [
        {
          imgUrl:
            "https://www.bigbasket.com/media/uploads/p/xxl/40032983_8-sprite-soft-drink.jpg",
        },
        {
          imgUrl:
            "https://www.jiomart.com/images/product/original/490809343/sprite-300-ml-can-product-images-o490809343-p490809343-0-202203151402.jpg?im=Resize=(1000,1000)",
        },
        {
          imgUrl:
            "https://brandstruck.co/wp-content/uploads/2016/04/Sprite-brand-strategy-positioning.jpeg",
        },
      ],
    },
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
