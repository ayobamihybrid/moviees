import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const TheaterScreen = () => {
  const [rows, setRows] = useState([
    {
      row: 'A',
      seats: [
        { seat: '1', bookingStatus: 'false' },
        { seat: '2', bookingStatus: 'false' },
        { seat: '3', bookingStatus: 'false' },
        { seat: '4', bookingStatus: 'false' },
        { seat: '5', bookingStatus: 'false' },
        { seat: '6', bookingStatus: 'false' },
        { seat: '7', bookingStatus: 'false' },
      ],
    },
    {
      row: 'B',
      seats: [
        { seat: '1', bookingStatus: 'false' },
        { seat: '2', bookingStatus: 'false' },
        { seat: '3', bookingStatus: 'false' },
        { seat: '4', bookingStatus: 'false' },
        { seat: '5', bookingStatus: 'false' },
        { seat: '6', bookingStatus: 'false' },
        { seat: '7', bookingStatus: 'false' },
      ],
    },
    {
      row: 'C',
      seats: [
        { seat: '1', bookingStatus: 'false' },
        { seat: '2', bookingStatus: 'false' },
        { seat: '3', bookingStatus: 'false' },
        { seat: '4', bookingStatus: 'false' },
        { seat: '5', bookingStatus: 'false' },
        { seat: '6', bookingStatus: 'false' },
        { seat: '7', bookingStatus: 'false' },
      ],
    },
    {
      row: 'D',
      seats: [
        { seat: '1', bookingStatus: 'false' },
        { seat: '2', bookingStatus: 'false' },
        { seat: '3', bookingStatus: 'false' },
        { seat: '4', bookingStatus: 'false' },
        { seat: '5', bookingStatus: 'false' },
        { seat: '6', bookingStatus: 'false' },
        { seat: '7', bookingStatus: 'false' },
      ],
    },
  ]);

  const route = useRoute();
  const navigation = useNavigation();

  const [selectedSeats, setSelectedSeats] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerLeft: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
          }}
        >
          <TouchableOpacity>
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: 400 }}>
            {route.params.cinema}
          </Text>
        </View>
      ),
    });
  }, []);

  const handleSelectedSeats = (row, seat) => {
    const isSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.row === row && selectedSeat.seat === seat
    );

    if (isSelected) {
      setSelectedSeats((prevState) =>
        prevState.filter((prev) => prev.row !== row || prev.seat !== seat)
      );
    } else {
      setSelectedSeats((prevState) => [...prevState, { row, seat }]);
    }
  };

  const seatNumbers = selectedSeats.map((seat) => seat.row + seat.seat);
  const result = seatNumbers.join(' ');

  const handlePay = () => {
    // const newRows = [...rows];
    // selectedSeats.forEach((seats) => {
    //   const rowIndex = newRows.findIndex((newRow) => newRow.row === seats.row);
    //   const seatIndex = newRows[rowIndex].seats.findIndex(
    //     (s) => s.seat === seats.seat
    //   );

    //   newRows[rowIndex].seats[seatIndex].bookingStatus = 'disabled';
    //   setRows(newRows);
    //   setSelectedSeats([]);
    // });

    navigation.navigate('FoodScreen', {
      cinema: route.params.cinema,
      showtime: route.params.showtime,
      selectedDate: route.params.selectedDate,
      name: route.params.name,
      rows: route.params.row,
      doc_id: route.params.doc_id,
      showtimeId: route.params.showtimeId,
      seats: result,
      selectedSeats: selectedSeats,
    });
  };

  return (
    <>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontSize: 15 }}>SCREEN THIS WAY</Text>
        <Text
          style={{
            marginTop: 10,
            marginBottom: 20,
            fontSize: 15,
            color: 'gray',
          }}
        >
          CLASSIC (240)
        </Text>
      </View>

      <View>
        {route.params.rows.map((row, rowIndex) => (
          <View
            key={rowIndex}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 500, margin: 10 }}>
              {row.row}
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                {row.seats.map((seat, seatIndex) => (
                  <TouchableOpacity
                    key={seatIndex}
                    onPress={() => handleSelectedSeats(row.row, seat.number)}
                    style={[
                      styles.seat,
                      selectedSeats.some(
                        (selectedSeat) =>
                          selectedSeat.row === row.row &&
                          selectedSeat.seat === seat.number
                      ) && styles.selectedSeat,
                      seat.bookingStatus === 'disabled' && styles.disabled,
                    ]}
                    disabled={seat.bookingStatus === 'disabled'}
                  >
                    <Text>{seat.number}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        ))}
      </View>

      <View
        style={{
          backgroundColor: '#C0C0C0',
          flexDirection: 'row',
          gap: 25,
          marginVertical: 20,
          alignItems: 'center',
          justifyContent: 'center',
          height: 70,
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: '#ffc40c',
              height: 20,
              width: 20,
              borderRadius: 5,
            }}
          />

          <Text>Selected</Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              height: 20,
              width: 20,
              borderRadius: 5,
            }}
          />

          <Text>Vacant</Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: 'gray',
              height: 20,
              width: 20,
              borderRadius: 5,
            }}
          />

          <Text>Booked</Text>
        </View>
      </View>

      <View style={{ paddingTop: 20 }}>
        {selectedSeats.length > 0 ? (
          <Pressable
            style={{
              backgroundColor: '#febe10',
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text>
              {selectedSeats.length} seat(s) - selected {result}
            </Text>

            <TouchableOpacity onPress={() => handlePay()}>
              <Text style={{ fontWeight: 500, fontSize: 15}}>Proceed</Text>
            </TouchableOpacity>
          </Pressable>
        ) : (
          <Pressable style={{ backgroundColor: '#d3d3d3', padding: 20 }}>
            <Text style={{ textAlign: 'center' }}>No Seats Selected</Text>
          </Pressable>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  seat: {
    marginHorizontal: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },

  selectedSeat: {
    backgroundColor: '#FFC40C',
    borderColor: 'transparent',
  },
  disabled: {
    backgroundColor: '#989898',
    borderColor: 'transparent',
  },
});

export default TheaterScreen;
