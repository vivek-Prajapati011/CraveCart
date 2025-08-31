const Data = {
  // Users data
  users: [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      phone: "+91 9876543210",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      joinedDate: "2022-05-15",
      addresses: [
        {
          id: 1,
          type: "home",
          address: "A-102, Sunshine Apartments, Sector 12",
          locality: "Dwarka",
          city: "New Delhi",
          state: "Delhi",
          pinCode: "110078",
          lat: 28.6139,
          lng: 77.2090,
          isDefault: true,
          landmark: "Near Metro Station"
        },
        {
          id: 2,
          type: "work",
          address: "Tech Park, 5th Floor, Building B",
          locality: "Sector 62",
          city: "Noida",
          state: "Uttar Pradesh",
          pinCode: "201301",
          lat: 28.6292,
          lng: 77.3741,
          isDefault: false,
          landmark: "Opposite City Mall"
        }
      ],
      favorites: [1, 3, 7],
      orders: [1001, 1002, 1005],
      dietaryPreferences: ["Non-vegetarian", "Egg"],
      paymentMethods: [
        {
          id: 1,
          type: "credit_card",
          last4: "1234",
          brand: "Visa",
          expiry: "12/25",
          isDefault: true
        },
        {
          id: 2,
          type: "upi",
          upiId: "rahulsharma@ybl",
          isDefault: false
        }
      ]
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya.patel@example.com",
      phone: "+91 8765432109",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      joinedDate: "2022-08-22",
      addresses: [
        {
          id: 1,
          type: "home",
          address: "B-304, Green Valley Society",
          locality: "Andheri East",
          city: "Mumbai",
          state: "Maharashtra",
          pinCode: "400069",
          lat: 19.1136,
          lng: 72.8697,
          isDefault: true,
          landmark: "Near Railway Station"
        }
      ],
      favorites: [2, 5, 9],
      orders: [1003, 1004],
      dietaryPreferences: ["Vegetarian", "Jain Options"],
      paymentMethods: [
        {
          id: 1,
          type: "debit_card",
          last4: "5678",
          brand: "MasterCard",
          expiry: "09/24",
          isDefault: true
        }
      ]
    }
  ],

  // Restaurants data
  restaurants: [
    {
      id: 1,
      name: "Spice Garden",
      cuisine: ["North Indian", "Mughlai", "Chinese"],
      rating: 4.2,
      totalRatings: 1245,
      deliveryTime: "30-40 mins",
      costForTwo: 400,
      discount: "20% OFF up to ₹100",
      promo: "FREE DELIVERY",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      banner: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
      location: "Connaught Place, New Delhi",
      lat: 28.6315,
      lng: 77.2167,
      isPureVeg: false,
      isOpen: true,
      tags: ["Must Try", "Trending", "Best Seller"],
      highlights: ["Home Delivery", "Night Delivery", "Lunch", "Dinner"],
      facilities: ["Air Conditioned", "Wifi", "Parking"],
      slug: "spice-garden-connaught-place",
      description: "Authentic North Indian and Chinese cuisine with a modern twist. Family restaurant with over 20 years of experience.",
      established: "2003",
      owner: "Rajesh Kumar",
      avgPreparationTime: "25 minutes",
      locations: [
        {
          id: 1,
          address: "A-12, Connaught Place",
          city: "New Delhi",
          phone: "+91 11 1234 5678",
          lat: 28.6315,
          lng: 77.2167,
          openingHours: {
            Monday: "11:00 AM - 11:00 PM",
            Tuesday: "11:00 AM - 11:00 PM",
            Wednesday: "11:00 AM - 11:00 PM",
            Thursday: "11:00 AM - 11:00 PM",
            Friday: "11:00 AM - 11:30 PM",
            Saturday: "11:00 AM - 11:30 PM",
            Sunday: "11:00 AM - 11:00 PM"
          },
          diningRating: 4.3,
          deliveryRating: 4.1
        },
        {
          id: 2,
          address: "MG Road, Sector 29",
          city: "Gurgaon",
          phone: "+91 124 567 8901",
          lat: 28.4595,
          lng: 77.0266,
          openingHours: {
            Monday: "11:00 AM - 11:30 PM",
            Tuesday: "11:00 AM - 11:30 PM",
            Wednesday: "11:00 AM - 11:30 PM",
            Thursday: "11:00 AM - 11:30 PM",
            Friday: "11:00 AM - 12:00 AM",
            Saturday: "11:00 AM - 12:00 AM",
            Sunday: "11:00 AM - 11:30 PM"
          },
          diningRating: 4.5,
          deliveryRating: 4.2
        }
      ],
      tableBooking: true,
      maxCapacity: 50,
      bookingSlots: [
        "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", 
        "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"
      ]
    },
    {
      id: 2,
      name: "Burger Hub",
      cuisine: ["American", "Fast Food", "Burgers"],
      rating: 4.0,
      totalRatings: 876,
      deliveryTime: "25-35 mins",
      costForTwo: 350,
      discount: "50% OFF up to ₹100",
      promo: "TRY NEW ITEMS",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      banner: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
      location: "Cyber City, Gurgaon",
      lat: 28.4967,
      lng: 77.0886,
      isPureVeg: false,
      isOpen: true,
      tags: ["Newly Added", "Gourmet"],
      highlights: ["Home Delivery", "Quick Bites", "Lunch", "Dinner"],
      facilities: ["Air Conditioned", "Takeaway"],
      slug: "burger-hub-cyber-city",
      description: "Gourmet burgers with fresh ingredients and unique flavor combinations. Perfect for quick bites and casual dining.",
      established: "2020",
      owner: "Amit Singh",
      avgPreparationTime: "15 minutes",
      locations: [
        {
          id: 1,
          address: "Cyber Hub, DLF Cyber City",
          city: "Gurgaon",
          phone: "+91 124 987 6543",
          lat: 28.4967,
          lng: 77.0886,
          openingHours: {
            Monday: "10:00 AM - 11:00 PM",
            Tuesday: "10:00 AM - 11:00 PM",
            Wednesday: "10:00 AM - 11:00 PM",
            Thursday: "10:00 AM - 11:00 PM",
            Friday: "10:00 AM - 11:30 PM",
            Saturday: "10:00 AM - 11:30 PM",
            Sunday: "10:00 AM - 11:00 PM"
          },
          diningRating: 4.1,
          deliveryRating: 3.9
        }
      ],
      tableBooking: false,
      maxCapacity: 30,
      bookingSlots: []
    },
    {
      id: 3,
      name: "Sushi Express",
      cuisine: ["Japanese", "Sushi", "Asian"],
      rating: 4.5,
      totalRatings: 542,
      deliveryTime: "35-45 mins",
      costForTwo: 800,
      discount: "10% OFF above ₹500",
      promo: "EXCLUSIVE ON SWIGGY",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      banner: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
      location: "Saket, New Delhi",
      lat: 28.5244,
      lng: 77.2195,
      isPureVeg: false,
      isOpen: true,
      tags: ["Premium", "Healthy"],
      highlights: ["Home Delivery", "Fine Dining", "Lunch", "Dinner"],
      facilities: ["Air Conditioned", "Wifi", "Valet Parking"],
      slug: "sushi-express-saket",
      description: "Authentic Japanese sushi and Asian cuisine prepared by expert chefs. Experience the taste of Japan in the heart of Delhi.",
      established: "2018",
      owner: "Kenji Tanaka",
      avgPreparationTime: "20 minutes",
      locations: [
        {
          id: 1,
          address: "Select Citywalk, Saket",
          city: "New Delhi",
          phone: "+91 11 4567 8901",
          lat: 28.5244,
          lng: 77.2195,
          openingHours: {
            Monday: "12:00 PM - 11:00 PM",
            Tuesday: "12:00 PM - 11:00 PM",
            Wednesday: "12:00 PM - 11:00 PM",
            Thursday: "12:00 PM - 11:00 PM",
            Friday: "12:00 PM - 11:30 PM",
            Saturday: "12:00 PM - 11:30 PM",
            Sunday: "12:00 PM - 11:00 PM"
          },
          diningRating: 4.7,
          deliveryRating: 4.3
        }
      ],
      tableBooking: true,
      maxCapacity: 40,
      bookingSlots: [
        "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", 
        "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
      ]
    },
    // Additional restaurants would follow the same pattern
  ],

  // Menu items by restaurant ID
  menuItems: {
    1: [
      {
        id: 101,
        name: "Butter Chicken",
        price: 280,
        description: "Tender chicken cooked in rich tomato gravy with butter and cream. Served with butter naan.",
        category: "Main Course",
        subCategory: "Chicken Dishes",
        isVeg: false,
        isBestseller: true,
        isRecommended: true,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        isAvailable: true,
        rating: 4.5,
        ratingCount: 234,
        preparationTime: "25 minutes",
        ingredients: ["Chicken", "Tomato", "Butter", "Cream", "Spices"],
        nutritionalInfo: {
          calories: 450,
          protein: "25g",
          carbs: "15g",
          fat: "30g"
        },
        spices: "Medium",
        customizations: [
          {
            name: "Spice Level",
            options: [
              { name: "Mild", price: 0 },
              { name: "Medium", price: 0 },
              { name: "Spicy", price: 0 }
            ],
            isMultiSelect: false,
            isRequired: true
          },
          {
            name: "Add Ons",
            options: [
              { name: "Extra Gravy", price: 30 },
              { name: "Extra Butter", price: 20 },
              { name: "Extra Cheese", price: 40 }
            ],
            isMultiSelect: true,
            isRequired: false
          }
        ],
        similarItems: [102, 105]
      },
      {
        id: 102,
        name: "Paneer Butter Masala",
        price: 240,
        description: "Cottage cheese cubes in creamy tomato gravy with butter. A vegetarian delight.",
        category: "Main Course",
        subCategory: "Paneer Dishes",
        isVeg: true,
        isBestseller: true,
        isRecommended: false,
        image: "https://images.unsplash.com/photo-1633345380085-c11253d0665b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhbmVlciUyMGJ1dHRlciUyMG1hc2FsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        isAvailable: true,
        rating: 4.3,
        ratingCount: 187,
        preparationTime: "20 minutes",
        ingredients: ["Paneer", "Tomato", "Butter", "Cream", "Spices"],
        nutritionalInfo: {
          calories: 380,
          protein: "18g",
          carbs: "20g",
          fat: "25g"
        },
        spices: "Mild",
        customizations: [
          {
            name: "Spice Level",
            options: [
              { name: "Mild", price: 0 },
              { name: "Medium", price: 0 },
              { name: "Spicy", price: 0 }
            ],
            isMultiSelect: false,
            isRequired: true
          }
        ],
        similarItems: [101, 103]
      },
      {
        id: 103,
        name: "Vegetable Biryani",
        price: 180,
        description: "Fragrant basmati rice cooked with mixed vegetables and spices. Served with raita.",
        category: "Main Course",
        subCategory: "Rice Dishes",
        isVeg: true,
        isBestseller: false,
        isRecommended: true,
        image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxiaXJ5YW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        isAvailable: true,
        rating: 4.1,
        ratingCount: 156,
        preparationTime: "30 minutes",
        ingredients: ["Basmati Rice", "Mixed Vegetables", "Spices", "Yogurt"],
        nutritionalInfo: {
          calories: 320,
          protein: "8g",
          carbs: "60g",
          fat: "10g"
        },
        spices: "Medium",
        customizations: [
          {
            name: "Add Ons",
            options: [
              { name: "Extra Raita", price: 30 },
              { name: "Extra Salad", price: 25 },
              { name: "Boiled Egg", price: 40 }
            ],
            isMultiSelect: true,
            isRequired: false
          }
        ],
        similarItems: [104, 106]
      },
      {
        id: 104,
        name: "Garlic Naan",
        price: 60,
        description: "Soft bread baked in tandoor with garlic and butter. Perfect with curries.",
        category: "Bread",
        subCategory: "Tandoori Bread",
        isVeg: true,
        isBestseller: false,
        isRecommended: false,
        image: "https://images.unsplash.com/photo-1642626282396-897735cbb71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        isAvailable: true,
        rating: 4.4,
        ratingCount: 289,
        preparationTime: "10 minutes",
        ingredients: ["Flour", "Garlic", "Butter", "Yogurt"],
        nutritionalInfo: {
          calories: 260,
          protein: "7g",
          carbs: "45g",
          fat: "8g"
        },
        spices: "Mild",
        customizations: [
          {
            name: "Butter Level",
            options: [
              { name: "Normal", price: 0 },
              { name: "Extra Butter", price: 15 },
              { name: "Less Butter", price: 0 }
            ],
            isMultiSelect: false,
            isRequired: false
          }
        ],
        similarItems: [105, 107]
      },
      {
        id: 105,
        name: "Chocolate Lava Cake",
        price: 120,
        description: "Warm cake with molten chocolate center, served with vanilla ice cream.",
        category: "Dessert",
        subCategory: "Cakes",
        isVeg: true,
        isBestseller: true,
        isRecommended: true,
        image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGF2YSUyMGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        isAvailable: true,
        rating: 4.7,
        ratingCount: 201,
        preparationTime: "15 minutes",
        ingredients: ["Chocolate", "Flour", "Eggs", "Sugar", "Vanilla Ice Cream"],
        nutritionalInfo: {
          calories: 380,
          protein: "6g",
          carbs: "55g",
          fat: "18g"
        },
        spices: "None",
        customizations: [
          {
            name: "Ice Cream Flavor",
            options: [
              { name: "Vanilla", price: 0 },
              { name: "Chocolate", price: 20 },
              { name: "Strawberry", price: 20 }
            ],
            isMultiSelect: false,
            isRequired: false
          }
        ],
        similarItems: [106, 108]
      }
    ],
    2: [
      {
        id: 201,
        name: "Classic Cheese Burger",
        price: 150,
        description: "Beef patty with cheese, lettuce, tomato and special sauce. Served with fries.",
        category: "Burgers",
        subCategory: "Beef Burgers",
        isVeg: false,
        isBestseller: true,
        isRecommended: true,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        isAvailable: true,
        rating: 4.2,
        ratingCount: 156,
        preparationTime: "15 minutes",
        ingredients: ["Beef Patty", "Cheese", "Lettuce", "Tomato", "Sauce", "Bun"],
        nutritionalInfo: {
          calories: 520,
          protein: "28g",
          carbs: "35g",
          fat: "30g"
        },
        spices: "Mild",
        customizations: [
          {
            name: "Add Ons",
            options: [
              { name: "Extra Cheese", price: 20 },
              { name: "Extra Patty", price: 50 },
              { name: "Bacon", price: 40 }
            ],
            isMultiSelect: true,
            isRequired: false
          },
          {
            name: "Sauce Selection",
            options: [
              { name: "Mayonnaise", price: 0 },
              { name: "BBQ", price: 0 },
              { name: "Chipotle", price: 0 }
            ],
            isMultiSelect: false,
            isRequired: true
          }
        ],
        similarItems: [202, 203]
      }
      // More menu items for Burger Hub would follow
    ],
    // Menu items for other restaurants would follow the same pattern
  },

  // Orders data
  orders: [
    {
      id: 1001,
      userId: 1,
      restaurantId: 1,
      restaurantName: "Spice Garden",
      items: [
        { 
          id: 101, 
          name: "Butter Chicken", 
          price: 280, 
          quantity: 1, 
          customizations: {"Spice Level": "Medium"},
          itemTotal: 280
        },
        { 
          id: 104, 
          name: "Garlic Naan", 
          price: 60, 
          quantity: 2, 
          customizations: {"Butter Level": "Extra Butter"},
          itemTotal: 150 // 2 x 60 + 30 for extra butter
        }
      ],
      totalAmount: 430,
      deliveryAddress: "A-102, Sunshine Apartments, Sector 12, Dwarka, New Delhi - 110078",
      status: "delivered",
      orderTime: "2023-05-15T18:30:00Z",
      deliveryTime: "2023-05-15T19:15:00Z",
      paymentMethod: "Credit Card",
      paymentStatus: "completed",
      deliveryCharges: 30,
      taxes: 36,
      discount: 40,
      packingCharges: 20,
      tip: 50,
      deliveryInstructions: "Call before delivery",
      rider: {
        name: "Rohit Kumar",
        phone: "+91 9876543210",
        rating: 4.5
      }
    },
    {
      id: 1002,
      userId: 1,
      restaurantId: 3,
      restaurantName: "Sushi Express",
      items: [
        { 
          id: 301, 
          name: "California Roll", 
          price: 320, 
          quantity: 1, 
          customizations: {},
          itemTotal: 320
        },
        { 
          id: 303, 
          name: "Miso Soup", 
          price: 120, 
          quantity: 1, 
          customizations: {},
          itemTotal: 120
        }
      ],
      totalAmount: 440,
      deliveryAddress: "A-102, Sunshine Apartments, Sector 12, Dwarka, New Delhi - 110078",
      status: "delivered",
      orderTime: "2023-05-20T19:45:00Z",
      deliveryTime: "2023-05-20T20:25:00Z",
      paymentMethod: "UPI",
      paymentStatus: "completed",
      deliveryCharges: 40,
      taxes: 40,
      discount: 0,
      packingCharges: 30,
      tip: 0,
      deliveryInstructions: "Leave at door",
      rider: {
        name: "Vikram Singh",
        phone: "+91 9876543211",
        rating: 4.3
      }
    },
    {
      id: 1003,
      userId: 2,
      restaurantId: 2,
      restaurantName: "Burger Hub",
      items: [
        { 
          id: 201, 
          name: "Classic Cheese Burger", 
          price: 150, 
          quantity: 2, 
          customizations: {"Add Ons": ["Extra Cheese (+₹20)"], "Sauce Selection": "BBQ"},
          itemTotal: 340 // 2 x 150 + 40 for extra cheese
        },
        { 
          id: 203, 
          name: "French Fries", 
          price: 90, 
          quantity: 1, 
          customizations: {"Seasoning": "Cheesy"},
          itemTotal: 90
        }
      ],
      totalAmount: 430,
      deliveryAddress: "B-304, Green Valley Society, Andheri East, Mumbai - 400069",
      status: "preparing",
      orderTime: "2023-05-22T12:30:00Z",
      paymentMethod: "Credit Card",
      paymentStatus: "completed",
      deliveryCharges: 35,
      taxes: 37,
      discount: 50,
      packingCharges: 25,
      tip: 0,
      deliveryInstructions: "",
      rider: {
        name: "Ajay Mehta",
        phone: "+91 9876543212",
        rating: 4.2
      }
    }
  ],

  // Categories for filtering
  categories: [
    { 
      id: 1, 
      name: "North Indian", 
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      description: "Rich and flavorful dishes from Northern India"
    },
    { 
      id: 2, 
      name: "Chinese", 
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      description: "Authentic Chinese cuisine with Indian influences"
    },
    { 
      id: 3, 
      name: "Fast Food", 
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      description: "Quick and delicious fast food options"
    },
    { 
      id: 4, 
      name: "South Indian", 
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvc2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      description: "Traditional dishes from Southern India"
    },
    { 
      id: 5, 
      name: "Desserts", 
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzc2VydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      description: "Sweet treats to satisfy your cravings"
    },
    { 
      id: 6, 
      name: "Beverages", 
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWlsa3NoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description: "Refreshing drinks to complement your meal"
    }
  ],

  // Offers and promotions
  offers: [
    {
      id: 1,
      title: "FIRST ORDER",
      code: "WELCOME50",
      description: "Get 50% OFF up to ₹100 on your first order",
      terms: "Valid only on first order. Max discount ₹100",
      validUntil: "2023-12-31",
      minOrderValue: 199,
      category: "new_user"
    },
    {
      id: 2,
      title: "MONSOON SPECIAL",
      code: "RAIN30",
      description: "Get 30% OFF up to ₹75 on orders above ₹249",
      terms: "Valid until 31st July. Max discount ₹75",
      validUntil: "2023-07-31",
      minOrderValue: 249,
      category: "seasonal"
    },
    {
      id: 3,
      title: "FREE DELIVERY",
      code: "FREEDEL",
      description: "Free delivery on orders above ₹299",
      terms: "No code needed. Applicable automatically",
      validUntil: "2023-12-31",
      minOrderValue: 299,
      category: "delivery"
    }
  ],

  // Table bookings
  tableBookings: [
    {
      id: 2001,
      userId: 1,
      restaurantId: 1,
      locationId: 1,
      date: "2023-06-15",
      time: "19:30",
      guests: 4,
      name: "Rahul Sharma",
      phone: "+91 9876543210",
      specialRequests: "Window seat preferred",
      status: "confirmed",
      bookingTime: "2023-06-10T14:22:00Z"
    },
    {
      id: 2002,
      userId: 2,
      restaurantId: 3,
      locationId: 1,
      date: "2023-06-20",
      time: "20:00",
      guests: 2,
      name: "Priya Patel",
      phone: "+91 8765432109",
      specialRequests: "Vegetarian options only",
      status: "confirmed",
      bookingTime: "2023-06-12T11:45:00Z"
    }
  ]
};

