import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

const FoodScreen = () => {
  const data = [
    {
      id: '0',
      name: 'A Pack Of Popcorn',
      image:
        'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=600',
      description: 'Delicious Popcorn',
      price: 180,
      veg: true,
    },
    {
      id: '1',
      name: 'Lit Whopper Jr Veg + Lit Whopper Jr Veg',
      image:
        'https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220314062022014950_262x360jpg',
      description: 'Lit Whopper Jr Veg + Lit Whopper Jr Veg',
      price: 238,
      veg: true,
    },
    {
      id: '2',
      name: 'Crsipy Chicken Double Patty + Crsipy Chicken Double Patty',
      image:
        'https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20220613110553977083_262x360jpg',
      description: 'Crsipy Chicken Double Patty + Crsipy Chicken Double Patty',
      price: 258,
      veg: false,
    },
    {
      id: '3',
      name: 'Chicken Whopper + Chicken Whopper',
      image:
        'https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Chicken Whopper + Chicken Whopper',
      price: 398,
      veg: false,
    },
    {
      id: '4',
      name: 'Tostisto Bite Size',
      image:
        'https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: '2 Crispy Veg Double Patty + 1 King Fries + 1 Veggie Strips',
      price: 348,
      veg: true,
    },
    {
      id: '5',
      name: '2 Lite Whopper Jr Veg + 1 King Fries',
      image:
        'https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20210510124749940592_262x360jpg',
      description: '2 Lite Whopper Jr Veg + 1 King Fries',
      price: 225,
      veg: true,
    },
  ];

  const navigation = useNavigation();
  const route = useRoute();

  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  const cartLength = cart
    .map((item) => item.quantity * 1)
    .reduce((curr, prev) => curr + prev, 0);

  const handlePay = () => {
    navigation.navigate('ConfirmationScreen', {
      cinema: route.params.cinema,
      name: route.params.name,
      rows: route.params.rows,
      docId: route.params.doc_id,
      showtime: route.params.showtime,
      selectedDate: route.params.selectedDate,
      seats: route.params.seats,
      selectedSeats: route.params.selectedSeats,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerLeft: () => <Text style={{ fontSize: 16 }}>ORDER SNACKS</Text>,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => handlePay()}
          style={{
            borderRadius: 5,
            backgroundColor: '#ffa500',
            paddingHorizontal: 15,
            paddingVertical: 6,
          }}
        >
          <Text style={{ textAlign: 'center', color: 'white' }}>Continue</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <ProductCard item={item} />}
      />

      {total > 0 ? (
        <View
          style={{
            backgroundColor: '#ffa500',
            width: '100%',
            borderRadius: 7,
            paddingHorizontal: 9,
            paddingVertical: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: 'column', gap: 5 }}>
            <Text style={{ fontWeight: 500, fontSize: 15 }}>
              {cartLength} | {total}
            </Text>

            <Text style={{ color: 'white' }}>Extra charges will apply</Text>
          </View>

          <TouchableOpacity onPress={() => handlePay()}>
            <Text style={{ fontWeight: 500, fontSize: 15 }}>Proceed</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default FoodScreen;
