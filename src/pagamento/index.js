import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import ModalPopup from '../modal_popup/ModalPopup';


const bgIma = require('./moonIma.jpg');


import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Pagamento({ navigation }){
    const [visible, setVisible] = useState(false);

    return(

        <SafeAreaView style={styles.container}>
            <ImageBackground style={{width: '100%', height: '100%'}} source={bgIma}>

                    <ModalPopup visible={visible}>
                        <View style={{width:'100%'}}>
                            <TouchableOpacity style={styles.modal_button} onPress={() => navigation.navigate('Telainicial')}>
                                <Text style={styles.modal_button_text}>FINALIZAR COMPRA</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Text style={{color:'gray', textAlign:'center', marginTop:10, textDecorationLine:'underline'}}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </ModalPopup>

                <ScrollView style={styles.overlay} contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
                    <View style={styles.container_section}>
                        <View style={styles.top_side}>
                            <View style={styles.top_box}>
                                <TouchableOpacity style={styles.top_tab} onPress={() => navigation.navigate('Comprar')}>
                                    <Feather name="arrow-left" size={20} color="#FFFFFF"/>
                                    <Text style={styles.top_tab_text}>Pagamento</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name="menu" size={28} color="#e4e4e4"/>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.saldo_disponivel_box}>
                                <View style={styles.saldo_details}>
                                    <View style={styles.saldo_icon_box}>
                                        <Feather style={styles.card_icon} name="credit-card" size={35} color="#FFFFFF"/>
                                    </View>
                                    <View>
                                        <Text style={styles.saldo_text1}>Comprar créditos</Text>
                                        <Text style={styles.saldo_text2}>Valor atual de mercado: R$ 103,40</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    {/* ------------------------------- */}

                        <View style={styles.bottom_side}>
                            <View style={{paddingHorizontal:20}}>
                                <Text style={styles.title}>Resumo do pedido</Text>
                                <Text  style={styles.bottom_side_text1}>Você está comprando:</Text>
                                <Text style={styles.bottom_side_text2}>1 crédito de carbono</Text>
                                <View style={{borderBottomColor:'lightgray', borderBottomWidth:.5, paddingBottom:20}}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Comprar')}>
                                        <Text style={styles.bottom_side_text3}>Editar quantidade <Feather name="edit-3" size={20} color="#d3d3d3"/></Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View>
                                <View  style={{paddingHorizontal:20}}>
                                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:20}}>
                                        <Text style={styles.valor_total_text}>Valor total:</Text>
                                        <Text style={styles.valor_total_value}>R$103,40</Text>
                                    </View>

                                    <Text style={styles.forma_de_pagamento_text}>Formas de pagamento</Text>
                                </View>

                                {/* ------------------------------------------ */}

                                <View style={styles.project_boxes}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}>
                                        <TouchableOpacity style={styles.project_card}>
                                            <FontAwesome name="bank" size={30} color="gray"/>
                                            <View style={{flex:1}}>
                                                <Text style={styles.project_title}>TED</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.project_card}>
                                            <MaterialIcons name="api" size={30} color="gray"/>
                                            <View style={{flex:1}}>
                                                <Text style={styles.project_title}>PIX</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.project_card}>
                                            <MaterialCommunityIcons name="credit-card-scan-outline" size={30} color="gray"/>
                                            <View style={{flex:1}}>
                                                <Text style={styles.project_title}>Boleto</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.project_card}>
                                            <Feather name="credit-card" size={30} color="gray"/>
                                            <View style={{flex:1}}>
                                                <Text style={styles.project_title}>Crédito</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>

                                <TouchableOpacity style={styles.prosseguir_button} onPress={() => setVisible(true)}>
                                    <Text style={styles.prosseguir_button_text}>PROSSEGUIR</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    overlay: {
        backgroundColor:'rgba(0,51,102,.9)',
    },
    container:{
        flex:1,
        backgroundColor: 'rgb(31,51,104)',
    },
    container_section:{
        flex:1
    },
    top_side:{
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

    // ---------------------------------

    bottom_side:{
        flex:2,
        backgroundColor:'#FFFFFF',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        paddingVertical:20,
        marginTop:40
    },

    title:{
        fontSize:17,
        fontWeight:'bold',
        letterSpacing:.3,
        marginBottom:10,
        color:'#2e2e2e'
    },
    bottom_side_text1:{
        color:'gray',
        fontSize:16,
        fontWeight:'400'
    },
    bottom_side_text2:{
        color:'rgb(140,198,62)',
        fontSize:17.5,
        fontWeight:'400',
        marginVertical:5
    },
    bottom_side_text3:{
        color:'gray',
        fontSize:16,
        fontWeight:'400',
        marginTop:5
    },

    valor_total_text:{
        color:'gray'
    },
    valor_total_value:{
        fontSize:20,
        fontWeight:'bold',
        color:'#2e2e2e'
    },
    forma_de_pagamento_text:{
        fontSize:18,
        marginTop:20,
        fontWeight:'bold',
        color:'#2e2e2e',
        letterSpacing:.3
    },

// -----------------------------


proj_intro_text:{
    color:'#FFFFFF',
    fontSize:15,
    marginTop:40
},
project_boxes:{
    height:135,
    marginTop:20
},
project_card:{
    width:100,
    height:100,
    backgroundColor:'#FFFFFF',
    paddingVertical:7,
    borderRadius:5,
    marginHorizontal:5,
    borderColor:'lightgray',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    paddingTop:20

},
project_title:{
    color:'gray',
    margin:15,
    marginTop:10,
    fontWeight:'bold',
    textAlign:'center',
    fontSize:16
},


// -----------------------------

    prosseguir_button:{
        backgroundColor: 'rgb(140,198,62)',
        width:220,
        borderRadius:100,
        alignSelf:'center',
        marginTop:10
    },
    prosseguir_button_text:{
        paddingVertical:15,
        textAlign:'center',
        color:'#FFFFFF',
        fontSize:14,
        fontWeight:'400',
        letterSpacing:.5
    },

    // ----------------MODAL-------------------------

    modal_button:{
        backgroundColor: 'rgb(140,198,62)',
        borderRadius: 100,
        marginTop:20,
    },
    modal_button_text:{
        paddingVertical: 14,
        paddingHorizontal:50,
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight:'400',
    },
    
});