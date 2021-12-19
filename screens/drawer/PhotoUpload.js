import React from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { DrawerActions } from '@react-navigation/native';
import menu from '../../assets/icons/menu.png';
import {Picker} from '@react-native-picker/picker';

import { COLORS, colour } from '../../assets/colors/theme';

const Photos = ({navigation}) => {
    const [noOfPhotos, setNoOfPhotos] = React.useState('0');
    const [selectedLanguage, setSelectedLanguage] = React.useState('');
    const [selectedView, setSelectedView] = React.useState('grid');    



    return (
        <View style={{flex: 1, padding: 10,}}>
            <Pressable 
            style= {({pressed}) => [
                styles.backIcon,
                {marginLeft: 5},
                {backgroundColor: pressed? COLORS.lightGray1 : null},
                {borderRadius: pressed? 5 : null}
            ]} 
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}     
            >
                <Image source = {menu} 
                    style = {{
                        height: 40, 
                        width: 40,
                        borderRadius: 2,
                        resizeMode: 'contain'
                    }}/>
                {/* <Entypo name='chevron-left' size={32} color={colour.darkGray} /> */}
                {/* <MaterialIcons name = "keyboard-backspace" size={35} color={COLORS.black}/> */}

            </Pressable>
            <View style = {{marginTop: 25,}}>
                <Text style={styles.Header}>Photos</Text>
            </View>
            <View style= {{flexDirection: 'row',justifyContent: 'space-between', padding: 30}}>
                <Text style={{fontFamily: 'PoppinsBold', fontSize: 16}}>No of Photos</Text>
                <Text style={{fontFamily: 'PoppinsBold', fontSize: 16, color: COLORS.darkGray, paddingRight: 5}}>{noOfPhotos}</Text>
            </View>
            <View style= {{flexDirection: 'row',justifyContent: 'space-between', 
            borderTopColor: COLORS.darkGray2, borderBottomColor: COLORS.darkGray2,
            borderTopWidth: 0.5, borderBottomWidth: 0.5}}>
                <View style= {{flexDirection: 'row'}}>
                    <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, padding: 10}}>Sort by: </Text>
                    <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, paddingVertical: 10, 
                    paddingRight: 5}}>{selectedLanguage}</Text>
                    <Picker
                    style = {{padding: 10, height: 40, width: 50}}
                    
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Date" value="Date" />
                        <Picker.Item label="Dive" value="Dives" />
                        <Picker.Item label="Location" value="Location" />
                    </Picker>
                </View>
                <View  style= {{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => setSelectedView('list')}>
                        <MaterialIcons name = "view-list" size={34} 
                        color={selectedView === 'list'? COLORS.lightblue1: COLORS.darkGray1} style= {{alignSelf: 'center'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedView('grid')}>
                        <MaterialIcons name = "apps" size={30}
                         color={selectedView === 'grid'? COLORS.lightblue1: COLORS.darkGray1}style= {{alignSelf: 'center'}} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
            <View style ={styles.createLogTextWrapper}>
                    <Text style={styles.createLogText}>Photos from your dive logs will appear here.</Text>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backIcon: {
        marginTop:48,
        marginLeft: 1,
        width: 35,
        height:37,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Header: {
        marginHorizontal: 10,
        fontFamily: 'LatoBold',
        fontSize:28,
        //textAlign: 'center',
        color: COLORS.black,
    },
    createLogTextWrapper: {
        marginTop: 140,
        marginHorizontal: 40,
        marginBottom: 20,
    },
    createLogText:{
        fontFamily: 'PoppinsRegular',
        fontSize: 28,
        textAlign:'center',
        color: COLORS.darkGray3,
    },
})

export default Photos;
