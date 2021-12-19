import React from 'react';
import { Image, View, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
//import { SearchBar } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import {COLORS, colour} from '../../assets/colors/theme';
import profile from '../../assets/images/person.png' ;
import inviteFriendsDat from '../../assets/data/inviteFriendsData';
import ProfileImage from '../../components/tabs/profileImage';


Feather.loadFont();
Entypo.loadFont();

const inviteFriends = ({navigation}) => {

    const [inviteFriendsData, setInviteFriendsData] = React.useState(inviteFriendsDat)
    const [search, setsearch] = React.useState('')
    const [masterData, setMasterData ] = React.useState(inviteFriendsDat)



    const searchfilter = (text) => {
        if(text) {
            const newData = masterData.filter((item) => {
                const itemDAta = item.name ? 
                item.name.toUpperCase()
                : ''.toUpperCase();
                const textData = text.toUpperCase(); 
                return itemDAta.indexOf(textData) > -1
            });
            setInviteFriendsData(newData);
            setsearch(text);
        }else {
            setInviteFriendsData(masterData);
            setsearch(text)

        }
    }

    const renderinviteFriendsItem = ({item}) => {
        return(
            <View style ={[styles.contactsWrapper, {
                marginLeft: item.id == 'invitefriends-1' ? 15:15  }]}>
                <Image source= {item.image} style = {styles.contactImage}/>
                <View>
                    <Text style= {styles.contactNameText}>{item.name}</Text>
                    <Text style= {styles.contactEmailText}>{item.email}</Text>
                </View>
            </View>
        )
    };

    return (
        <View  style={styles.containerLogs}>
            
                {/*Header */} 
                <SafeAreaView>
                    <View style={styles.menuWrapper}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Feather name = "arrow-left" size = {32} color={colour.black} style ={styles.menuIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate( 'ProfileScreen')}>
                            <ProfileImage />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                {/*DiveBuddies */}
                <View style = {styles.diveBuddiesWrapper}>
                    <Text style ={styles.diveBuddiesTitle}>Dive Buddies</Text>
                    <View style = {styles.searchbarWrapper}>
                            <TextInput 
                                Style = {{...styles.input, paddingTop: 0, paddingHorizontal: 10, 
                                    marginHorizontal: 10 }}
                                value = {search}
                                placeholder = "Search Here..."
                                underlineColorAndroid = 'transparent'
                                onChangeText = {(text) => searchfilter(text)}
                            />
                        </View>
                    {/* <View style = {styles.searchbarWrapper}>
                    <SearchBar
                        round
                        lightTheme
                        searchIcon={{ size: 20 }}
                        onChangeText={(text) => searchFilterFunction(text)}
                        onClear={(text) => searchFilterFunction('')}
                        placeholder=" Search" 
                        containerStyle= {{backgroundColor: 'transparent', paddingVertical: 1, }}
                        inputContainerStyle= {{backgroundColor: 'transparent'}}
                    />
                    </View> */}
                    <View style={styles.discoverCatagoriesWrapper}>
                        <FlatList 
                            data={inviteFriendsData}
                            renderItem={renderinviteFriendsItem}
                            keyExtractor={(item) => item.id}
                            vertical
                            showsVerticalScrollIndicator={false}
                          //  ListHeaderComponent={this.renderHeader}
                        />  
                    </View>
                    <View style={styles.discoverItemsWrapper}>
                    
                    </View>
                </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    containerLogs: {
        flex: 1, 
        color: colour.white,
    },
    menuWrapper: {
        marginTop: 2,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width:20,
        height:52,
        borderRadius:10,
    },
    diveBuddiesWrapper: {
        marginTop: 10,
    },
    diveBuddiesTitle: {
        marginHorizontal: 20,
        fontFamily: 'LatoBold',
        fontSize:32,
        marginVertical: 3,
    },
    contactsWrapper: {
        marginVertical:10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    contactImage: {
        width:60,
        height:60,
        marginRight: 20,
        paddingHorizontal:10,
        paddingVertical:10,
    },
    contactNameText: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 17,
        color: COLORS.darkGray,
    },
    contactEmailText :{
        fontFamily: 'PoppinsRegular',
        fontSize: 14,
        color: colour.gray2 ,
    },
    searchbarWrapper: {
        paddingHorizontal: 20,
        marginVertical: 5,
    },
})

export default inviteFriends;
