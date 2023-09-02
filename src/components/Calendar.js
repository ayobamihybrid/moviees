import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [dates, setDates] = useState([]);

  const getDates = () => {
    const myDates = [];
    for (let i = 0; i < 7; i++) {
      const date = moment().add(i, 'days');
      myDates.push(date);
    }
    setDates(myDates);
  };

  useEffect(() => {
    getDates();
  }, []);

  return (
    <ScrollView horizontal>
      {dates.map((date, index) => {
        const day = moment(date).format('ddd');
        const dayNumber = moment(date).format('D');
        const fullDate = moment(date).format('YYYY-MM-DD');

        return (
          <TouchableOpacity
            onPress={() => setSelectedDate(fullDate)}
            key={index}
            style={{
              backgroundColor:
                selectedDate === fullDate ? '#FFD700' : '#E0E0E0',
              marginHorizontal: 5,
              marginVertical: 10,
              padding: 10,
              borderRadius: 10,
              width: 70,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: selectedDate === fullDate ? 'white' : 'black',
              }}
            >
              {day}
            </Text>

            <View style={{ height: 10 }} />

            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: selectedDate === fullDate ? 'white' : 'black',
              }}
            >
              {dayNumber}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Calendar;
