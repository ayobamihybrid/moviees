import {
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
  Pressable,
  View,
  Text,
} from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Cities } from '../CitiesContext';
import { Toast } from 'toastify-react-native';

const MovieCard = ({ item }) => {
  const { selectedCity, setSelectedCity } = useContext(Cities);

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Pressable
        style={{
          width: (Dimensions.get('window').width - 20) / 2,
          height: Dimensions.get('window').height / 2.5,
          marginVertical: 5,
        }}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
          }}
          style={{ width: '100%', height: '78%', borderRadius: 8 }}
        />

        <View style={{ flexDirection: 'column', gap: 4 }}>
          <Text style={{ fontWeight: 500, marginTop: 4 }}>{item.title}</Text>
          <Text>U/A. {item.original_language}</Text>

          <TouchableOpacity
            onPress={() => {
              selectedCity === ''
                ? Toast.error(
                    'Please select a location, click on the location icon above!'
                  )
                : navigation.navigate('MovieScreen', {
                    title: item.title,
                    movieId: item._id,
                  });
            }}
            style={{
              backgroundColor: '#ffc40c',
              padding: 5,
              borderRadius: 5,
              height: 40,
              width: 100,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 500 }}>Book</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default MovieCard;
