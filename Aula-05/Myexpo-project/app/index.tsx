import React, {useState} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

//Configuraçoes de Fibase (Substitua pelo seus valores)
const firebaseConfig = {
  apiKey: "AIzaSyDcgVcbGhrOCvrINh_CiJ7sxdy2y2erUIY",
  authDomain: "firstfirebase-57729.firebaseapp.com",
  projectId: "firstfirebase-57729",
  storageBucket: "firstfirebase-57729.appspot.com",
  messagingSenderId: "435394738041",
  appId: "1:435394738041:web:e7f24d52a898afb65fe1a8"
};

//Inicialize o Firebase antes de qualquer de uso
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // O usuario foi criado com sucesso
        const user = userCredential.user;
        console.log('Usuario criado com sucesso', user); 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erro ao criar usuarios:' , error);
      });
    }catch (error){
      console.log(error);
    }
};

return(
  <View>
    <TextInput
    placeholder="Email"
    value={email}
    onChangeText={setEmail}
    />
    <TextInput
    placeholder="Senha"
    secureTextEntry
    value={password}
    onChangeText={setPassword}
    />
    <Button title="Cadastrar" onPress={handleSignup} />
    </View>
);
};

export default App;