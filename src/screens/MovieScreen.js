import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';
import Calendar from '../components/Calendar';
import { Cities } from '../CitiesContext';
import { client } from '../../moviee-sanity2/sanity';

const MovieScreen = () => {
  const malls = [
    {
      id: '0',
      city: 'Lagos',
      galleria: [
        {
          id: '10',
          name: 'Ikeja City Mall',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '11',
          name: 'Lekki City Mall',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '12',
          name: 'Orion Village',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '13',
          name: 'Aura Park, Lagos',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '14',
          name: 'The Cinema World',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '15',
          name: 'Mega Cinema',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '1',
      city: 'Ogun',
      galleria: [
        {
          id: '20',
          name: 'Shoprite Tollgate',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '21',
          name: 'Fake Mall, Abeokuta',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '22',
          name: 'Preston Mall',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '23',
          name: 'Lake Mall',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '24',
          name: 'Next Galleria',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '25',
          name: 'Cineplax Complex',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '2',
      city: 'Kano',
      galleria: [
        {
          id: '30',
          name: 'Select City Walk Cinema',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '31',
          name: 'Popcorn Village',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '32',
          name: 'ECX Mall',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '33',
          name: 'Promenade Vasant',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '34',
          name: 'Cinema Kano',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '35',
          name: 'AbdulFaridah Plaza',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '3',
      city: 'Anambra',
      galleria: [
        {
          id: '34',
          name: 'Monterr Plaza',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '41',
          name: 'Transcube Complex',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '42',
          name: 'Cinemax Shiver',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '43',
          name: 'Acropolis Hall',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '44',
          name: 'Cinemax Dev Arc Anambra',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '4',
      city: 'Chennai',
      galleria: [
        {
          id: '50',
          name: 'Galaxy Mall, Red Hills',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '51',
          name: 'SPI Cinematic World',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '52',
          name: 'Igwe Palace',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '53',
          name: 'Another Fake Mall',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '54',
          name: 'Nexus Plaza',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '5',
      city: 'Port-Harcourt',
      galleria: [
        {
          id: '60',
          name: 'Avani Place',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '61',
          name: 'Diamond Plaza',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '62',
          name: 'Manisquare',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '63',
          name: 'Uniworld Downtown Mall, New Town',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '6',
      city: 'Abuja',
      galleria: [
        {
          id: '70',
          name: 'Jabi Lake Mall',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '71',
          name: 'PVR LUXE MALL OF Rivers',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '72',
          name: 'PVR Manisquare',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '73',
          name: 'PVR Uniworld Downtown Mall, Old Town',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
    {
      id: '7',
      city: 'Lucknow',
      galleria: [
        {
          id: '80',
          name: 'PVR Phoenix Lucknow',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '81',
          name: 'PVR Sahara Lucknow',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '82',
          name: 'PVR Rivers Lucknow',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '83',
          name: 'PVR Lock Lucknow',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
        {
          id: '84',
          name: 'PVR SUPERPLEX Lucknow',
          showtimes: [
            '9:00AM',
            '10:30AM',
            '1:25PM',
            '2:00PM',
            '4:20PM',
            '5:00PM',
            '6:30PM',
            '9:00PM',
            '10:30PM',
          ],
        },
      ],
    },
  ];

  const navigation = useNavigation();
  const route = useRoute();
  const today = moment().format('YYYY-MM-DD');

  const [selectedDate, setSelectedDate] = useState(today);

  const { selectedCity, setSelectedCity } = useContext(Cities);

  const [cinema, setCinema] = useState([]);

  const { cityId } = useContext(Cities);
  const [reqData, setReqData] = useState([]);

  useEffect(() => {
    const fetchTheaters = async () => {
      const response =
        await client.fetch(`*[_type == 'theater' && Location._ref == '${cityId}'] {
        ...,
        "showtimes": *[_type == 'showtimes' && references(^._id) && references('movie', "${route.params.movieId}")] {
          _id,
          time,
          row,
          "theater": theater-> name,
          "movie": movie->name,
        }
      }`);
      setReqData(response);
    };
    fetchTheaters();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
      headerStyle: {
        backgroundColor: '#F5F5F5',
        shadowColor: 'transparent',
        shadowOpacity: 0.3,
        shadowOffset: { width: -1, height: 1 },
        shadowRadius: 3,
      },
    });
  }, []);

  return (
    <>
      <View style={{ marginHorizontal: 5 }}>
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </View>

      <View>
        {reqData.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setCinema(item.name)}>
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: 500 }}>{item.name}</Text>

              {cinema.includes(item.name) ? (
                <FlatList
                  numColumns={3}
                  data={item.showtimes}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('TheaterScreen', {
                          cinema: cinema,
                          showtime: item.time,
                          selectedDate: selectedDate,
                          name: route.params.title,
                          rows: item.row,
                          doc_id: item._id,
                          showtimeId: index,
                        })
                      }
                      style={{
                        alignItems: 'center',
                        borderWidth: 0.75,
                        borderColor: 'green',
                        borderRadius: 5,
                        padding: 5,
                        width: 70,
                        margin: 5,
                      }}
                    >
                      <Text style={{ color: 'green' }}>{item.time}</Text>
                    </TouchableOpacity>
                  )}
                />
              ) : null}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default MovieScreen;
