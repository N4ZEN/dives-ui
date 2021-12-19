import React from 'react';
import {View, StyleSheet, Platform, Pressable, Text, Dimensions, Image, Modal} from 'react-native';
import {ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather} from '@expo/vector-icons';
import Entypo from 'react-native-vector-icons/Entypo';
import DateTimePicker from '@react-native-community/datetimepicker';


import { COLORS, colour } from '../../assets/colors/theme';
import FormInput from '../../components/divelogs/FormInput';
import Weatherss from './Weather';
import Tankconsumption from './TankConsumption';
import Reefhealth from './ReefHealth';
import Marinelife from './MarineLife';
import Divingdata from './DivingData';
import AdditionalData from './AdiitionalDetails';


const Divelogging = ({navigation}) => {


    return (
        <ScrollView 
        showsHorizontalScrollIndicator={false}
        style = {{flex: 1, padding: 10, color: colour.white, backgroundColor: colour.white}}>
            <View>
                <View style ={styles.headersWrapper}>
                    <Text style ={styles.diveLogHeaders}>Diving Data</Text>
                </View>

                {/*Diving Data */}
                <Divingdata />

                {/*Diving Data */}
                <AdditionalData />

                {/*Weather Conditions */}
                < Weatherss />

                {/*Tank Consumption */}
                <Tankconsumption />
                
                {/* Reef Health */}
                <Reefhealth />
                
                {/*Marine Life */}
                <Marinelife />
                
                

                
                <View style = {{paddingTop: 70, paddingBottom: 15, marginBottom: 15}}>
                    <TouchableOpacity
                     style = {{...styles.submitbuttonWrapper}}
                    // backgroundColor: { isEnabledSubmit() ? COLORS.lightblue2: COLORS.lightblue3}}
                    // disabled = {isEnabledSubmit() ? false : true}
                    onPress={() => navigation.goBack()}
                    >
                        <Text style = {styles.submitbuttonTExt}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({

    input: {
        borderWidth: 1,
        borderColor: COLORS.lightGray2,
        backgroundColor: COLORS.lightGray2,
        padding: 10,
        borderRadius: 6,
        marginVertical: 5,
    },
    inputStyle: {
        color: COLORS.black,
        fontFamily: 'LatoRegular',
        fontSize: 14, 
    },
    headersWrapper: {
        marginVertical: 20,
        marginTop: 12,

    },
    diveLogHeaders: {
        fontFamily: 'LatoBold',
        fontSize: 17,
        color: COLORS.black,
    },
    diveLogSubHeaders: {
        marginHorizontal: 5,
        marginVertical: 10,
        marginTop: 10,
        fontFamily: 'LatoBold',
        fontSize: 16,
        color: COLORS.black,
    },
    buttonWrapper: {
        flexDirection: 'row',
        backgroundColor: COLORS.lightGray2,
        borderColor : COLORS.lightGray1,
        borderWidth :3,
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderRadius: 10,
        margin: 2,
    },
    submitbuttonWrapper: {
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderRadius: 10,
        margin: 2,
        
        backgroundColor: COLORS.lightblue2

    },
    submitbuttonTExt: {
        fontFamily: 'LatoBold',
        fontSize: 18,
        color: COLORS.white,
        alignSelf: 'center',
        padding: 5
    },
    buttonTExt: {
        fontFamily: 'LatoBold',
        fontSize: 18,
        color: COLORS.blue,
        alignSelf: 'center',
        
    },
    overlayButtonWrapper: {
        //marginHorizontal:20, 
        marginTop:20,
        backgroundColor: colour.pink,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
    },
    overlayButtonTExt: {
        fontFamily: 'LatoBold',
        fontSize: 18,
        color: colour.white,
    },
    overlaysubtext: {
        fontFamily: "LatoRegular", 
        fontSize: 13, 
        textAlign:'center'
    },
    mftgray: {
        color: COLORS.darkGray2,
    },
    mftblack: {
        color: COLORS.black,
        fontWeight: 'bold'
    },
    slidertext: {
        marginHorizontal: 5,
        marginVertical: 10,
        marginTop: 10,
        fontFamily: 'LatoBold',
        fontSize: 16,
        color: COLORS.black,
        //textAlign: 'center',
    }, 
    labelStyles: {
        fontSize: 18,
        fontFamily: 'LatoRegular',
        padding: 5,
        paddingLeft: 10, 
        paddingVertical: 25,
        textTransform: 'capitalize',
    },
    conditionButton: {
        width: 100,
        height: 75, 
        backgroundColor: COLORS.lightOrange2, 
        borderRadius: 20, 
        borderColor: COLORS.lightOrange2, 
        borderWidth: 2, 
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }
})

export default Divelogging;
