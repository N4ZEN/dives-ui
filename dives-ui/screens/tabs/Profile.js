import React from 'react';
import { View, Text, StyleSheet , Button, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import Feather from 'react-native-vector-icons/Feather';

import profile from '../../assets/images/person.png' ;
import {colour} from '../../assets/colors/theme';
import Profileimage from '../../components/tabs/profileImage';

Feather.loadFont();

const Profile = ({navigation}) => {

    
    return (
        <View  style={styles.containerLogs}>
             {/*Header */} 
             <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style ={styles.discoverTitle}>Dive Buddies</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate( 'ProfileScreen')}>
                    <Profileimage />
                </TouchableOpacity>
            </View>
            
            <View style={styles.containercreateLogs}>
                <View style ={styles.createLogTextWrapper}>
                    <Text style={styles.createLogText}>You don’t have a dive buddy yet..</Text>
                </View>
                <TouchableOpacity style = {styles.createLogButtonWrapper} onPress= {() => navigation.navigate('inviteFriends')}>
                    <Text style = {styles.createLogButtonText}>Invite Friends!</Text>
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
        fontSize: 36,
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
        paddingHorizontal: 40,
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

export default Profile;
