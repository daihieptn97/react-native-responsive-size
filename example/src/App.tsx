import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { heightResponsive } from 'react-native-responsive-size';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: heightResponsive(200), backgroundColor: 'green' }}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
