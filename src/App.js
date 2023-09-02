import BottomNavigation from './navigation/stackNavigator';
import { CitiesContext } from './CitiesContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ModalPortal } from 'react-native-modals';
import { Provider } from 'react-redux';
import store from './redux/store';
import ToastManager from 'toastify-react-native';

export default function App() {
  return (
    <Provider store={store}>
      <CitiesContext>
        <BottomNavigation />
        <ModalPortal />
        <ToastManager
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          fontSize="6px"
          height="100px"
          width="100%"
          animationStyle="rightInOut"
        />
      </CitiesContext>
    </Provider>
  );
}
