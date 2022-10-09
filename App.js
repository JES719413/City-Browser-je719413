import { StyleSheet, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ArtInst from "./assets/art.png";
import mile from "./assets/mile.png";
import williscen from "./assets/willis.png";
import npier from "./assets/pier.png";
import waterfr from "./assets/water.png";
import * as WebBrowser from 'expo-web-browser';
import Button from './Button';



function Art({ navigation }) {
  return (
    <View>
      <Image source={ArtInst} style={styles.images}></Image>
      <Button info style={styles.button}
        onPress={() => WebBrowser.openBrowserAsync("https://www.artic.edu/")}>
        More Information
      </Button>
    </View>

  );
}
function Magnificent({ navigation }) {
  return (
    <View>
      <Image source={mile} style={styles.images}></Image>
      <Button info style={styles.button}
        onPress={() => WebBrowser.openBrowserAsync("https://www.themagnificentmile.com/")}>
        More Information
      </Button>
    </View>
  );
} function Navy({ navigation }) {
  return (
    <View>
      <Image source={npier} style={styles.images}></Image>
      <Button info style={styles.button}
        onPress={() => WebBrowser.openBrowserAsync("https://navypier.org/")}>
        More Information
      </Button>
    </View>
  );
} function Water({ navigation }) {
  return (
    <View>
      <Image source={waterfr} style={styles.images}></Image>
      <Button info style={styles.button}
        onPress={() => WebBrowser.openBrowserAsync("https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html")}>
        More Information
      </Button>
    </View>
  );
} function Willis({ navigation }) {
  return (
    <View>
      <Image source={williscen} style={styles.images}></Image>
      <Button info style={styles.button}
        onPress={() => WebBrowser.openBrowserAsync("https://www.willistower.com")}>
        More Information
      </Button>
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Art Institute of Chicago" component={Art} />
        <Drawer.Screen name="Magnificent Mile" component={Magnificent} />
        <Drawer.Screen name="Navy Pier" component={Navy} />
        <Drawer.Screen name="Water Tower" component={Water} />
        <Drawer.Screen name="Willis Tower" component={Willis} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    position: "absolute",
    height: 480,
    width: 320,
    left: 35,
    top: 100,

  },
  button: {
    position: "absolute",
    top: 600,
    left: 130,

  },
});
