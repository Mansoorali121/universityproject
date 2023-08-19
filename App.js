// App.js
import React from 'react';
import { View, StatusBar } from 'react-native';
import Navigation from './navigation/StackNavigator';
import SplashScreenComponent from './src/SplashScreen';





const App = () => {
  const [appReady, setAppReady] = React.useState(false);

  React.useEffect(() => {
    // Simulate an asynchronous process (e.g., loading data) for 2 seconds
    setTimeout(() => setAppReady(true), 2000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      {appReady ? (
        <Navigation />
      ) : (
        <SplashScreenComponent />
      )}
    </View>
  );
};

export default App;
