import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthNav from './src/authentication/authNav';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AuthNav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
