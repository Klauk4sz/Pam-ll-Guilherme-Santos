import { Text, View, ScrollView, StyleSheet, Button, Image, SafeAreaView,} from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";

export default function Index() {
  return (
      <View style={styles.container}>
      <Text style={styles.title}>SPORT CLUBE CORINTHIANS PAULISTA</Text>
      <Link to="/tela02" style={styles.box}>
        <Image source={{ uri: 'https://logodownload.org/wp-content/uploads/2016/11/corinthians-logo-0.png' }}
        style={styles.image}/>
      </Link>
      <Text style={styles.title}>TORCIDA</Text>
      <Link to="/tela03" style={styles.box}>
      <Image source={{ uri: 'https://lncimg.lance.com.br/uploads/2023/06/gazeta-press-foto-1894939-scaled-aspect-ratio-512-320.jpg' }}
        style={styles.image}/>
      </Link>
      <Text style={styles.title}>MEMPHIS DEPAY</Text>
      <Link to="/tela04" style={styles.box}>
      <Image source={{ uri: 'https://s2-ge.glbimg.com/zEv85X-gu9cSGxRzkY9N1FumW_E=/0x0:1280x1600/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/A/j/GZCZiYSViwZnPwA79xVw/memphisdepay.jpeg' }}
        style={styles.image}/>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  title:{
    flex: 1,
    paddingTop: 30,
    paddingBottom: 20,
    color: '#FFFFFF',
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'Bold',
  },
  box:{
    height: 300,
    width: 300,
    bordercolor: '#F01F01',
    borderWidth: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width:'100%',
    height:'100%',
  },
  scrollView:{
    flex:1,
  },
  scrollViewContent:{
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})