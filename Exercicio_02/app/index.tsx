import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, ScrollView, StatusBar, Image, Linking} from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Image
      style={styles.tinyLogo}
      source={{
        uri:'https://i.pinimg.com/originals/9d/ca/17/9dca17307a0754e56562be4e77469111.gif',
      }}
      />
    </View>
    <View>
      <Text style={styles.title}>
        Incrivel como eu odeio React
      </Text>
      <Button
        title="Aperte aqui se voce concorda"
        onPress={() => Linking.openURL('https://media.tenor.com/Y8wph02kkOIAAAAM/i-now-pronounce-you-chuck-and-larry-chuck.gif')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
       O professor e legal mais o react-native nao
      </Text>
      <Button
        title="Joao Sorrisao"
        color="#ff9812"
        onPress={() => Linking.openURL('https://www.java.com/pt-BR/')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        EEEEEEEEEEEEEEEEEEEEEEEEEEEE
      </Text>
      <Button
        title="Press me"
        color="#F23F6D"
        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=9cIWcoQONfk')}
      />
    </View>
    <Separator />
    
      <Text style={styles.title}>
        Nao Aperte os proximos Botoes
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Clique aqui"
          color={'#DB1D00'}
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=NKvX2GHVWjY&pp=ygUabWFkYXJhIHZzIGFsaWFuw6dhIHNoaW5vYmk%3D')}
        />
        <Button
          title="Clique Aqui Tambem"
          color={'#0F00DB'}
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=VgDgWzBL7s4&pp=ygUocm9jayBsZWUgdnMgZ2FhcmEgbGlua2luIHBhcmsgaW4gdGhlIGVuZA%3D%3D')}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Meu deus do ceu, como eu estou com medo do TCC
        </Text>
      </ScrollView>
    
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'red',
  },
  text: {
    fontSize: 42,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#555',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  tinyLogo: {
    width: 200,
    height: 100,
    paddingTop: 50,
  },
  logo: {
    width: 100,
    height: 50,
  },
});

export default App;