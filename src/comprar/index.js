import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const bgIma = require('./moonIma.jpg');


import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Comprar({ navigation }){
    return(
        <SafeAreaView>
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

                <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
                    
                        <View style={styles.top_section}>
                            
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
                                <TouchableOpacity onPress={() => navigation.navigate('Movimentos')}>
                                    <SimpleLineIcons name="arrow-right" size={20} color="#FFFFFF"/>
                                </TouchableOpacity>
                            </View>
                        </View>

                    {/* ------------------------- */}

                    <View style={styles.Neutralizar_card}>
                        <View style={styles.card}>
                            <View style={styles.card_texts_box}>
                                <Text style={styles.card_text}>Selecione quantidade</Text>
                            </View>
                            <View style={styles.card_btn}>
                                <TouchableOpacity style={styles.card_minus_btn}>
                                    <Feather name="minus" size={18} color="#FFFFFF"/>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>0</Text>
                                <TouchableOpacity style={styles.card_plus_btn}>
                                    <Feather name="plus" size={18} color="#FFFFFF"/>
                                </TouchableOpacity>
                            </View>
                        </View>
 
                        <View style={styles.total_box}>
                            <Text style={styles.total_box_text}>Total: 1 ONE-CO2</Text>
                            <TouchableOpacity style={styles.avancar_button} onPress={() => navigation.navigate('Pagamento')}>
                                <Text style={styles.avancar_button_text}>AVANÇAR</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.info_box}>
                            <Text style={styles.info_text}>A comercialização de créditos de carbono pela ONEEART remunera projetos ambientais REDD+, que através de suas atividades sustentáveis protegem e preservam em conjunto uma área de aproximadadmente 1mi de hectares.</Text>
                        </View>

                        <Text style={styles.proj_intro_text}>Conheça os projetos</Text>

                    </View>

                    <View style={styles.project_boxes}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity style={styles.project_card}>
                                <View style={styles.project_image_frame}>
                                    
                                </View>
                                <View style={{flex:1}}>
                                    <Text style={styles.project_title}>Agrocortex</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.project_card} onPress={() => navigation.navigate('Projeto')}>
                                <View style={styles.project_image_frame}>
                                    
                                </View>
                                <View style={{flex:1}}>
                                    <Text style={styles.project_title}>Ituxi</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.project_card}>
                                <View style={styles.project_image_frame}>
                                    
                                </View>
                                <View style={{flex:1}}>
                                    <Text style={styles.project_title}>Inhotim</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.project_card}>
                                <View style={styles.project_image_frame}>
                                    
                                </View>
                                <View style={{flex:1}}>
                                    <Text style={styles.project_title}>Caiuangá</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0,51,102,.7)',
       paddingBottom:40
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
        backgroundColor:'transparent',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        paddingHorizontal: 20,
        marginTop:20
    },
    neutralizar_top_text:{
       fontSize: 17,
       fontWeight:'bold',
       letterSpacing: .5,
       marginVertical:18
    },
    card:{
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:25,
        marginTop:35
    },
    card_text:{
        color:'#595959',
        letterSpacing: .5,
        marginBottom:5,
        fontSize: 14,
        fontWeight:'bold'
    },
    card_btn:{
        flexDirection:'row'
    },
    card_minus_btn:{
        backgroundColor:'#dddddd',
        width: 20,
        height:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100
    },
    card_plus_btn:{
        backgroundColor:'rgb(140,198,62)',
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
        fontSize:15,
        color:'#FFFFFF'
    },
    avancar_button:{
        backgroundColor: 'rgb(140,198,62)',
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
       marginTop:20
    },
    info_text:{
        fontSize: 12,
        color: '#FFFFFF',
        letterSpacing: .2,
        lineHeight:20
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
        width:150,
        height:135,
        backgroundColor:'#FFFFFF',
        paddingVertical:7,
        borderRadius:5,
        marginHorizontal:5

    },
    project_image_frame:{
        flex:2,
        width:135,
        backgroundColor:'lightgray',
        borderRadius:5,
        alignSelf:'center'
    },
    project_title:{
        color:'#5c5c5c',
        margin:10
    }

});