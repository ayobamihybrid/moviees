import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Cities } from '../CitiesContext';
import MovieCard from '../components/MovieCard';
import { Foundation } from '@expo/vector-icons';
import {
  BottomModal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from 'react-native-modals';
import 'url-search-params-polyfill';
import { URL } from 'react-native-url-polyfill';
import { client } from '../../moviee-sanity2/sanity';

const Homescreen = () => {
  const data = [
    {
      adult: false,
      backdrop_path: '/2EL6QrQmUt2ntBXjuHO4KsEfaoU.jpg',
      genre_ids: [27, 9648, 53],
      id: 758323,
      original_language: 'English',
      overview:
        "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
      popularity: 4935.809,
      poster_path: '/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg',
      release_date: '2023-04-07',
      title: "The Pope's Exorcist",
      video: false,
      vote_average: 7.4,
      vote_count: 400,
    },
    {
      adult: false,
      backdrop_path: '/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg',
      genre_ids: [16, 12, 10751, 14, 35],
      id: 502356,
      original_language: 'English',
      overview:
        'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
      popularity: 4137.922,
      poster_path: '/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
      release_date: '2023-04-07',
      title: 'The Super Mario Bros',
      video: false,
      vote_average: 7.5,
      vote_count: 1760,
    },
    {
      adult: false,
      backdrop_path: '/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg',
      genre_ids: [27],
      id: 713704,
      original_language: 'English',
      overview:
        'Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.',
      popularity: 1136.358,
      poster_path: '/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg',
      release_date: '2023-04-21',
      title: 'Evil Dead Rise',
      video: false,
      vote_average: 7.1,
      vote_count: 356,
    },
    {
      adult: false,
      backdrop_path: '/kZ7unRnWe8UwpJsc1n5venXr9u2.jpg',
      genre_ids: [18, 28],
      id: 619329,
      original_language: 'English',
      overview:
        'In a Village Where they used to Honor Kill Love couples of the opposite cast and in that village A girl and boy from the opposite cast who used to be friends are getting pressure from village people that they love each other . What happens at the End?\r Whether they succeed or not is the story.',
      popularity: 138.808,
      poster_path: '/k7iEwxmphkr1bwb66CHA4dhyyBF.jpg',
      release_date: '2023-04-07',
      title: 'Kill',
      video: false,
      vote_average: 2,
      vote_count: 1,
    },
    {
      adult: false,
      backdrop_path: '/dWwcwqAOkS6e4GCRJ5fC9iSVx9O.jpg',
      genre_ids: [28, 12, 18, 36],
      id: 858082,
      original_language: 'Tamil',
      overview:
        'Arulmozhi Varman continues on his journey to become Rajaraja I, the greatest ruler of the historic Chola empire of South India.',
      popularity: 47.466,
      poster_path: '/1fMM5yjLYJNfO3CSQBpfC1kqeIK.jpg',
      release_date: '2023-04-28',
      title: 'Ponniyin Selvan: Part II',
      video: false,
      vote_average: 7.3,
      vote_count: 13,
    },
    {
      adult: false,
      backdrop_path: '/sv7JscTpQv8K7XnRwnbKQsCP3N9.jpg',
      genre_ids: [18],
      id: 939423,
      original_language: 'Hindi',
      overview:
        'Rahab - a top advertising professional and Nivi - a political heiress, find no place to hide as they get entangled in a vicious rumour created by the social media machinery.',
      popularity: 30.002,
      poster_path: '/ctz7lT3HX78AACZM9LeW0gmjxLJ.jpg',
      release_date: '2023-05-05',
      title: 'Afwaah',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [35, 18],
      id: 946297,
      original_language: 'English',
      overview: '',
      popularity: 25.969,
      poster_path: '/bnVRLe76H5Fpg135i0HEV7gvn2K.jpg',
      release_date: '2023-05-05',
      title: 'Charles Enterprises',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 1085258,
      original_language: 'English',
      popularity: 24.603,
      poster_path: null,
      release_date: '2023-05-05',
      title: "The Pope's Exorcist II",
      poster_path: '/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/tqQNfBHzAqWXbjD2pKFdZTMrQHs.jpg',
      genre_ids: [28, 35],
      id: 1074641,
      original_language: 'Spanish',
      overview:
        "Years after running away from his pacifist brother Rajaram, Vicky lives as a gangster in Kolkata. When Vicky returns home, Rajaram's organic food business empire is in the doldrums because his rival GK is conspiring against it. Can Vicky save his brother's business in time and teach GK a lesson?",
      popularity: 32.32,
      poster_path: '/gYpJc2TdwJugZF3cG7o7HWwixQy.jpg',
      release_date: '2023-05-05',
      title: 'Ramabanam',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [10751, 18],
      id: 958483,
      original_language: 'Spanish',
      overview:
        "Anuragam is a film set in Kochi, India that explores the complexities of modern-day relationships through the lives of three couples. The story follows Mercy, a single mother and banker who is loved by her manager, Jose, but still grieving the loss of her husband. Meanwhile, popular music composer Shankar is preparing to enter a new relationship after his separation from his wife, Devika, a successful baker. Their daughter, Janani, and Mercy's son, Aswin, are classmates and friends, with their friendship potentially blossoming into romance. Music plays an important role in the film, which ultimately reminds viewers that love can happen at any age and make life worth living.",
      popularity: 24.599,
      poster_path: null,
      release_date: '2023-05-05',
      poster_path: '/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg',
      title: "The Pope's Exorcist III",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/eDVKLzqpNlLx1gzzMaGuqeAxGbQ.jpg',
      genre_ids: [28, 53],
      id: 1069937,
      original_language: 'French',
      overview:
        'CI Shivakumar,a brash police officer, handles a lot of missing cases which has caused great strain on his marriage life. After a serious accident,Shiva admits his wife Aparna and daughter Lucky in hospital, only to find them missing next day. Will Shiva solve the mystery despite suffering from a serious medical condition?',
      popularity: 28.13,
      poster_path: '/cnsJnyCUefcHDQT1OnFgUOSR2nR.jpg',
      release_date: '2023-05-05',
      title: 'Ugram',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/ajrV6MRDZ535UsUsqziZqghRKVM.jpg',
      genre_ids: [28, 18, 10749],
      id: 1112505,
      original_language: 'Tamil',
      overview:
        'Soora Sangu, an auto-rickshaw driver, struggling to cope with post a personal loss, decides to fight against the social evils that exploit women sexually.',
      popularity: 25.972,
      poster_path: '/oNHofVvUfdzVEkTCWodt87x5VlD.jpg',
      release_date: '2023-05-05',
      title: 'Kulasami',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [36],
      id: 994290,
      original_language: 'Spanish',
      overview: 'Left Front vs Indian National Congress Party.',
      popularity: 23.705,
      poster_path: '/sCT8M6ellnQysIERqqIbEbymMGc.jpg',
      release_date: '2023-05-05',
      title: 'Shibpur',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [35],
      id: 1071249,
      original_language: 'English',
      overview: '',
      popularity: 26.216,
      poster_path: '/cMwow5tasnOIj27ozjRk15mmozz.jpg',
      release_date: '2023-05-05',
      title: 'Valatty',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [12],
      id: 1015580,
      original_language: 'English',
      overview: '',
      popularity: 24.305,
      poster_path: '/odDCnXpBVT7Sg3T6JQ9sCYOS5dX.jpg',
      release_date: '2023-05-05',
      title: 'Lucid Dreams',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [12, 9648],
      id: 1118467,
      original_language: 'English',
      overview: '',
      popularity: 23.386,
      poster_path: '/8PRusWgc65oWhW5j62t2ZuzdwOd.jpg',
      release_date: '2023-05-05',
      title: 'Danger in Darjeeling',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/kBdsmOM3QU8bLrATyH0LQ9GWNpV.jpg',
      genre_ids: [10749, 28, 35],
      id: 966719,
      original_language: 'Hindi',
      overview:
        "Bhaijaan, a self-defense trainer lives happily as a bachelor with his three brothers Moh, Ishq and Luv and uses violence to settle disputes. When his brothers, who’ve already found partners, come together to fix a match for him, Bhagya Lakshmi, Bhaijaan decides to mend his ways for his lover's sake. All hell breaks loose when he learns about Bhagya's family facing threats from their haunting past.",
      popularity: 15.87,
      poster_path: '/yJ2JqgfWniQLnXPM5WkM7f1rqaY.jpg',
      release_date: '2023-04-21',
      title: 'Kisi Ka Bhai... Kisi Ki Jaan',
      video: false,
      vote_average: 6.2,
      vote_count: 5,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 1046732,
      original_language: 'English',
      overview: '',
      popularity: 25.866,
      poster_path: null,
      release_date: '2023-05-06',
      title: "The Pope's exorcist III",
      poster_path: '/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/15z4HnocYG7qmgN9R5x4TzA8xlw.jpg',
      genre_ids: [28],
      id: 1034187,
      original_language: 'French',
      overview: '',
      popularity: 20.664,
      poster_path: '/w6ApC28wZTTWFPFdQGW5elpGP70.jpg',
      release_date: '2023-05-05',
      title: 'Dheera',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/hcqY0Er8AhU3UiSAxB5tT6sBiZv.jpg',
      genre_ids: [28, 53],
      id: 885184,
      original_language: 'French',
      overview:
        "In 1990s, Set in small village Veerlapally, Dharani, Vennela, and Suri are childhood friends. Dharani loves Vennela, but she has Suri in her mind. Knowing Suri’s interest in Vennela, Dharani sacrifices his love and helps get them married. But Local politics between Rajanna, Shivanna and the latter's son Chinna Nambi threaten to disrupt their lives.",
      popularity: 11.3,
      poster_path: '/xgIbeYWlfzSGHJ8VtawQ4rf52a7.jpg',
      release_date: '2023-03-30',
      title: 'Dasara',
      video: false,
      vote_average: 9,
      vote_count: 1,
    },
  ];

  const languages = [
    {
      id: '0',
      language: 'English',
    },
    {
      id: '10',
      language: 'French',
    },
    {
      id: '1',
      language: 'Spanish',
    },
    {
      id: '2',
      language: 'Hindi',
    },
    {
      id: '3',
      language: 'Tamil',
    },
    {
      id: '5',
      language: 'Malayalam',
    },
  ];

  const genres = [
    {
      id: '0',
      genre: 'Horror',
    },
    {
      id: '1',
      genre: 'Comedy',
    },
    {
      id: '2',
      genre: 'Action',
    },
    {
      id: '3',
      genre: 'Romance',
    },
    {
      id: '5',
      genre: 'Thriller',
    },
    {
      id: '6',
      genre: 'Drama',
    },
  ];

  global.URL = URL;
  const params = new URLSearchParams();
  params.set('foo', 'bar');

  const navigation = useNavigation();
  const { selectedCity, setSelectedCity } = useContext(Cities);

  const [modalVisible, setModalVisible] = useState(false);

  const moveAnimation = new Animated.Value(1);

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allMovies = await client.fetch(`*[_type == 'movie']`);
      setFilteredMovies(allMovies);
    };

    fetchData();
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveAnimation, {
        toValue: -9,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, [selectedCity]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View>
          <Image
            source={{
              uri: `https://i.pinimg.com/736x/7c/32/cf/7c32cf179c28869753c33028b06d443b.jpg`,
            }}
            style={{ width: 30, height: 30, borderRadius: 8, marginRight: 5 }}
          />
        </View>
      ),
      headerStyle: {
        backgroundColor: 'white',
        shadowColor: 'transparent',
        shadowOpacity: 0.3,
        shadowOffset: { width: -1, height: 1 },
        shadowRadius: 3,
      },
      headerRight: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <View>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('CitiesScreen')}>
            <View>
              <Ionicons name="location-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('CitiesScreen')}>
            <Animated.Text
              style={{
                fontSize: 16,
                transform: [{ translateX: moveAnimation }],
              }}
            >
              <Text>{selectedCity}</Text>
            </Animated.Text>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [selectedCity]);

  const applyFilter = async (sl) => {
    setModalVisible(false);

    if (sl === 'English') {
      setFilteredMovies(
        filteredMovies.filter((filtered) => filtered.original_language === sl)
      );
    }
    if (sl === 'Spanish') {
      setFilteredMovies(
        filteredMovies.filter((filtered) => filtered.original_language === sl)
      );
    }
    if (sl === 'French') {
      setFilteredMovies(
        filteredMovies.filter((filtered) => filtered.original_language === sl)
      );
    }
    if (sl === 'Hindi') {
      setFilteredMovies(
        filteredMovies.filter((filtered) => filtered.original_language === sl)
      );
    }
    if (sl === 'Tamil') {
      setFilteredMovies(
        filteredMovies.filter((filtered) => filtered.original_language === sl)
      );
    }
    if (sl === 'Malayalam') {
      setFilteredMovies(
        filteredMovies.filter((filtered) => filtered.original_language === sl)
      );
    }

    if (sl === '') {
      const allMovies = await client.fetch(`*[_type == 'movie']`);
      setFilteredMovies(allMovies);
    }
  };

  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://wallpapercave.com/wp/wp9456609.jpg',
        }}
        style={{ height: 200, marginBottom: 60 }}
      >
        <View
          style={{
            top: 156,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 7,
            width: '90%',
            height: 90,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={{ flexDirection: 'column', gap: 4 }}>
              <Text style={{ fontSize: 15, fontWeight: 500 }}>
                Releasing in 1 day
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 700 }}>CUSTODY</Text>
              <Text style={{ fontSize: 15, fontWeight: 500, color: 'gray' }}>
                U.A. ENGLISH
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: '#ffc40c',
                padding: 10,
                borderRadius: 5,
                height: 40,
                marginRight: 10,
              }}
            >
              <Text>Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <View style={{ paddingBottom: 520 }}>
        <FlatList
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-around' }}
          data={filteredMovies}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <MovieCard item={item} />}
        />
      </View>

      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={{
          position: 'absolute',
          bottom: 300,
          height: 60,
          width: 60,
          right: 5,
          backgroundColor: '#ffc40c',
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Foundation name="filter" size={24} color="black" />
      </TouchableOpacity>

      <BottomModal
        visible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        onTouchOutside={() => setModalVisible(!modalVisible)}
        modalTitle={<ModalTitle title="filters" />}
        modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
        swipeDirection={['up', 'down']}
        swipeThreshold={200}
        footer={
          <ModalFooter
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 15,
            }}
          >
            <View>
              <TouchableOpacity onPress={() => applyFilter(selectedLanguage)}>
                <Text style={{ fontSize: 15, fontWeight: 600 }}>Apply</Text>
              </TouchableOpacity>
            </View>
          </ModalFooter>
        }
      >
        <ModalContent>
          <Text style={{ fontSize: 17, fontWeight: 600 }}>Languages</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            {languages.map((language, index) =>
              selectedLanguage === language.language ? (
                <TouchableOpacity
                  onPress={() => setSelectedLanguage('')}
                  key={index}
                  style={{
                    borderRadius: 30,
                    backgroundColor: 'orange',
                    margin: 5,
                    paddingVertical: 5,
                    paddingHorizontal: 11,
                  }}
                >
                  <Text style={{ color: 'white' }}>{language.language}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setSelectedLanguage(language.language)}
                  key={index}
                  style={{
                    borderWidth: 1,
                    borderRadius: 30,
                    borderColor: '#C8C8C8',
                    margin: 5,
                    paddingVertical: 5,
                    paddingHorizontal: 11,
                  }}
                >
                  <Text>{language.language}</Text>
                </TouchableOpacity>
              )
            )}
          </View>

          <Text style={{ fontSize: 17, fontWeight: 600, marginTop: 10 }}>
            Genres
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            {genres.map((genre, index) =>
              selectedGenre === genre.genre ? (
                <TouchableOpacity
                  onPress={() => setSelectedGenre('')}
                  key={index}
                  style={{
                    borderRadius: 30,
                    backgroundColor: 'orange',
                    margin: 5,
                    paddingVertical: 5,
                    paddingHorizontal: 11,
                  }}
                >
                  <Text style={{ color: 'white' }}>{genre.genre}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setSelectedGenre(genre.genre)}
                  key={index}
                  style={{
                    borderWidth: 1,
                    borderRadius: 30,
                    borderColor: '#C8C8C8',
                    margin: 5,
                    paddingVertical: 5,
                    paddingHorizontal: 11,
                  }}
                >
                  <Text>{genre.genre}</Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default Homescreen;
