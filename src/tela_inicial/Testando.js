import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons';


const bgIma = require('./moonIma.jpg');

import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight } from 'react-native';

export default function Testando() {
    const [showdata, setShowdata] = useState(false);
    const [showcredit, setShowcredit] = useState(true);
    return(

        <ImageBackground style={{width: '100%', height: '100%'}} source={bgIma}>
                    {/* -----------------HEADER--------------- */}

                <View style={styles.top_box}>
                    <Octicons name="globe" size={45} color="#FFFFFF"/>
                    <TouchableOpacity>
                        <Icon name="menu" size={28} color="#e4e4e4"/>
                    </TouchableOpacity>

                </View>

                    {/* <View style={{position:'absolute',height:'100%', width:'100%'}}> */}
                        <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
                            {/* -----------------WELCOME---------------- */}

                                <View style={styles.welcome_box}>
                                    <View style={styles.profileImageFrame}>
                                            <Icon name="camera-outline" size={25} color="gray"/>
                                    </View>
                                    <View style={styles.welcome_texts_box}>
                                        <Text style={styles.welcome_box_text1}>Ben-vindo, Jo??o</Text>
                                        <Text style={styles.welcome_box_text2}>Contribua com o planeta hoje!</Text>
                                    </View>
                                </View>

                                {/* -----------------COMPRAR BUTTON---------------- */}

                                <View style={styles.button_box}>
                                    <TouchableOpacity style={styles.touchable_btn} onPress={() => navigation.navigate('Comprar')}>
                                        <Text style={styles.touchable_btn_text}>COMPRAR ONE-CO2</Text>
                                    </TouchableOpacity>
                                </View>

                                 {/* -----------------MEU IMPACTO CARD---------------- */}

                                <View style={styles.card_box}>
                                    <View style={styles.card}>
                                            <Text style={styles.card_title}>Meu impacto</Text>
                                            <View style={styles.card_details}>
                                                <View style={styles.card_icon_box}>
                                                    <Feather style={styles.card_icon} name="cloud-snow" size={30} color="#a8a8a8"/>
                                                </View>
                                                <View>
                                                    <Text style={styles.card_text1}>Total neutralizado por mim:</Text>
                                                    <Text style={styles.card_text2}>0 Ton. de CO2</Text>
                                                </View>
                                            </View>

                                            <View style={styles.card_button_box}>
                                                <TouchableOpacity style={styles.card_button} onPress={() => navigation.navigate('Neutralizar')}>
                                                    <Text style={styles.neutraloizar_button_text}>NEUTRALIZAR</Text>
                                                </TouchableOpacity>
                                            </View>
                                    </View>
                                </View>

                                

                                {/* ---------------------CARTEIRA--------------------- */}

                                    <View style={styles.card_box}>
                                        <View style={styles.card2}>

                                        <TouchableOpacity onPress={() => setShowdata(!showdata)} style={{paddingHorizontal:18}}>
                                            <Text style={styles.card_title}>Carteira</Text>
                                        </TouchableOpacity>

                                        {
                                            showdata ? (
                                                <View>
                                                    <View style={{backgroundColor: 'red', width:'100%', height:400}}>
                                                        <Text style={{}}>AQUI VAMOS N??S</Text>
                                                    </View>
                                                </View>
                                            ): (

                                                <View style={styles.card_details, {paddingHorizontal:18}}>
                                                    <View style={styles.card_icon_box}>
                                                        <Feather name="credit-card" size={30} color="#a8a8a8"/>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.card_text1}>Saldo</Text>
                                                        <Text style={styles.card_text2}>0</Text>
                                                        <Text style={styles.card_text3}>Cr??ditos de Carbono ONE-CO2</Text>
                                                    </View>
                                                </View>

                                            )
                                        }

                                                
                                        </View>
                                    </View>

                        </ScrollView>
                    {/* </View> */}

            
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    // --------------HEADER-------------
    overlay: {
        flex: 1,
        backgroundColor:'rgba(0,51,102,.7)',
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
    logo: {
        width: 50,
        height: 50,
    },


    // ---------------WELCOME-----------------
    welcome_box:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop:10
    },
    profileImageFrame: {
        width: 55,
        height:55,
        backgroundColor: '#e4e4e4',
        borderRadius: 100,
        justifyContent:'center',
        alignItems: 'center'
    },
    welcome_texts_box: {
        marginLeft: 15,
    },
    welcome_box_text1:{
        fontWeight:'bold',
        color:'#FFFFFF',
        fontSize:17,
        letterSpacing:.5,
    },
    welcome_box_text2:{
        marginTop: 5,
        color:'#FFFFFF',
        letterSpacing:.1,
    },


    // ---------------- COMPRAR BUTTON ----------------


    button_box:{
        alignItems:'center',
        paddingHorizontal: 20,
        marginTop:20,
        marginBottom:10
    },
    inner_btn_boc:{
        width: '100%',
        marginVertical: 20
    },
    touchable_btn: {
        width:'100%',
        backgroundColor: 'rgb(140,198,62)',
        borderRadius: 100,
        paddingHorizontal: 25
    },
    touchable_btn_text:{
        paddingVertical: 15,
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight:'400'
    },

    // -------------MEU IMPACTO / CARTEIRA----------------


   card_box:{
        paddingHorizontal:20,
        marginVertical:5,
    },
    card:{
        width:'100%',
        backgroundColor:'#FFFFFF',
        paddingHorizontal: 18,
        borderRadius: 8,
        paddingVertical:15
    },
    card2:{
        width:'100%',
        backgroundColor:'#FFFFFF',
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
