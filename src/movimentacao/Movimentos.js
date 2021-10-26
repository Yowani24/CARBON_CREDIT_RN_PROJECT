import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const bgIma = require('./moonIma.jpg');


import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight } from 'react-native';

export default function Movimentos({ navigation }){
    return(
        <SafeAreaView>
            <ImageBackground style={{width: '100%', height: '100%'}} source={bgIma}>
            
                <View style={styles.container}>
                    
                        <View style={styles.top_section}>
                            <View style={styles.top_box}>
                                <TouchableOpacity style={styles.top_tab} onPress={() => navigation.navigate('Comprar')}>
                                    <Feather name="arrow-left" size={20} color="#FFFFFF"/>
                                    <Text style={styles.top_tab_text}>Movimentações</Text>
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
                                        <Text style={styles.saldo_text1}>Histórico</Text>
                                        <Text style={styles.saldo_text2}>Minhas movimentações</Text>
                                    </View>
                                </View>
                                
                            </View>
                        </View>

                    {/* ------------------------- */}

                    <View style={styles.Neutralizar_card}>

                        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:30,}}>
                            <TouchableOpacity style={{borderBottomColor:'rgb(140,198,62)', paddingHorizontal:10,borderBottomWidth:1.8, paddingBottom:5}}>
                                <Text style={{fontWeight:'600'}}>Compras</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingHorizontal:10, paddingBottom:5}}>
                                <Text style={{fontWeight:'600', color:'grey'}}>Neutralizados</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingHorizontal:10, paddingBottom:5}}>
                                <Text style={{fontWeight:'600', color:'gray'}}>Transações</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:30, marginBottom:20}}>
                            <View>
                                <Text style={{marginRight:'40%',color:'gray'}}>Data</Text>
                            </View>

                            <View>
                                <Text style={{color:'gray'}}>Status</Text>
                            </View>

                            <View>
                                <Text style={{textAlign:'center',marginRight:'25%', color:'gray'}}>Qtd</Text>
                            </View>
                        </View>

                        <View>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center', borderBottomWidth:.5, borderColor:'lightgray', paddingVertical:10}}>
                                <View>
                                    <Text>22/09/2021 10:15</Text>
                                </View>
                                <View>
                                    <Icon name="time-outline" size={24} color="lightgray"/>
                                </View>
                                <View>
                                    <Text>2</Text>
                                </View>
                                <View>
                                    <SimpleLineIcons name="arrow-right" size={15} color="#000"/>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center', borderBottomWidth:.5, borderTopWidth:.5, borderColor:'lightgray', paddingVertical:10}}>
                                <View>
                                    <Text>22/09/2021 10:15</Text>
                                </View>
                                <View>
                                    <Icon name="checkmark-circle-outline" size={24} color="rgb(140,198,62)"/>
                                </View>
                                <View>
                                    <Text>4</Text>
                                </View>
                                <View>
                                    <SimpleLineIcons name="arrow-right" size={15} color="#000"/>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center', borderBottomWidth:.5, borderTopWidth:.5, borderColor:'lightgray', paddingVertical:10}}>
                                <View>
                                    <Text>22/09/2021 10:15</Text>
                                </View>
                                <View>
                                    <Icon name="checkmark-circle-outline" size={24} color="rgb(140,198,62)"/>
                                </View>
                                <View>
                                    <Text>5</Text>
                                </View>
                                <View>
                                    <SimpleLineIcons name="arrow-right" size={15} color="#000"/>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', borderBottomWidth:.5, borderTopWidth:.5, borderColor:'lightgray', paddingVertical:10}}>
                                <View>
                                    <Text>22/09/2021 10:15</Text>
                                </View>
                                <View>
                                    <Icon name="checkmark-circle-outline" size={24} color="rgb(140,198,62)"/>
                                </View>
                                <View>
                                    <Text>1</Text>
                                </View>
                                <View>
                                    <SimpleLineIcons name="arrow-right" size={15} color="#000"/>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center', borderBottomWidth:.5, borderTopWidth:.5, borderColor:'lightgray', paddingVertical:10}}>
                                <View>
                                    <Text>22/09/2021 10:15</Text>
                                </View>
                                <View>
                                    <Icon name="checkmark-circle-outline" size={25} color="rgb(140,198,62)"/>
                                </View>
                                <View>
                                    <Text>1</Text>
                                </View>
                                <View>
                                    <SimpleLineIcons name="arrow-right" size={14} color="#000"/>
                                </View>
                            </TouchableOpacity>
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
        fontWeight:'500'
    },
    saldo_text2:{
        color:'#FFFFFF',
        fontSize:20,
        fontWeight:'bold'
    },


    // --------------------------
    

    Neutralizar_card:{
        flex:2,
        backgroundColor:'#FFFFFF',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        paddingHorizontal: 20
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

});