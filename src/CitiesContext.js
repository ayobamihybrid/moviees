import { createContext, useState } from 'react';

const Cities = createContext();

const CitiesContext = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [cityId, setCityId] = useState('');

  return (
    <Cities.Provider
      value={{ selectedCity, setSelectedCity, cityId, setCityId }}
    >
      {children}
    </Cities.Provider>
  );
};

export { Cities, CitiesContext };
