import firebase from 'firebase/compat/app';
import 'firebase/combat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcgVcbGhrOCvrINh_CiJ7sxdy2y2erUIY",
  authDomain: "firstfirebase-57729.firebaseapp.com",
  projectId: "firstfirebase-57729",
  storageBucket: "firstfirebase-57729.appspot.com",
  messagingSenderId: "435394738041",
  appId: "1:435394738041:web:e7f24d52a898afb65fe1a8"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import{ View, Text, FlatList } from 'react-native';

export default function App() {
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const nomesCollection = firebase.firestore().collection('Nomes');
            const snapshot = await nomesCollection.get();

            const data = [];
            snapshot.forEach((doc) => {
                data.push({id: doc.id, ...doc.data() });
            });

            setNomes(data);
        };

        fetchData();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Lista de Nomes:</Text>
            <FlatList
            data={nomes}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <View>
                    <Text>{item.nome} {item.sobrenome}</Text>
                    </View>
            )}
            />
        </View>
    );
}