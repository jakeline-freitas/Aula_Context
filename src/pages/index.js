import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';

import { Input } from '../components/Input';
import Icon from 'react-native-vector-icons/Feather'

import DataContext from '../contexts/DataProvider';

export function Index({ navigation }) {

    // const {dados} = useContext(DataContext)
    const { adcionarDados} = useContext(DataContext)
    
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')

    const propriedades = {
        'nome': nome,
        'cpf': cpf,
        'email': email,
        'tipo': 'pessoal'
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        // style={{ flex: 1 }}
        >
            <StatusBar backgroundColor="#725dff"/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='layers' size={30} color='#fff' style={{ marginLeft: 20 }} />
                            <Text style={styles.titulo}>Cadastro</Text>
                        </View>
                        <View>
                            <Text style={{
                                color: "#fff",
                                fontSize: 15,
                                marginLeft: 10,
                            }}>Dados Pessoais</Text>
                        </View>
                    </View>

                    <View style={styles.main}>
                        <Input placeholder="Nome" onChangeText={setNome} value={nome}/>
                        <Input placeholder="Cpf" onChangeText={setCpf} value={cpf}/>
                        <Input placeholder="E-mail" onChangeText={setEmail} value={email}/>
                    </View>
                    <View style={styles.boxButton}>
                        <TouchableOpacity style={styles.button} onPress={() => adcionarDados(propriedades)} onPressOut= {() => navigation.navigate("Profissional")}>
                            <Icon name='chevron-right' size={25} color='#fff' />
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    header: {
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 200,
        backgroundColor: '#725dff',
        flexWrap: 'wrap'
    },
    titulo: {
        color: "#fff",
        fontSize: 25,
        marginLeft: 10,
        fontFamily: 'Roboto-Regular'

    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',

        // backgroundColor:'blue'
    },
    boxButton: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: "100%",

    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "25%",
        height: 55,
        backgroundColor: '#a99eff',
        margin: 20,
        borderRadius: 20

    }


})