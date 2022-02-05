import React from 'react';
import {View, StyleSheet, Dimensions, Pressable, Text, TextInput} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { DrawerActions } from '@react-navigation/native';

import Uploadphotos from '../../components/drawer/UploadPhotos';
import { COLORS, colour } from '../../assets/colors/theme';
import { auth } from '../../firebase';


const Profilescreen = ({navigation}) => {

    const [username, setusername] =React.useState('Naza Zuhair');
    const [editprofile, seteditprofile] =React.useState(false);

    const toggleeditprofile = () => seteditprofile(previousState => !previousState)


    return (
        <View style = {{flex: 1, backgroundColor: COLORS.lightGray2, padding: 10}}>
            <View style = {styles.optionsWrapper}>
                <View style = {{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 45,}}>
                    <Pressable 
                    style= {({pressed}) => [
                        styles.backIcon,
                        {backgroundColor: pressed? COLORS.lightGray1 : null},
                        {borderRadius: pressed? 20 : null}
                    ]} 
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    >
                        <Entypo name='chevron-left' size={32} color={colour.white} />
                    </Pressable>
                    <View style= {{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style = {{alignSelf: 'center', fontFamily: 'LatoBold', 
                        fontSize: 20, color: COLORS.white, padding: 5}}>Profile</Text>
                    </View>
                    <Pressable 
                    style= {({pressed}) => [
                        styles.backIcon,
                        {backgroundColor: pressed? COLORS.lightGray1 : null},
                        {borderRadius: pressed? 20 : null}
                    ]} 
                         onPress= {() => toggleeditprofile()}
                    >
                        <Feather name='edit-2' size={25} color={colour.white} />
                    </Pressable>      
                </View>
                <View style={{marginTop: 70, marginBottom: 30, alignItems: 'center', justifyContent: 'center'}}>
                    <Uploadphotos />
                </View>
                <View>
                    <Text style={styles.subHeader}>{auth.currentUser?.email}</Text>
                    <TextInput
                        style = {{...styles.Header, backgroundColor: editprofile? COLORS.darkGray:  null,}}
                        
                        onChangeText={text => setusername(text)}
                        value={username}
                        editable= {editprofile}

                    />
                </View>
            </View>
            <View>
                <View style= {{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: Dimensions.get('window').height - 190, }}>
                    <Pressable
                        style= {({pressed}) => [
                            styles.profileOptionsIcon,
                            {backgroundColor: pressed? COLORS.darkGray3 : COLORS.lightGray1},
                            {borderRadius:20 }
                        ]}
                        onPress={() => navigation.navigate('Dashboard', {screen: 'TabNavigator', params: { screen: 'Dive Logs'}})}>
                            <Feather name = "list" size = {30} color={COLORS.darkGray2}/>
                            <Text style={{...styles.subHeader, color: COLORS.darkGray2, fontSize: 14}}>Dive Logs</Text>
                    </Pressable>
                    <Pressable
                        style= {({pressed}) => [
                            styles.profileOptionsIcon,
                            {backgroundColor: pressed? COLORS.darkGray3 : COLORS.lightGray1},
                            {borderRadius: 20 }
                        ]}
                        onPress={() => navigation.navigate('Photos')}>
                            <Feather name = "image" size = {30} color={COLORS.darkGray2}/>
                            <Text style={{...styles.subHeader, color: COLORS.darkGray2, fontSize: 14}}>Photos</Text>
                    </Pressable>
                    <Pressable
                        style= {({pressed}) => [
                            styles.profileOptionsIcon,
                            {backgroundColor: pressed? COLORS.darkGray3 : COLORS.lightGray1},
                            {borderRadius: 20 }
                        ]}
                        onPress={() => navigation.navigate('Profile')}>
                            <Feather name = "users" size = {30} color={COLORS.darkGray2}/>
                            <Text style={{...styles.subHeader, color: COLORS.darkGray2, fontSize: 14}}>Invite Friends</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    optionsWrapper: {
        padding: 10,
        position: 'absolute',
        
        height: Dimensions.get('window').height - 240,
        width: Dimensions.get('window').width ,
        // backgroundColor:"#3895d3",
        //backgroundColor: "#199baa",
        backgroundColor: COLORS.lightblue1,
        //marginBottom: -20,
        borderBottomLeftRadius:28,
        borderBottomRightRadius: 28,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.23,
        // shadowRadius: 2.62,
        
        elevation: 2,
    },
    backIcon: {
        //marginTop:48,
        marginLeft: 1,
        width: 35,
        height:37,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileOptionsIcon: {
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
        width: 90,
        height:90,
        alignItems: 'center', 
        justifyContent: 'center',
        marginVertical: 20,  
        //elevation: 2,
        
    },
    Header: {
        marginHorizontal: 10,
        fontFamily: 'LatoBold',
        fontSize:28,
        color: COLORS.white,
        textAlign: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 6,
        width: 250,
    },
    subHeader: {
        fontFamily: 'LatoBold',
        fontSize:16,
        padding: 12,
        color: COLORS.lightGray1,
        textAlign: 'center',
    },
})

export default Profilescreen;
