import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import Feather from 'react-native-vector-icons/Feather';
import ProfileImage from '../../components/tabs/profileImage'
import {colour} from '../../assets/colors/theme';

Feather.loadFont();

const Liked = ({navigation}) => {
    
    return (
        <View  style={styles.containerLogs}>
            {/*Header */} 
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style ={styles.discoverTitle}>Dive Logs</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate( 'ProfileScreen')}>
                    <ProfileImage />
                </TouchableOpacity>
            </View>
            <View style={styles.containercreateLogs}>
                <View style ={styles.createLogTextWrapper}>
                    <Text style={styles.createLogText}>You haven't logged a dive yet.</Text>
                </View>
                <TouchableOpacity style = {styles.createLogButtonWrapper} 
                    onPress= {() => navigation.navigate('Dive Log')}>
                    <Text style = {styles.createLogButtonText}>Create your first Dive Log!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerLogs: {
        flex: 1, 
        color: colour.white,
    },
    menuWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width:20,
        height:52,
        borderRadius:10,
    },
    containercreateLogs:{
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    createLogTextWrapper: {
        marginTop: 180,
        marginHorizontal: 40,
        marginBottom: 20,
    },
    createLogText:{
        fontFamily: 'LatoRegular',
        fontSize: 33,
        textAlign:'center',
        color: colour.darkGray,
    },
    createLogButtonWrapper: {
        marginHorizontal:20, 
        marginTop: 20,
        marginBottom: 30,
        backgroundColor: colour.pink,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 13,
        paddingHorizontal: 20,
        borderRadius: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
    },
    createLogButtonText: {
        fontFamily: 'LatoBold',
        fontSize: 25.5,
        color: colour.white,
    },
    discoverTitle: {
        marginTop: 63,
        marginHorizontal: 23,
        fontFamily: 'LatoBold',
        fontSize:32,
    },
})

export default Liked;
