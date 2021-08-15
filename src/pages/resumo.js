import React, { useContext } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import DataContext from '../contexts/DataProvider';

export function Resumo() {
    const { dados } = useContext(DataContext)

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#725dff" />
            <View style={styles.box}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 5 }}>
                    <MaterialIcons name='portrait' size={25} color="#725dff" />
                    <Text style={styles.titulo}> Dados Pessoais</Text>
                </View>

                <View style={styles.textos}>
                    <View style={{ flexDirection: 'row', margin: 5 }}>
                        <MaterialIcons name='person' size={30} color="#725dff" />
                        <Text style={styles.dados}> {dados.nome}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 5 }}>
                        <MaterialIcons name='subtitles' size={30} color="#725dff" />
                        <Text style={styles.dados}> {dados.cpf}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 5 }}>
                        <MaterialIcons name='email' size={30} color="#725dff" />
                        <Text style={styles.dados}> {dados.email}</Text>
                    </View>

                </View>

            </View>
            <View style={styles.box}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 5 }}>
                    <MaterialIcons name='badge' size={25} color="#725dff" />
                    <Text style={styles.titulo}> Dados Profissionais</Text>
                </View>

                <View style={styles.textos}>
                    <View style={{ flexDirection: 'row', margin: 5 }}>
                        <MaterialIcons name='school' size={30} color="#725dff" />
                        <Text style={styles.dados}> {dados.escolaridade}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 5 }}>
                        <MaterialIcons name='language' size={30} color="#725dff" />
                        <Text style={styles.dados}> {dados.idiomas}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 5 }}>
                        <MaterialIcons name='work' size={30} color="#725dff" />
                        <Text style={styles.dados}> {dados.experiencias}</Text>
                    </View>
                    {/* <View style={{ flexDirection: 'row', margin: 5 }}>
                        <MaterialIcons name='contact-mail' size={30} color="#725dff" />
                        <Text> {dados.email}</Text>
                    </View> */}

                </View>
            </View>

            {/* <Text>{dados.nome}</Text>
            <Text>{dados.cpf}</Text>
            <Text>{dados.email}</Text>
            <Text>{dados.escolaridade}</Text>
            <Text>{dados.idiomas}</Text>    */}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        flex: 1,
        width: "90%",
        height: 180,
        margin: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        shadowColor: "#725dff",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    titulo: {
        fontFamily: 'RobotoLight',
        fontSize: 20,
        textAlign: 'center',
        color: "#725dff"

    },
    dados: {
        fontFamily: 'RobotoLight',
        fontSize: 20,
        textAlign: 'center',


    },
    textos: {
        flex: 1,
        margin: 20,
        justifyContent: 'space-around'
    }
})