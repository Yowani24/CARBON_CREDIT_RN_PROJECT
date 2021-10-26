import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const bgIma = require('./moonIma.jpg');


import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ModalPopup from './ModalPopup';

export default function Neutralizar({ navigation }){
    const [visible, setVisible] = useState(false);
    return(
        <SafeAreaView>
            <ImageBackground style={{width: '100%', height: '100%'}} source={bgIma}>
            
                <View style={styles.container}>

                    <ModalPopup visible={visible}>
                        <View>
                            <TouchableOpacity style={styles.modal_button} onPress={() => navigation.navigate('Telainicial')}>
                                <Text style={styles.modal_button_text}>OK!</Text>
                            </TouchableOpacity>
                        </View>
                    </ModalPopup>
                    
                        <View style={styles.top_section}>
                            <View style={styles.top_box}>
                                <TouchableOpacity style={styles.top_tab} onPress={() => navigation.navigate('Telainicial')}>
                                    <Feather name="arrow-left" size={20} color="#FFFFFF"/>
                                    <Text style={styles.top_tab_text}>Neutralizar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name="menu" size={28} color="#e4e4e4"/>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.saldo_disponivel_box}>
                                <View style={styles.saldo_details}>
                                    <View style={styles.saldo_icon_box}>
                                        <Feather style={styles.card_icon} name="cloud-snow" size={30} color="#FFFFFF"/>
                                    </View>
                                    <View>
                                        <Text style={styles.saldo_text1}>Saldo dispoínel</Text>
                                        <Text style={styles.saldo_text2}>0 ONE-CO2</Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <SimpleLineIcons name="arrow-right" size={20} color="#FFFFFF"/>
                                </TouchableOpacity>
                            </View>
                        </View>

                    {/* ------------------------- */}

                    <View style={styles.Neutralizar_card}>
                        <Text style={styles.neutralizar_top_text}>Neutralizar minha emissão</Text>
                        <View style={styles.card}>
                            <View style={styles.card_texts_box}>
                                <Text style={styles.card_text1}>Quantidade</Text>
                                <Text style={styles.card_text2}>(1 ONE-CO2 = 1 Ton)</Text>
                            </View>
                            <View style={styles.card_btn}>
                                <TouchableOpacity style={styles.card_minus_btn}>
                                    <Feather name="minus" size={18} color="rgb(31,51,104)"/>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>0</Text>
                                <TouchableOpacity style={styles.card_plus_btn}>
                                    <Feather name="plus" size={18} color="rgb(31,51,104)"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.total_box}>
                            <Text style={styles.total_box_text}>Total 1 ONE-CO2</Text>
                            <TouchableOpacity style={styles.avancar_button} onPress={() => setVisible(true)}>
                                <Text style={styles.avancar_button_text}>AVANÇAR</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.info_box}>
                            <Icon name="ios-alert-circle-outline" size={20} color="#888888"/>
                            <Text style={styles.info_text}>A pegada de carbono anual de uma pessoa é de aproximadamente 6.4 toneladas de CO2 em mádia</Text>
                        </View>
                    </View>
                    
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0,51,102,.7)',
    },
    top_section:{
       flex:1,
    },
    top_box:{
        width: '100%',
        backgroundColor: 'rgb(31,51,104)',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 15
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

    // ---------------------------------

    saldo_disponivel_box:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal: 16,
        marginTop:40
    },
    saldo_details:{
        flexDirection:'row',
        alignItems:'flex-start',
    },
    saldo_icon_box:{
        width: 40,
        height:40,
        marginRight: 10
    },
    saldo_text1:{
        color:'#FFFFFF',
        fontSize:17,
        fontWeight:'bold'
    },
    saldo_text2:{
        color:'#FFFFFF',
        fontSize:14
    },


    // --------------------------
    

    Neutralizar_card:{
        flex:2,
        backgroundColor:'#FFFFFF',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        paddingHorizontal: 20
    },
    neutralizar_top_text:{
       fontSize: 17,
       fontWeight:'bold',
       letterSpacing: .5,
       marginVertical:18
    },
    card:{
        backgroundColor: 'rgb(140,198,62)',
        borderRadius: 6,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:20
    },
    card_text1:{
        color:'#FFFFFF',
        letterSpacing: .5,
        marginBottom:5,
        fontSize: 14,
        fontWeight:'bold'
    },
    card_text2:{
        color:'#FFFFFF'
    },
    card_btn:{
        flexDirection:'row'
    },
    card_minus_btn:{
        backgroundColor:'#FFFFFF',
        width: 20,
        height:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100
    },
    card_plus_btn:{
        backgroundColor:'#FFFFFF',
        width: 20,
        height:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
    },
    quantity:{
        paddingHorizontal: 15,
        marginHorizontal:10,
        borderBottomColor: 'lightgray',
        borderBottomWidth:1,
        color:'gray'
    },

    // ---------------------

    total_box:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20,
    },
    total_box_text:{
        fontSize:15
    },
    avancar_button:{
        backgroundColor: 'rgb(31,51,104)',
        borderRadius: 100
    },
    avancar_button_text:{
        paddingVertical:12,
        paddingHorizontal:25,
        color:'#FFFFFF',
        letterSpacing:.5,
        fontSize:13
    },

    // ---------------------------

    info_box:{
        flexDirection: 'row',
        justifyContent:'center',
        paddingHorizontal: 20,
        paddingVertical:20,
        backgroundColor: 'rgb(239,239,239)',
        borderRadius: 5,
        marginTop:150,
    },
    info_text:{
        fontSize: 13,
        color: '#888888',
        marginLeft:8,
        letterSpacing: .2,
        lineHeight:17
    },

    // ----------------MODAL-------------------------

    modal_button:{
        backgroundColor: 'rgb(140,198,62)',
        borderRadius: 100,
        paddingHorizontal: 25,
        marginTop:20
    },
    modal_button_text:{
        paddingVertical: 15,
        paddingHorizontal:10,
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight:'400'
    },

});