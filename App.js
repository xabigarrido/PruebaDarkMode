import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import {useColorScheme} from 'nativewind'
export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme()
  console.log(colorScheme)
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View className="flex-1 justify-center items-center bg-slate-300 dark:bg-black">
      <Switch value={colorScheme == "dark"} onChange={toggleColorScheme}/>
      <Text className="dark:text-white">Hola mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
