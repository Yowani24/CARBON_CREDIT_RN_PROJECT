import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const bgIma = require('./moonIma.jpg');

import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight } from 'react-native';

export default function Teste() {
    const [showdata, setShowdata] = useState(false);
    const [showcredit, setShowcredit] = useState(true);
    return(

        <ImageBackground style={{width: '100%', height: '100%'}} source={bgIma}>
            <View style={styles.top_box}>
                <TouchableOpacity style={styles.top_tab} onPress={() => navigation.navigate('Telainicial')}>
                    <Feather name="arrow-left" size={20} color="#FFFFFF"/>
                    <Text style={styles.top_tab_text}>Comprar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="menu" size={28} color="#e4e4e4"/>
                </TouchableOpacity>
            </View>

                    <View style={styles.box1}>
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

                    <View style={{position:'absolute',height:'100%', width:'100%'}}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
                            <View style={styles.alvo}>



                            <View style={styles.card_box}>
                                <View style={styles.card}>
                                        <TouchableOpacity onPress={() => setShowdata(!showdata)}>
                                            <Text style={styles.card_title}>Carteira</Text>
                                        </TouchableOpacity>

                                        {
                                            showdata ? (
                                                <View style={{ zIndex:100}}>
                                                    <View style={{backgroundColor:'deepskyblue',width:'100%', height:200, position:'absolute', borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                                                        <TouchableOpacity onPress={() => setShowcredit(!showcredit)}>
                                                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                                                <Text>Valor total da carteira</Text>
                                                                {
                                                                showcredit ? (
                                                                    <>
                                                                        <MaterialIcons name='visibility-off' color="gray" size={30}/>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <MaterialIcons name='visibility' color="gray" size={30}/>
                                                                    </>
                                                                )
                                                            }
                                                            </View>
                                                            {
                                                                showcredit ? (
                                                                    <>
                                                                        <Text style={{color:'rgb(140,198,62))', fontWeight:'bold'}}>R$ 103,40</Text>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <Text style={{color:'rgb(140,198,62))', fontWeight:'bold'}}>R$----</Text>
                                                                    </>
                                                                )
                                                            }
                                                        </TouchableOpacity>

                                                        <View>
                                                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                                                <Text>Créditos comprados</Text>
                                                                <Text style={{color:'rgb(140,198,62))'}}>1</Text>
                                                            </View>

                                                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                                                <Text>Créditos comprados</Text>
                                                                <Text>0</Text>
                                                            </View>

                                                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                                                <Text>Créditos comprados</Text>
                                                                <Text style={{color:'rgb(140,198,62))'}}>1</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            ):null
                                        }
                                        

                                        <View style={styles.card_details}>
                                            <View style={styles.card_icon_box}>
                                                <Feather name="credit-card" size={30} color="#a8a8a8"/>
                                            </View>
                                            <View>
                                                <Text style={styles.card_text1}>Saldo</Text>
                                                <Text style={styles.card_text2}>0</Text>
                                                <Text style={styles.card_text3}>Créditos de Carbono ONE-CO2</Text>
                                            </View>
                                        </View>
                                </View>
                            </View>



                            </View>
                        </ScrollView>
                    </View>

            
            
        </ImageBackground>
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

    container:{
        flex:1,
        // backgroundColor: 'deeppink'
        
    },
    box1:{
        // flex:1,
        height:200,
        // backgroundColor:'deeppink',
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        width: '90%',
        height:200,
        backgroundColor:'yellow',
        alignSelf:'center',
        margin: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:40,
        color:'red',
        fontWeight:'bold'
    },
    alvo:{
        flex:1,
        backgroundColor:'#FFFFFF',
        marginTop:250,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingVertical:20,
        paddingHorizontal:20
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
    
    card_box:{
        paddingHorizontal:20,
        marginVertical:5,
    },
    card:{
        width:'100%',
        backgroundColor:'deepskyblue',
        // paddingHorizontal: 18,
        borderRadius: 8,
        paddingVertical:15
    },
    card_title:{
        fontSize: 15,
        borderBottomWidth: .5,
        borderBottomColor: 'lightgray',
        paddingVertical:15,
        marginBottom:10,
        color:'#111713',
        paddingTop:0,
        paddingHorizontal:18
    },
    card_text1:{
        color:'gray',
        fontSize:15
    },
    card_text2:{
        color:'rgb(140,198,62)',
        marginVertical:6,
        fontSize:18
    },
    card_text3:{
        color:'gray',
        fontSize:15
    },
    card_details:{
        flexDirection:'row',
        alignItems:'flex-start',
    },
    card_icon_box:{
        width: 40,
        height:40,
        marginRight: 10
    },
    card_button_box:{
        width:'100%',
        marginTop: 10
    },
   card_button:{
        width:'100%',
        backgroundColor: 'rgb(31,51,104)',
        borderRadius: 100,
        paddingHorizontal: 25
    },
    neutraloizar_button_text:{
        paddingVertical: 15,
        color: '#FFFFFF',
        fontSize: 13,
        textAlign:'center'
    },

});
