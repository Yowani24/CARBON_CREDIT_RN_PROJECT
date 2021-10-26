import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'


import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Projeto({ navigation }) {
    return(
        <SafeAreaView>

            {/* ------------------------HEADER------------------------ */}

            <View style={styles.top_box}>
                <TouchableOpacity style={styles.top_tab} onPress={() => navigation.navigate('Comprar')}>
                    <Feather name="arrow-left" size={20} color="#FFFFFF"/>
                    <Text style={styles.top_tab_text}>Fazenda Ituxi</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="menu" size={28} color="#e4e4e4"/>
                </TouchableOpacity>
            </View>

            {/* ---------------------------------------------- */}

            <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
                <View style={{width:'100%', height:200, backgroundColor:'lightgray', justifyContent:'center', alignItems:'center'}}>
                    <Icon name="camera-outline" size={30} color="gray"/>
                </View>

                <View style={{paddingHorizontal:20}}>
                    <Text style={{fontSize:17, fontWeight:'700', marginBottom:3, marginTop:30, color:'#303030'}}>Fazenda Fortaleza Ituxi</Text>
                    <Text style={{color:'gray'}}>Lábrea, Amazônia - Brazil</Text>
                </View>

                <Text style={{fontSize:16, fontWeight:'700', paddingHorizontal:20, marginTop:30, color:'#303030'}}>Mais detalhes</Text>

                <View style={styles.detalhes_box}>
                    <View style={styles.box}>
                        <Feather name="calendar" size={30} color="rgb(140,198,62)"/>
                        <Text style={{color:'#2e2e2e'}}>2013</Text>
                        <Text style={{color:'gray', fontSize:11}}>ano</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon name="square-outline" size={30} color="rgb(140,198,62)"/>
                        <Text style={{color:'#2e2e2e'}}>150.000</Text>
                        <Text style={{color:'gray', fontSize:11}}>hectares</Text>
                    </View>
                    <View style={styles.box}>
                    <Icon name="time-outline" size={30} color="rgb(140,198,62)"/>
                        <Text style={{color:'#2e2e2e'}}>30 anos</Text>
                        <Text style={{color:'gray', fontSize:11}}>duração</Text>
                    </View>
                </View>

                <Text style={{fontSize:16, fontWeight:'700', paddingHorizontal:20, marginTop:30, color:'#303030'}}>Descrição</Text>

                <Text style={{color:'gray', paddingHorizontal:20, fontSize:14, marginTop:10}}>O projeto REDD Fortaleza Ituxi visa proteger as florestas localizadas em uma região de maior taxa de desmatamento na Amazônia: o município de Lábrea. O projeto também inclui a implementação de atividades para apoiar e garantie o manejo florestal sustentável, beneficiando a comunidade local.</Text>


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    top_box:{
        width: '100%',
        backgroundColor: 'rgb(31,51,104)',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 15,
        zIndex:100
    },
    top_tab: {
        flexDirection:'row',
        alignItems:'center',
     },
    top_tab_text: {
       color:'#FFFFFF',
       marginLeft: 10,
       fontSize: 16
    },
    detalhes_box:{
        flexDirection:'row',
        paddingHorizontal:20,
        marginTop:10
    },
    box:{
        width:90,
        height:90,
        backgroundColor:'#FFFFFF',
        borderWidth:.5,
        borderColor:'lightgray',
        margin: 2,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
});