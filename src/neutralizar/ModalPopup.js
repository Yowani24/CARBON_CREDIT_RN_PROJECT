import React, { useEffect, useRef, useState } from 'react'

import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight, Modal, Animated } from 'react-native';

const ModalPopup = ({ visible, children}) =>{
    const [showModal, setShowModal] = useState(visible);
    const modalAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() =>{
        toggleModal()
    },[visible]);

    const toggleModal = () => {
        if(visible){
            setShowModal(true)
            Animated.spring(modalAnimation, {
                toValue:1,
                duration: 300,
                useNativeDriver: true
            }).start()
        }else{
            setShowModal(false)
        }
    }
    return(
        <Modal transparent visible={showModal} style={styles.modal}>
            <View style={styles.modal_box}>
                <Animated.View style={{transform:[{scale:modalAnimation}]}}>
                    <View style={styles.modal_box_popup}>
                        <Text style={styles.modal_title}>Créditos neutralizado!</Text>
                        <Text style={styles.modal_info}>Os ativos de carbono visam compensar emissões de gases de efeito estufa. Este é seu objetivo final. Os ativos de carbono não devem ser entendidos como uma moeda digital ou título de investimento.</Text>
                        {children}
                    </View>
                </Animated.View>
            </View>
        </Modal>
    )
}

export default ModalPopup;

const styles = StyleSheet.create({
    modal_box:{
        flex:1,
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.8)',
    },
    modal_box_popup:{
        width:'90%',
        borderRadius:10,
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        paddingHorizontal:20,
        paddingVertical:15,
        marginTop:150
    },

    modal_title:{
        fontSize:16,
        fontWeight:'bold',
        paddingBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'lightgray',
        width:'100%',
        textAlign:'center',

    },
    modal_info:{
        textAlign:'center',
        color:'gray',
        fontSize:14,
        marginTop:20,
        lineHeight:19,
    },
    
});