import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import RNAuthorizeNet from 'react-native-reliantid-authorize-net';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getAccept = () => {
    RNAuthorizeNet.getTokenWithRequestForCard(
      {
        LOGIN_ID: '885cqCLFYA',
        CLIENT_KEY:
          '7GyVZacR7H6jnQkzmg2XGYqG85z7UqyvxexcTPX96Y99FtzCBfT7GPS67ptp537m',
        CARD_NO: '4242424242424242',
        EXPIRATION_MONTH: '12',
        EXPIRATION_YEAR: '24',
        CVV_NO: '123',
      },
      false,
      (status, res) => {
        console.log('status: ', status);
        console.log('res: ', res);
      },
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        />
        <Button title="Check accept" color="#841584" onPress={getAccept} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
