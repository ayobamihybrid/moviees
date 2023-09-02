import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CitiesCard from '../components/CitiesCard';
import { client } from '../../moviee-sanity2/sanity';
import { SafeAreaView } from 'react-native-safe-area-context';

const CitiesScreen = () => {
  const Cities = [
    {
      id: '0',
      city: 'Lagos',
      image:
        'https://media.istockphoto.com/id/1484126863/photo/marina-from-the-top.jpg?s=612x612&w=0&k=20&c=GY_nNjNAYzMV9qoDwLcVv8hk6YI3xbKuzctSdUDOY9k=',
    },
    {
      id: '1',
      city: 'Ogun',
      image:
        'https://images.pexels.com/photos/3172830/pexels-photo-3172830.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '2',
      city: 'Port-Harcourt',
      image:
        'https://images.pexels.com/photos/2014342/pexels-photo-2014342.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '3',
      city: 'Akwa-Ibom',
      image:
        'https://images.pexels.com/photos/16237807/pexels-photo-16237807/free-photo-of-aerial-view-of-the-moshood-abiola-national-stadium-abuja-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '4',
      city: 'Abuja',
      image:
        'https://images.pexels.com/photos/16237804/pexels-photo-16237804/free-photo-of-aerial-view-of-abuja-in-fog-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '6',
      city: 'Anambra',
      image:
        'https://media.istockphoto.com/id/1307710678/photo/aerial-street-view-of-lagos.jpg?s=612x612&w=0&k=20&c=lkQ1AGfSb-k5EUqk_Udorgi4HfFDHo5EjPaaaCe4FVQ=',
    },
    {
      id: '7',
      city: 'Imo',
      image:
        'https://media.istockphoto.com/id/1295745649/photo/light-phase-one.jpg?s=612x612&w=0&k=20&c=gO0uw1DqwJtx4eefj5pZJ4RlF9g7UBqCDUKT4guqrt0=',
    },
    {
      id: '8',
      city: 'Kano',
      image:
        'https://media.istockphoto.com/id/900714740/photo/african-city-lagos-nigeria.jpg?s=612x612&w=0&k=20&c=Dwmhj4KuPail04dfqCoThffoFZQfm5uGkvVtL4kLY60=',
    },
    {
      id: '8',
      city: 'Kano',
      image:
        'https://media.istockphoto.com/id/900714740/photo/african-city-lagos-nigeria.jpg?s=612x612&w=0&k=20&c=Dwmhj4KuPail04dfqCoThffoFZQfm5uGkvVtL4kLY60=',
    },
    {
      id: '8',
      city: 'Kano',
      image:
        'https://media.istockphoto.com/id/900714740/photo/african-city-lagos-nigeria.jpg?s=612x612&w=0&k=20&c=Dwmhj4KuPail04dfqCoThffoFZQfm5uGkvVtL4kLY60=',
    },
    {
      id: '8',
      city: 'Kano',
      image:
        'https://media.istockphoto.com/id/900714740/photo/african-city-lagos-nigeria.jpg?s=612x612&w=0&k=20&c=Dwmhj4KuPail04dfqCoThffoFZQfm5uGkvVtL4kLY60=',
    },
  ];

  const navigation = useNavigation();

  const [places, SetPlaces] = useState([]);

  useEffect(() => {
    const getCities = async () => {
      const cities = await client.fetch(`*[_type == 'location']`);
      SetPlaces(cities);
    };
    getCities();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={{ fontSize: 15, letterSpacing: 1 }}>
            CHANGE LOCATION
          </Text>
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View>
      <View
        style={{
          borderWidth: 2,
          borderColor: '#E0E0E0',
          borderRadius: 30,
          width: '90%',
          marginTop: 30,
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TextInput style={{ flex: 1 }} placeholder="Search Your City" />
        <Feather name="search" size={24} color="black" />
      </View>

      <Text style={{ marginLeft: 25, marginTop: 15 }}>Select Location</Text>

      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        data={places}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <CitiesCard item={item} />}
      />
    </View>
  );
};

export default CitiesScreen;
