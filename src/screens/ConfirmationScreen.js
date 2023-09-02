import { Alert, BackHandler, Pressable, Text, View } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { client } from '../../moviee-sanity2/sanity';
import RazorpayCheckout from 'react-native-razorpay';

const ConfirmationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const cart = useSelector((state) => state.cart.cart);

  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  const ticketPrice = route.params.selectedSeats.length * 2000;
  const fee = 500;
  const grandTotal = ticketPrice + fee + total;

  useLayoutEffect(() => {
    navigation.setOptions({
      gestureEnabled: false,
      gestureDirection: 'horizontal',
    });
  }, []);

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Want to end Session?',
        'Go back to main screen',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () =>
              navigation.reset({ index: 0, routes: [{ name: 'HomeScreen' }] }),
          },
        ],
        { cancelable: false }
      );

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      );

      return () => backHandler.remove();
    };
  }, []);

  const pay = () => {
    const options = {
      description: 'Adding To Wallet',
      currency: 'INR',
      name: 'PVR',
      key: 'rzp_test_E3GWYimxN7YMk8',
      amount: grandTotal * 100,
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'RazorPay Software',
      },
      theme: { color: '#F37254' },
    };
    RazorpayCheckout.open(options).then((data) => {
      const updatedRows = [...route.params.rows];
      route.params.selectedSeats.forEach((seat) => {
        const rowIndex = updatedRows.findIndex((row) => row.row === seat.row);
        const seatIndex = updatedRows[rowIndex].seats.findIndex(
          (s) => s.number === seat.seat
        );
        const docId = route.params.docId;
        client
          .patch(docId)
          .set({
            [`row[${rowIndex}].seats[${seatIndex}].bookingStatus`]: 'disabled',
          })
          .commit()
          .then((updatedDoc) => {
            console.log('updated doc: ', updatedDoc);
          })
          .catch((err) => {
            console.log('update failed', err);
          });
        updatedRows[rowIndex].seats[seatIndex].bookingStatus = 'disabled';
      });
      const seatNumbers = route.params.selectedSeats.map(
        (seat) => seat.row + seat.seat
      );
      const result = seatNumbers.join(' ');
      navigation.navigate('Ticket', {
        selectedSeats: result,
        cinema: route.params.cinema,
        showtime: route.params.showtime,
        date: route.params.selectedDate,
        seats: route.params.seats,
      });
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 6 }}>
        <View>
          <Text style={{ fontSize: 15, fontWeight: '500' }}>
            {route.params.name}
          </Text>
          <Text style={{ marginVertical: 4, color: 'gray' }}>
            U • A English
          </Text>
          <Text>{route.params.selectedDate}</Text>
        </View>

        <View
          style={{
            height: 1,
            borderColor: '#E0E0E0',
            borderWidth: 1,
            marginTop: 6,
          }}
        />

        <View style={{ marginTop: 8 }}>
          <Text style={{ fontSize: 15, fontWeight: '500' }}>
            {route.params.cinema}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              marginTop: 4,
              color: 'gray',
            }}
          >
            AUDI 02 • CLASSIC
          </Text>
          <Text style={{ color: 'red', marginTop: 4, fontWeight: '500' }}>
            {route.params.seats} | {route.params.showtime}
          </Text>
        </View>

        <View
          style={{
            height: 1,
            borderColor: '#E0E0E0',
            borderWidth: 1,
            marginTop: 6,
          }}
        />

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: '500' }}>
            TICKETS {route.params.selectedSeats.length}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: '500' }}>
            ₦{route.params.selectedSeats.length * 2000}
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: '500' }}>
            Food & Beverages
          </Text>
          <Text style={{ fontSize: 15, fontWeight: '500' }}>₦{total}</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
            borderColor: 'gray',
          }}
        >
          {cart.map((item, index) => (
            <View key={index} style={{ gap: 6, margin: 5 }}>
              <Text>
                {item.quantity} x {item.name} (₦{item.price})
              </Text>
            </View>
          ))}
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: '500' }}>
            Convenience Fee
          </Text>
          <Text style={{ fontSize: 15, fontWeight: '500' }}>₦{fee}</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 16 }}>TOTAL</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
            ₦{grandTotal}
          </Text>
        </View>
      </View>

      <Pressable
        onPress={pay}
        style={{
          marginTop: 10,
          backgroundColor: '#FFC72C',
          padding: 10,
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: '500' }}>PAY</Text>
      </Pressable>
    </View>
  );
};

export default ConfirmationScreen;
