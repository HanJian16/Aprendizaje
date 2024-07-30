import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(1, 26, 93, 255)',
    flex: 1,
  },
});
