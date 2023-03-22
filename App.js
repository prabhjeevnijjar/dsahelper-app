import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import {SafeAreaView, Text} from 'react-native';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView>
        <Text>Prabhjeev</Text>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
