import { Text, View, StyleSheet, Image} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function tela02(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>MEMPHIS DEPAY</Text>
        <Image source={{ uri: 'https://i.pinimg.com/originals/f2/8a/ce/f28ace3c7befae344c07764c2565298f.gif' }}
        style={styles.image}
        />
        <Text style={styles.title}>
        O Corinthians anunciou a contratação de Memphis Depay.
        O atacante holandês, de 30 anos, assinou nesta segunda-feira o contrato válido até o fim de 2026 ainda na Holanda. 
        A expectativa é que ele chegue ao Brasil na quarta e seja apresentado durante o intervalo
        da partida contra o Juventude, pela Copa do Brasil.
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