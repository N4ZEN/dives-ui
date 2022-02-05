import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { DrawerActions } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import * as SecureStore from 'expo-secure-store';
import { useFocusEffect } from '@react-navigation/native';


import divelog from '../../assets/data/divelog'
import menu from '../../assets/icons/menu.png';
import Profileimage from '../../components/tabs/profileImage';
import { COLORS, colour } from '../../assets/colors/theme';

const Photos = ({navigation}) => {
    const DIVE_LOG = 'divelog';
    const [noOfPhotos, setNoOfPhotos] = React.useState('0');
    const [selectedLanguage, setSelectedLanguage] = React.useState('');
    const [selectedView, setSelectedView] = React.useState('grid');
    const [firstopen, setfirstopen] = React.useState(true)
    const [photoordered, setphotosordered] = React.useState(divelog)
    const [imagedata, setimagedata] = React.useState()
    const [divelogs, setdivelogs] = React.useState(null)
    const [orderdivelogs, setOrderDivelogs] = React.useState([])


    
    
    const retrievefunction = async(key) => {
        try{
            let result = await SecureStore.getItemAsync(key);
            if (result) {
                // setdivelogexists(true)
                const res = JSON.parse(result)
                setOrderDivelogs([res])
                setdivelogs([res])
              //  console.log([res])

            } else {
                console.log('No Values stored under that key.');
                setOrderDivelogs(null)
                setdivelogs(null)
            }
        } catch(e){
            console.log('could not access storage', e)
        }
    } 


    const pickerenabled = () => {
        if (orderdivelogs) {
            return true;
        }
        else {
            return false;
        }
    }
   

    const renderphotos = ({item}) => {
        return(
            <View>
                <Text> {item.CreatedOn}</Text>
               
            </View>
        )
    }

    useFocusEffect(
        React.useCallback(() => {
          // Do something when the screen is focused
          retrievefunction(DIVE_LOG)
          //   setreloading(previosSate => !previosSate)
          return () => {
            // Do something when the screen is unfocused
            // Useful for cleanup functions
          };
        }, [])
    )
    useEffect(() => {
        retrievefunction(DIVE_LOG)
    }, [])

    return (
        <View style={{flex: 1, padding: 0,}}>
            {/*Header */} 
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style ={styles.discoverTitle}>Photos</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate( 'ProfileScreen')}>
                    <Profileimage />
                </TouchableOpacity>
            </View>
            <View style = {{marginTop: 25,}}>
        
            <View style= {{ flexDirection: 'row',justifyContent: 'space-between', padding: 30}}>
                <Text style={{fontFamily: 'PoppinsBold', fontSize: 16}}>No of Photos</Text>
                <Text style={{fontFamily: 'PoppinsBold', fontSize: 16, color: COLORS.darkGray, paddingRight: 5}}>{noOfPhotos}</Text>
            </View>
            </View>
            <View style= {{ 
            borderTopColor: COLORS.darkGray2, borderBottomColor: COLORS.darkGray2,
            borderTopWidth: 0.5, borderBottomWidth: 0.5}}>
                <View style= {{ marginHorizontal: 5, flexDirection: 'row',justifyContent: 'space-between',}}>                
                <View style= {{flexDirection: 'row',}}>
                    <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, padding: 10}}>Sort by: </Text>
                    <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, paddingVertical: 10, 
                    paddingRight: 5}}>{selectedLanguage}</Text>
                    <Picker
                    style = {{padding: 10, height: 40, width: 50}}
                    enabled={pickerenabled()}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Date" value="Date" />
                        <Picker.Item label="Dive" value="Dive" />
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
            </View>
            <View>

                {(divelogs === null) &&
                <View style ={styles.createLogTextWrapper}>
                    <Text style={styles.createLogText}>Photos from your dive logs will appear here.</Text>
                </View>
                }

                {(divelogs !== null) && 
                <View>
                    <View>
                        <FlatList  
                            data={orderdivelogs}
                            renderItem={renderphotos}
                            keyExtractor={(item, index) => item.CreatedOn.toString()}
                            showsVerticalScrollIndicator={false}
                            initialNumToRender={7}
                            contentContainerStyle={{paddingTop: 10, paddingHorizontal: 5, paddingBottom: 100, marginBottom: 30}}
                        />
                    </View>
                </View>
                }
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
    discoverTitle: {
        marginTop: 63,
        marginHorizontal: 23,
        fontFamily: 'LatoBold',
        fontSize:32,
    },
})

export default Photos;
