import { Text, View, StyleSheet, Image} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function tela02(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>DEFINIÇAO</Text>
        <Image source={{ uri: 'https://i.imgur.com/YHRLpsh.gif' }}
        style={styles.image}
        />
        <Text style={styles.title}>
            Clube de futebol Paulista, cuja sede fica à Rua São Jorge, 777, Parque São Jorge, São Paulo-SP. 
            Fundado em 1910, possui inúmeros títulos regionais, nacionais, e internacionais. 
            Entre eles o de Campeão Mundial da FIFA Federação Internacional de Futebol Associação.</Text>
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