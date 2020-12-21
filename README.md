# react-native-responsive-size

Support typescripts

## Installation

```sh
yarn add react-native-responsive-size
```

## Usage

```js
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
  },
});

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
