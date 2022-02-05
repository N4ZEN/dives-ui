import React from 'react';
import {View, Text, StyleSheet, Dimensions, useColorScheme, Image, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Entypo, Feather} from 'react-native-vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Rating } from 'react-native-ratings';
import FAB from 'react-native-fab';
import ViewShot from "react-native-view-shot";
import * as Sharing from "expo-sharing";

import {COLORS, colour} from '../../assets/colors/theme';
import sharemaps from '../../assets/images/divershare.png';
import mapshare from '../../assets/images/mapshare.png';
import logoshare from '../../assets/images/logoshare.png';
import qrcode from '../../assets/images/qrcode.png';
import profile from '../../assets/images/profile.png';
import flag from '../../assets/images/flagmaldives.png';

const height= Dimensions.get('window').height;

const Share = ({route, navigation}) => {
    const {item} = route.params;
    const viewShot = React.useRef();
    const [colorsch, setcolorsch] = React.useState(true)
    const colorScheme = useColorScheme();


    const MyComponent= ()=> {
     if (colorScheme === 'dark') {
       setcolorsch(false)
     } else {
       setcolorsch(true)
     }
     console.log(colorScheme)
   }


    const captureAndShareScreenshot = () => {
        viewShot.current.capture().then((uri) => {
        console.log("do something with ", uri);
        Sharing.shareAsync("file://" + uri);
        }),
        (error) => console.error("Oops, snapshot failed", error);
        };

    React.useEffect(() => {
        console.log(item)
    }, [item])

    React.useEffect(() => {
        MyComponent();
    }, [])

  

    return (
        <View style={{flex:1,}}>
        <ViewShot
            ref = {viewShot}
            options={{ format: "jpg", quality: 0.9 }}
            style={{flex:1}}
            >
            <LinearGradient style={styles.detailsContainer} colors={colorsch? ['#ACBAE5', '#65D4E3'] : ['#ACBAE5', '#65D4E3']}>
                <View style={{position: 'absolute', left: 15, top: 15,}}>
                    <Text style={{color: COLORS.darkGray2}}>My Dive Log</Text>

                </View>
                    <Image source={mapshare} style={{height: 120, width: Dimensions.get("window").width, resizeMode: 'contain' }}/>
                 <View style={{position: 'absolute', alignSelf: 'center', justifyContent: 'center', top: 100,}}>
                    <Text style={{fontFamily: 'LatoBold', fontSize: 19, color: COLORS.black, textAlign: 'center', textTransform: 'capitalize'}}>{item.Location.Name}</Text>
                    <Rating 
                        type='custom'
                        readonly={true}
                        ratingBackgroundColor={COLORS.darkGray1}
                        ratingCount={5}                        
                        startingValue={item.Location.LocationRating}
                        fractions={2}
                        tintColor={'#A0C4E7'}
                        imageSize={25}
                        jumpValue={0.5}                        
                        starContainerStyle={{shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 6,}}

                    />
                </View>
                <View style={{position: 'absolute', alignSelf: 'center', justifyContent: 'center', top: 145}}>
                    <Entypo name='location-pin' size = {60} color={COLORS.red} />
                    <Text style={{fontFamily: 'LatoBold', fontSize: 11, color: COLORS.black, textAlign: 'center',marginTop: -8}}>Maldives</Text>
                </View>
                <View style={{marginLeft: 30, marginRight: 30, marginTop: 110,}}>                
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', paddingVertical: 2}}>
                    <Entypo name='location-pin' size = {20} color={COLORS.white} />
                        <Text style={{fontFamily: 'LatoRegular', fontSize: 15, color: COLORS.darkGray2, width: 180, textTransform: 'capitalize', }} ellipsizeMode='tail' numberOfLines={1}>{item.Location.Atoll}</Text>
                        <Text style={{fontFamily: 'LatoRegular', fontSize: 17, color: COLORS.darkGray2}}> | </Text>
                        <Text style={{fontFamily: 'LatoRegular', fontSize: 15, color: COLORS.darkGray2}}>{item.Date}</Text>
                        <View>
                            <Image source={flag} style={{width: 30, height: 17, resizeMode: 'contain'}}/>
                        </View>
                    </View> 
                </View>
                <View style ={styles.descritptionWrapper}>
                    <View style = {styles.heartWrapper}>
                        <View style={{paddingTop: 5}}>
                           <Image source={profile} style={{height: 49, width: 53, resizeMode: 'contain'}}/>
                        </View>
                    </View>
                    <View style = {{paddingLeft: 90, paddingTop: 25,}}>
                        <Text style={{fontFamily: 'LatoBold', fontSize: 18, color: COLORS.darkGray}}>John Smith</Text>
                    </View>
                    <View style= {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, paddingHorizontal: 20, paddingVertical: 10, paddingBottom: 30}}>
                        <View >
                            <Text style={{fontFamily: 'LatoBold', fontSize: 17, color: COLORS.black, textAlign: 'center'}}>{item.StartTime}</Text>
                            <View style={{paddingTop: 10,}}>
                                <Text style={{fontFamily: 'LatoRegular', fontSize: 15, color: COLORS.darkGray, textAlign: 'center'}}>Start Time</Text>
                            </View>
                        </View>
                        <View style={{borderRightWidth: 0.5, borderRightColor: COLORS.darkGray2, height: 55}}>
                        </View>
                        <View>
                            <Text style={{fontFamily: 'LatoBold', fontSize: 17, color: COLORS.black, textAlign: 'center'}}>{item.EndTime}</Text>
                            <View style={{paddingTop: 10,}}>
                                <Text style={{fontFamily: 'LatoRegular', fontSize: 15, color: COLORS.darkGray, textAlign: 'center'}}>End Time</Text>
                            </View>
                        </View>
                        <View style={{borderRightWidth: 0.5, borderRightColor: COLORS.darkGray2, height: 55}}>
                        </View>
                        <View>
                            <Text style={{fontFamily: 'LatoBold', fontSize: 17, color: COLORS.black, textAlign: 'center'}}>{item.Duration}</Text>
                            <View style={{paddingTop: 10,}}>
                                <Text style={{fontFamily: 'LatoRegular', fontSize: 15, color: COLORS.darkGray, textAlign: 'center'}}>Duration</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style= {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 0, paddingHorizontal: 20, paddingVertical: 30, 
                    borderTopWidth: 0.3, borderColor: COLORS.darkGray2,  }}>
                        {(item.MaxDepth !== null) &&
                        <View >
                            <Text style={{fontFamily: 'LatoBold', fontSize: 15, color: COLORS.black, textAlign: 'center'}}>{item.MaxDepth}</Text>
                            <View style={{paddingTop: 10,}}>
                                <Text style={{fontFamily: 'LatoRegular', fontSize: 14, color: COLORS.darkGray, textAlign: 'center', }}>Max {"\n"}Depth</Text>
                            </View>
                        </View>}
                        {(item.WeatherCondition.Visibility !== null) &&
                        <View>
                            <Text style={{fontFamily: 'LatoBold', fontSize: 15, color: COLORS.black, textAlign: 'center'}}>{item.WeatherCondition.Visibility}</Text>
                            <View style={{paddingTop: 10,}}>
                                <Text style={{fontFamily: 'LatoRegular', fontSize: 14, color: COLORS.darkGray, textAlign: 'center'}}>Visibility</Text>
                            </View>
                        </View>}
                        {(item.SurfaceTemperature !== null) &&
                        <View style={{}}>
                            <Text style={{fontFamily: 'LatoBold', fontSize: 15, color: COLORS.black, textAlign: 'center'}}>{item.SurfaceTemperature}</Text>
                            <View style={{paddingTop: 10,}}>
                                <Text style={{fontFamily: 'LatoRegular', fontSize: 14, color: COLORS.darkGray, textAlign: 'center', }} numberOfLines={2}>Surface {"\n"}Temperature</Text>
                            </View>
                        </View>}
                       
                        
                        {(item.WeatherCondition.Weather !== null) &&
                        <View>
                            <Text style={{fontFamily: 'LatoBold', fontSize: 15, color: COLORS.black, textAlign: 'center', textTransform: 'capitalize'}}>{item.WeatherCondition.Weather}</Text>
                            <View style={{paddingTop: 10,}}>
                                <Text style={{fontFamily: 'LatoRegular', fontSize: 14, color: COLORS.darkGray, textAlign: 'center'}}>Weather</Text>
                            </View>
                        </View>}
                    </View>
                    
                </View>
            </LinearGradient>
            <ImageBackground source= {sharemaps}
                style={styles.backgroundImage}>
                    <View style={{position: 'absolute', right: 10, bottom: 10, alignItems: 'flex-end'}}>
                        <Image source={qrcode} style={{height: 70, width:60, resizeMode: 'contain' , paddingRight: 5}}/>
                        <Text style={{fontFamily: 'LatoRegular', fontSize: 12, color: COLORS.darkGray3}}>By SIGS Maldives</Text>
                    </View>
                    <View style={{position: 'absolute', left: 10, bottom: 10, flexDirection: 'row'}}>
                        <Image source={logoshare} style={{height: 70, width:60, resizeMode: 'contain' }}/>
                        <View style={{paddingLeft: 10, alignItems: 'baseline', paddingTop:12}}>
                            <Text style={{fontFamily: 'LatoBold', fontSize: 16, color: COLORS.darkGray3}}>Dives MV</Text>
                            <Text style={{fontFamily: 'LatoRegular', fontSize: 14, color: COLORS.darkGray3}}>Log your dives, Anytime, Anywhere</Text>
                        </View>
                    </View>
            </ImageBackground>
            </ViewShot>
            <View style = {{position: 'absolute',
                bottom: 15,
                right:1}}>
                <FAB  
                    buttonColor={COLORS.green} 
                    onClickAction={() => captureAndShareScreenshot()}
                    visible={true} 
                    iconTextComponent={<Entypo name="share" color= {COLORS.white} size ={40}/>}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
       // backgroundColor: '#65D4E3',
    },
    backgroundImage: {
        //flex:1,
        height:height *0.4,
        width: Dimensions.get('window').width,
        justifyContent: 'space-between',
        //marginBottom: -30,
        alignSelf: 'baseline',
        paddingBottom: 45,
        justifyContent: 'flex-end'
    },
    descritptionWrapper: {
        position: 'absolute',
        top: 255,
        alignSelf:'center',
        width: Dimensions.get("window").width-30,
        
        backgroundColor: '#90C0DB', 
      // backgroundColor: COLORS.lightGray,
       backgroundColor: 'rgba(173, 235, 246, 0.3)',
       // opacity: 0.3,
        //borderColor: COLORS.white,
        //borderWidth: 0.5,
        borderRadius:25,
        marginHorizontal: 10, 
        zIndex: 1
        //elevation: 2,   
    },
    backIcon: {
        marginTop:55,
        marginLeft: 15,
    },
    titlesWrapper: {
        marginHorizontal:20,
        marginBottom: 40,
    },
    itemTitle: {
        fontFamily: 'LatoBold',
        fontSize: 30,
        color: colour.white,
    },
    locationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    locationText: {
        fontFamily: 'LatoBold',
        fontSize: 16,
        color: colour.white,
    },
    heartWrapper: {
        position: 'absolute',
        left: 25,
        top: 10,
        width: 50,
        height: 50,
        backgroundColor: colour.white,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 6,
    },
    shareWrapper: {
        position: 'absolute',
        right:25,
        top: -30,
        width: 54,
        height: 54,
        backgroundColor: colour.white,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    descritptionTextWrapper: {
        marginTop: 30,
        marginBottom: 30,
        marginHorizontal: 20,  
    },
    descriptionTitle: {
        fontFamily: 'LatoBold',
        fontSize: 24,
        color: colour.black,
    },
    descriptionText: {
        marginTop: 5,
        textAlign: 'justify',
        paddingVertical: 5,
        fontFamily: 'PoppinsRegular',
        fontSize: 15,
        marginRight: 5,
        color: COLORS.darkGray,
        //height:85,
    },
    
    buttonWrapper: {
        marginHorizontal:20, 
        marginTop:40,
        backgroundColor: colour.pink,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonTExt: {
        fontFamily: 'LatoBold',
        fontSize: 18,
        color: colour.white,
    },
})


export default Share;
