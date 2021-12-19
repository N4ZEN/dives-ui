import React from 'react';
import {View, StyleSheet, Text, Pressable, ImageBackground, Image, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native';

import { COLORS, colour } from '../../assets/colors/theme';


const About = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor:"#dbe02"}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Pressable 
            style= {({pressed}) => [
                styles.backIcon,
                {marginLeft: 15,},
                {backgroundColor: pressed? COLORS.lightGray1 : null},
                {borderRadius: pressed? 20 : null}
            ]} 
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
                <Entypo name='chevron-left' size={32} color={colour.darkGray} />
                {/* <MaterialIcons name = "keyboard-backspace" size={35} color={COLORS.black}/> */}

            </Pressable>
                <Image source= {require('../../assets/images/about2.png')}
            style= {{width: 250,
                height:220,
                marginTop: -20,
                resizeMode: 'contain', borderRadius: 2,
            }} />
                </View>
               
            <View style = {{marginTop: 40}}>
                <Text style={{...styles.subHeader, color: COLORS.darkGray3}}>Dives MV</Text>
                <Text style={styles.Header}>Company Name</Text>
                <Text style={styles.maintext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                 veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                 Duis auteirure dolor in reprehenderit in voluptate velitesse</Text>
            </View>
            
            <View>
                <TouchableOpacity style={styles.buttonWrapper}
                onPress={() => alert('Website')}>
                    <Text style={{...styles.subHeader, color: COLORS.black}}>Go to our website </Text>
                    <MaterialIcons name = "horizontal-rule" size={40} color={COLORS.black}/>
                    
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backIcon: {
        marginTop:48,
        marginLeft: 10,
        width: 35,
        height:37,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Header: {
        marginHorizontal: 10,
        fontFamily: 'LatoBold',
        fontSize:28,
        textAlign: 'center',
        color: COLORS.black,
    },
    subHeader: {
        fontFamily: 'LatoBold',
        fontSize:17,
        padding: 12,
        color: COLORS.darkGray2,
        textAlign: 'center',
    },
    maintext: {
        fontFamily: 'LatoBold',
        fontSize:17,
        padding: 12,
        textAlign: 'center',
        color: COLORS.darkGray, 
        paddingHorizontal: 30,
        marginVertical: 20,
    },
    buttonWrapper:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: COLORS.lightGray1,
        borderRadius: 6,
        marginTop: 20,
        marginHorizontal: 80,
    }

})

export default About;
