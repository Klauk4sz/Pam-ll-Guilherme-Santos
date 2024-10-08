import { Text, View, StyleSheet, Image} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function tela02(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>GAVIOES DA FIEL</Text>
        <Image source={{ uri: 'https://64.media.tumblr.com/tumblr_m246hgRVHa1rp1gp6o1_500.gif' }}
        style={styles.image}
        />
        <Text style={styles.title}>
           O Grêmio Recreativo Cultural e Escola de Samba Gaviões da Fiel.
           Torcida é a maior torcida organizada do Sport Club Corinthians Paulista e também uma escola de samba da cidade de São Paulo. 
           Fundada em 1969, localiza-se no bairro do Bom Retiro, contando com mais de 140 mil associados.
        </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000',
        paddingTop: 20,
      },
    image:{
        width: '55%',
        height: '55%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    title:{
        color: '#FFFFFF',
        paddingTop: 30,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Bold',
      },
})