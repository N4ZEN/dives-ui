import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, Pressable, Alert, RefreshControl, FlatList, SafeAreaView} from 'react-native';
import {  ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import * as SecureStore from 'expo-secure-store';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LinearGradient} from 'expo-linear-gradient';
import {Picker} from '@react-native-picker/picker';
import FAB from 'react-native-fab'
import { TouchableWithoutFeedback } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


import ProfileImage from '../../components/tabs/profileImage'
import {COLORS, colour} from '../../assets/colors/theme';
import Log9 from '../../assets/icons/logicons/log9.png'
import profile from '../../assets/images/profile.png' ;
import menu from '../../assets/icons/menu.png';
import { DrawerActions } from '@react-navigation/native';


Feather.loadFont();

const Liked = ({navigation}) => {

    const FIRST_DIVE = 'firstdive'
    const DIVE_LOG = 'divelog';
    const [divelogexist, setdivelogexists] = useState()
    const [divelogs, setdivelogs] = useState()
    const [diveselected, setdiveselected] = useState()
    const [selectedLanguage, setSelectedLanguage] = React.useState('');
    const [selectedView, setSelectedView] = React.useState('grid'); 
    const [orderdivelogs, setOrderDivelogs] = React.useState([])
    const [refreshing, setRefreshing] = React.useState(true)
    const [reload, setreloading] = React.useState(false)
    const [isFirstdive, setFirstdive] = React.useState(false);


    

    const checkfirstdive = async(key) => {
        try{
            const Firstdive = await SecureStore.getItemAsync(key);
            if (Firstdive === null) {               
                console.log('no value stored under key')
                await SecureStore.setItemAsync(key, 'true'); 
                console.log('Successfully stored to storage')
                setFirstdive(true)
            } else {
                setFirstdive(false)
            }
        } catch (e) {
            console.log(e, 'couldnt ACCESS storage')
        }
    }

    const sortdivelogs = (selected) => {
        if (selected === 'Location') {
            let sortedlocation = divelogs.sort((a, b) => a.Location.Name.localeCompare(b.Location.Name))
            setOrderDivelogs(sortedlocation)
        } else if (selected === 'Dive Date') {
            let sortedDate = divelogs.sort((a, b) => a.Date.localeCompare(b.Date))
            setOrderDivelogs(sortedDate)
        } else if (selected === 'DiveLog Date') {
            let sortedDive = divelogs.sort((a, b) => Date.parse(a.CreatedOn) - Date.parse(b.CreatedOn)).reverse()
            setOrderDivelogs(sortedDive)
        }  
        else {
            console.log('hello')
        }
        setSelectedLanguage(selected)    
    }

    const pickerenabled = () => {
        if (orderdivelogs) {
            return true;
        }
        else {
            return false;
        }
    }


    const renderdivelogItem = ({item}) => {
        return(
            <View>
                <Pressable
                    disabled= {(diveselected===item.CreatedOn)}
                    style = {{...styles.divelogItem, borderRadius: 25, paddingLeft: 13, backgroundColor: (diveselected===item.CreatedOn) ? COLORS.lightOrange2 :"#F7FCFF",}}
                    onPress={() => setdiveselected(item.CreatedOn)}
                >
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style ={{flexDirection: 'row'}}>
                            {/* <View style = {{backgroundColor: COLORS.lightGray1, height: 60, width: 60, borderRadius: 20,
                                alignItems: 'center', justifyContent: 'center', margin: 7, marginRight: 10,}}>
                                <Image source = {Log2} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                            </View> */}
                            <View style = {{margin: 3}}>
                                <View style={{flexDirection: 'row', }}>
                                    <Text style={{...styles.locationtext, width: (diveselected===item.CreatedOn)? 210: 300,}}
                                    >{item.Location?.Name} </Text>
                                    </View>
                                    <Text style={{fontSize: 14,
                                        fontFamily: "PoppinsRegular",
                                        color: COLORS.black,
                                        textTransform: 'capitalize', 
                                        width: (diveselected===item.CreatedOn)? 210:200
                                    }}
                                        >{item.Location?.Atoll} </Text>
                                <View style= {{flexDirection: 'row',}}>
                                
                                    <Text style ={{width: (diveselected===item.CreatedOn)? 110: 250,}}>Date: {item.Date}     Time: {item.StartTime}</Text>
                                </View>
                            </View>
                        </View>

                        {(diveselected===item.CreatedOn) &&
                        <View style = {{flexDirection: 'row'}}>
                            <TouchableOpacity style={{height: 35, width: 35, borderRadius: 10, borderWidth: 0.5, borderColor: COLORS.darkGray,
                             shadowColor: "#000",
                             shadowOffset: {
                                 width: 0,
                                 height: 2,
                             },
                             shadowOpacity: 0.25,
                             shadowRadius: 3.84,
                             
                             elevation: 5,
                             backgroundColor: COLORS.lightGray1, margin: 2.5,
                                alignItems: 'center', justifyContent: 'center'}}
                                onPress={() => navigation.navigate('Dive Edit', {divelogs: item})}>
                                <MaterialIcons name = 'edit' size = {23} color= {COLORS.darkGray} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{height: 35, width: 35, borderRadius: 10, borderWidth: 0.5, borderColor: COLORS.darkGray,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            backgroundColor: COLORS.lightGray1, margin: 2.5,
                                alignItems: 'center', justifyContent: 'center'}}
                                onPress={() =>  Alert.alert('Delete Dive Log', 'Are you sure you want to delete divelog?',
                                    [
                                    {
                                    text: "Yes",
                                    onPress: () => {
                                        deletefunction();                 },
                                    
                                },
                                    {
                                    text: "Cancel",
                                    },
                                    ]
                                  )}
                                >
                                <MaterialIcons name = 'delete' size = {23} color= {COLORS.darkGray} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{height: 35, width: 35, borderRadius: 10, borderWidth: 0.5, borderColor: COLORS.darkGray,
                             shadowColor: "#000",
                             shadowOffset: {
                                 width: 0,
                                 height: 2,
                             },
                             shadowOpacity: 0.25,
                             shadowRadius: 3.84,
                             
                             elevation: 5,
                            backgroundColor: COLORS.lightGray1, margin: 2.5,
                                alignItems: 'center', justifyContent: 'center'}}
                                onPress={() => {navigation.navigate('Share', {item: item})}}
                                >
                                <MaterialIcons name = 'share' size = {23} color= {COLORS.darkGray} />
                            </TouchableOpacity>
                        </View>
                        }
                    </View>
                </Pressable>

                {(diveselected===item.CreatedOn)  &&
                <View style ={{marginLeft: 25, marginTop: -5,}}>
                    
                    <Text style = {{ fontSize: 13, color: COLORS.darkGray2, fontFamily: "LatoRegular"}}>Last Modified: { new Date(item.CreatedOn).toUTCString()}</Text>
                </View>}
            </View>
        )
    }

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
                // setdivelogexists(false)

            }
        } catch(e){
            console.log('could not access storage', e)
        }
    }


    const deletefunction = async() => {
        try{
                await SecureStore.deleteItemAsync(DIVE_LOG);
                loadData();
                setreloading(previosSate => !previosSate)
        }catch {
            console.log("Coudn't access async storage")
        }
        
    } 

    useFocusEffect(
        React.useCallback(() => {
          // Do something when the screen is focused
          loadData();
          setreloading(previosSate => !previosSate)
          return () => {
            // Do something when the screen is unfocused
            // Useful for cleanup functions
          };
        }, [])
    )
    

    const loadData = () => {
        retrievefunction(DIVE_LOG)
        setRefreshing(false)
    }

    useEffect(() => {

    }, [diveselected, orderdivelogs])

    useEffect(()=> {

    }, [selectedLanguage])

    useEffect(() => {
        //console.log(FIRST_DIVE)
       loadData();
    }, [reload, navigation])
    useEffect(() => {
        checkfirstdive(FIRST_DIVE);
        loadData();
    }, [])
    
    return (
        <LinearGradient style={{ flex: 1, }} colors={[COLORS.white, COLORS.lightOrange2]}>
            <TouchableWithoutFeedback 
                onPress={()=> setdiveselected(null)}
            >
                <View  style={{...styles.containerLogs,}}>

                    

                    {/*Header */} 
            <SafeAreaView>
            <View style={styles.menuWrapper}>
                <TouchableOpacity 
                style = {{paddingHorizontal: 15, paddingBottom: 15, paddingTop: 3}} 
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Image source = {menu} 
                    style = {{
                        height: 40, 
                        width: 40,
                        borderRadius: 2,
                        resizeMode: 'contain'
                    }}/>
                </TouchableOpacity>
                <TouchableOpacity
                
                onPress={() => navigation.navigate('ProfileScreen')}>
                    <Image source ={profile}
                    style ={{width: 65,
                        height: 65, 
                        borderRadius: 14,
                        overflow: 'hidden',
                        borderRadius: 999}}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

        {/*Header */} 
        <View style={{flexDirection: 'row', justifyContent: 'space-between', 
                        marginBottom:0 }}>
                        <Text style ={styles.discoverTitle}>Dive Logs</Text>
                        {/* <TouchableOpacity
                            onPress={() => navigation.navigate( 'ProfileScreen')}>
                            <ProfileImage />
                        </TouchableOpacity> */}
                    </View>

                    {/* Sort by */}
                    <View style= {{ 
                        borderBottomColor: COLORS.lightGray1,
                        borderBottomWidth: 1}}>
                        <View style= {{ marginHorizontal: 5, flexDirection: 'row',justifyContent: 'flex-end',}}>                
                            <View style= {{flexDirection: 'row',}}>
                                <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, padding: 10}}>Sort by: </Text>
                                <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, paddingVertical: 10, 
                                    paddingRight: 5}}>{selectedLanguage}</Text>
                                <Picker 
                                    enabled={pickerenabled()}
                                    style = {{padding: 10, height: 40, width: 50}}
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue) =>
                                        sortdivelogs(itemValue)
                                    }>
                                    <Picker.Item label="DiveLog Date" value="DiveLog Date" />
                                    <Picker.Item label="Dive Date" value="Dive Date" />
                                    <Picker.Item label="Location" value="Location" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    {/* first time open */}
                    {isFirstdive && !orderdivelogs &&
                    <View style={styles.containercreateLogs}>
                        <View style ={styles.createLogTextWrapper}>
                            <Text style={styles.createLogText}>You haven't logged a dive yet.</Text>
                        </View>
                        <TouchableOpacity style = {styles.createLogButtonWrapper} 
                            onPress= {() => navigation.navigate('Dive Log')}>
                            <Text style = {styles.createLogButtonText}>Create your first Dive Log!</Text>
                        </TouchableOpacity>
                    </View>
                    }

                    {!isFirstdive && !orderdivelogs &&
                    <View style ={styles.createLogTextWrapper}>
                        <Text style={{...styles.createLogText, color: COLORS.darkGray3}}>Tap + button below to log a dive.</Text>
                    </View>
                    }

                    {(orderdivelogs) &&
                    <View style = {{marginBottom: 30, }}>
                        <FlatList 
                        extraData={reload}
                            data={orderdivelogs}
                            renderItem={renderdivelogItem}
                            keyExtractor={(item, index) => item.CreatedOn}
                            showsVerticalScrollIndicator={false}
                            initialNumToRender={7}
                            bounces={false}
                            refreshControl={
                                <RefreshControl refreshing={refreshing} onRefresh={loadData} />
                              }
                            contentContainerStyle={{paddingTop: 10, paddingHorizontal: 5, paddingBottom: 100, marginBottom: 30}}
                        />
                    </View>
                    }     
                </View>
            </TouchableWithoutFeedback>

            {/* add dive button */}
            {(!isFirstdive) &&
            <View style = {{position: 'absolute',
                bottom: 16,
                right:4}}>
                <FAB  
                    buttonColor={COLORS.darkpink2} 
                    onClickAction={() => navigation.navigate('Dive Log')}
                    visible={true} 
                    iconTextComponent={<Feather name="plus" color= {COLORS.white} size ={29}/>}
                />
            </View>
            }
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    containerLogs: {
        flex: 1, 
        color: colour.white,
        marginBottom: 100,
        
    },
    menuWrapper: {
        marginHorizontal: 20,
        marginLeft: 0,
        marginTop: 45,
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
        marginTop: 13,
        marginHorizontal: 23,
        fontFamily: 'LatoBold',
        fontSize:32,
    },
    locationtext: {
        fontSize: 15,
        fontFamily: "PoppinsBold",
        color: COLORS.black,
        textTransform: 'capitalize',
        
    },
    divelogItem: {
        padding: 10,
        marginHorizontal: 8,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 4,
    },

})

export default Liked;
