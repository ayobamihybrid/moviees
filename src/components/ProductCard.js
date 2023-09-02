import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decrementQty,
  incrementQty,
  removeFromCart,
} from '../redux/reducer';

const ProductCard = ({ item }) => {
  const [itemQty, setItemQty] = useState(1);

  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(addToCart(item));
  };

  const incrementItem = (item) => {
    dispatch(incrementQty(item));
    setItemQty((i) => i + 1);
  };

  const decrementItem = (item) => {
    dispatch(decrementQty(item));
    if (itemQty === 1) {
      setItemQty(1);
    } else {
      setItemQty((i) => i - 1);
    }
  };

  return (
      <Pressable
        style={{
          flex: 1,
          backgroundColor: 'white',
          margin: 5,
          borderRadius: 7,
          padding: 10,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: '100%',
            height: 150,
            resizeMode: 'cover',
            borderRadius: 5,
          }}
        />

        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: '400' }}>{item.name}</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '600' }}>
              {item.price}
            </Text>

            {cart.find((s) => s.id === item.id) ? (
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TouchableOpacity
                  onPress={() => decrementItem(item)}
                  style={{
                    backgroundColor: '#ffa500',
                    borderRadius: 12,
                    height: 24,
                    width: 24,
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 600,
                      position: 'absolute',
                      left: 9,
                      top: -2,
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>

                <View>
                  <Text>{itemQty}</Text>
                </View>

                <TouchableOpacity
                  onPress={() => incrementItem(item)}
                  style={{
                    backgroundColor: '#ffa500',
                    borderRadius: 12,
                    height: 24,
                    width: 24,
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 500,
                      position: 'absolute',
                      top: -2,
                      left: 6,
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => addItem(item)}
                style={{
                  backgroundColor: '#ffa500',
                  borderRadius: 5,
                  paddingHorizontal: 9,
                  paddingVertical: 4,
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 12,
                    color: 'white',
                    fontWeight: 500,
                  }}
                >
                  ADD
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        
      </Pressable>
  );
};

export default ProductCard;
