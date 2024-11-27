import React, { useState, useEffect } from 'react';
import { View, TextInput, Alert, FlatList, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDcgVcbGhrOCvrINh_CiJ7sxdy2y2erUIY",
  authDomain: "firstfirebase-57729.firebaseapp.com",
  projectId: "firstfirebase-57729",
  storageBucket: "firstfirebase-57729.firebasestorage.app",
  messagingSenderId: "435394738041",
  appId: "1:435394738041:web:e7f24d52a898afb65fe1a8"
};

// Inicialize o Firebase antes de qualquer uso
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      try {
        const snapshot = await nomesCollection.get();
        const nomesData = snapshot.docs.map(doc => ({
          id: doc.id,
          nomeCompleto: `${doc.data().Nome} ${doc.data().Sobrenome}`,
        }));
        setNomes(nomesData);
      } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Ocorreu um erro ao buscar os dados.');
      }
    };

    fetchData();
  }, []);

  const sendData = async () => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      const docRef = await nomesCollection.add({
        Nome: nome,
        Sobrenome: sobrenome
      });
      Alert.alert('Sucesso', 'Dados cadastrados com sucesso!');
      setNome('');
      setSobrenome('');
      fetchData();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar os dados.');
    }
  };

  const updateData = async () => {
    if (documentId) {
      const nomesCollection = firebase.firestore().collection('Nomes');
      try {
        await nomesCollection.doc(documentId).update({
          Nome: nome,
          Sobrenome: sobrenome
        });
        Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
        setDocumentId('');
        setNome('');
        setSobrenome('');
        fetchData();
      } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Ocorreu um erro ao atualizar os dados.');
      }
    } else {
      Alert.alert('Erro', 'Nenhum documento selecionado para atualização.');
    }
  };

  const deleteData = async () => {
    if (documentId) {
      const nomesCollection = firebase.firestore().collection('Nomes');
      try {
        await nomesCollection.doc(documentId).delete();
        Alert.alert('Sucesso', 'Dados excluídos com sucesso!');
        setDocumentId('');
        setNome('');
        setSobrenome('');
        fetchData();
      } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Ocorreu um erro ao excluir os dados.');
      }
    } else {
      Alert.alert('Erro', 'Nenhum documento selecionado para exclusão.');
    }
  };

  const fetchData = async () => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      const snapshot = await nomesCollection.get();
      const nomesData = snapshot.docs.map(doc => ({
        id: doc.id,
        nomeCompleto: `${doc.data().Nome} ${doc.data().Sobrenome}`,
      }));
      setNomes(nomesData);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao buscar os dados.');
    }
  };

  const handleItemPress = (item) => {
    const [nome, sobrenome] = item.nomeCompleto.split(' ');
    setNome(nome);
    setSobrenome(sobrenome);
    setDocumentId(item.id);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={sendData}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={updateData}>
          <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deleteData}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.instruction}>Para atualizar ou Excluir, clique no nome desejado:</Text>
      <FlatList
        data={nomes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handleItemPress(item)}>
            <Text style={styles.itemText}>{item.nomeCompleto}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f9', // cor de fundo mais suave
    justifyContent: 'flex-start',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4caf50', // verde mais suave
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  instruction: {
    fontSize: 14,
    marginBottom: 15,
    color: '#555',
    textAlign: 'center',
  },
  item: {
    padding: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    backgroundColor: '#81c784', // tom mais suave de verde
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default App;
