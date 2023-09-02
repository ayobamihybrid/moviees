import { Text, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { Cities } from '../CitiesContext';
import { useNavigation } from '@react-navigation/native';

const CitiesCard = ({ item }) => {
  const { selectedCity, setSelectedCity, cityId, setCityId } =
    useContext(Cities);
  const navigation = useNavigation();

  const setCity = (city, cityId) => {
    setSelectedCity(city);
    setCityId(cityId);
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 800);
  };

  return (
    <TouchableOpacity onPress={() => setCity(item.city, item._id)}>
      <ImageBackground
        source={{ uri: item.image }}
        imageStyle={{ borderRadius: 8 }}
        style={{
          width: 165,
          height: 120,
          margin: 8,
          opacity: 0.8,
        }}
      >
        <Text
          style={{
            position: 'absolute',
            bottom: 10,
            paddingLeft: 10,
            color: 'white',
            fontSize: 16,
            fontWeight: '700',
          }}
        >
          {item.city}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CitiesCard;
