import React, {useState, useContext} from 'react';

import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import DataContext from '../contexts/DataProvider';
import { Input } from '../components/Input';
import UselessTextInputMultiline from '../components/inputMultiline';
import Icon from 'react-native-vector-icons/Feather'

export function DadosProfissionais({ navigation }) {
    const { adcionarDados} = useContext(DataContext)
    
    const [escolaridade, setEscolaridade] = useState('')
    const [idiomas, setIdiomas] = useState('')
    const [experiencias, setExperiencias] = useState('')

    const propriedades = {
        'escolaridade': escolaridade,
        'idiomas': idiomas,
        'tipo': 'profissional',
        'experiencias': experiencias
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
                            }}>Dados Profissionais</Text>
                        </View>

                    </View>

                    <View style={styles.main}>
                        <Input placeholder="Escolaridade" onChangeText={setEscolaridade} value={escolaridade}/>
                        <Input placeholder="Idiomas" onChangeText={setIdiomas} value={idiomas}/>
                        <Input placeholder="Experiências" onChangeText={setExperiencias} value={experiencias}/>
                        
                    </View>
                    <View style={styles.boxButton}>
                        <TouchableOpacity style={styles.button} onPress = {() => adcionarDados(propriedades)} onPressOut ={() => navigation.navigate('Resumo')}>
                            <Text style={{color:'#fff', fontSize:15, fontFamily:'Roboto-Regular'}}>Resumo</Text>
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
        justifyContent:'center',
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