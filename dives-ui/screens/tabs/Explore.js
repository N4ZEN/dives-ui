import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Pressable, FlatList, Image} from 'react-native';
import { TouchableOpacity as TouchableOpacit} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, colour } from '../../assets/colors/theme';
import {Entypo, MaterialIcons, Feather} from 'react-native-vector-icons';
import SpeciesData from '../../assets/data/species';
import { Overlay } from 'react-native-elements';


const Explore = ({route, navigation}) => {

    const [value, setValue] = React.useState()
    const [speciesExplore, setSpeciesExplore] = React.useState()
    const [speciesOverlayVisible, setSpeciesOverlayVisible] = React.useState(false)



    const {item} = route.params;

    const renderSpeciesItem = ({item}) => {
        return(
            <View style= {{ flexDirection : 'column', borderColor: COLORS.lightGray2, borderWidth: 2, justifyContent: 'space-between',
            }}>
                <View >
                    <TouchableOpacity style = {{...styles.circleImage, flexDirection : 'column'}} onPress ={() => setSpeciesOverlayVisible(true)}>
                        <Image source = {item.image} style = {styles.coverImage}/>
                        <Text style = {{...styles.labelStyles, color: COLORS.darkGray, paddingTop: 20, fontSize: 17}}>{item.Name}</Text>                        
                    </TouchableOpacity>               
                </View>
                {speciesOverlayVisible && 
                <View>
                <Overlay isVisible={speciesOverlayVisible} 
                onBackdropPress={() => {setSpeciesOverlayVisible(false)
                    }}  
                overlayStyle = {{borderRadius: 10}}
                backdropStyle = {{color: "rgbs(0,0,0, 0.8)"}}
               >
                <View>
                <Text style = {{ textAlign: 'center', ...styles.diveLogHeaders}}>Sea State</Text>
                
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 8, paddingTop: 1,}}>
                    <Text style = {{...styles.overlaysubtext1, color: COLORS.darkGray2}}>1</Text>
                    <Text style = {{...styles.overlaysubtext1, color: COLORS.darkGray2}}>10</Text>
                </View>
                
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 8, paddingBottom: 30,}}>
                    <Text style = {{...styles.overlaysubtext, color: COLORS.darkGray2}}>Calm</Text>
                    <Text style = {{...styles.overlaysubtext, color: COLORS.darkGray2}}>Moderate</Text>
                    <Text style = {{...styles.overlaysubtext, color: COLORS.darkGray2}}>Rough</Text>
                </View>
                        
                <View>

                <Text style = {{...styles.overlaysubtext, fontSize: 14}}>Select sea state on a scale of 1 to 10.</Text>
                </View>
                <TouchableOpacit
                        style={styles.overlayButtonWrapper}
                        onPress ={() => setSpeciesOverlayVisible(false)}>
                        <Text style= {styles.overlayButtonTExt}>Select</Text>
                    </TouchableOpacit>
                    </View>
              </Overlay>
                </View>
                
                    //  <View>
                    //     <Overlay isVisible={speciesOverlayVisible} 
                    //         onBackdropPress={() => {setSpeciesOverlayVisible(false)}}
                    //         overlayStyle = {{borderRadius: 20, padding: 0, margin: 0}}
                    //        // backdropStyle = {{color: 'transparent'}}
                    //        //backdropStyle = {{color: "rgbs(0,0,0, 0.7)"}}
                    //     >  

                    //         <ImageBackground source = {item.image} 
                    //             style={{height: 200, width: 300, borderRadius: 5}}>
                    //         <View>

                    //             <View style= {{flexDirection: 'row', justifyContent: 'space-between', }}>
                    //                 <Text style = {{...styles.labelStyles, color: COLORS.white2, paddingTop: 10}}>{item.Name}</Text>
                    //                 <TouchableOpacit style = {{padding: 10}} onPress ={() => setSpeciesOverlayVisible(false)}>
                    //                     <Feather name = 'x' size = {22} color={COLORS.white2}/>
                    //                 </TouchableOpacit>
                    //             </View>
                    //         </View>
                    //         </ImageBackground>
                    //     </Overlay>
                    // </View>
                }
            </View>
        )
    };


     {/*Search filter in list */}
     const [search, setsearch] = React.useState('')
     const [masterData, setmasterData] = React.useState(SpeciesData)
 
     const searchfilter = (text) => {
         if(text) {
             const newData = masterData.filter((item) => {
                 const itemDAta = item.Name ? 
                 item.Name.toUpperCase()
                 : ''.toUpperCase();
                 const textData = text.toUpperCase(); 
                 return itemDAta.indexOf(textData) > -1
             });
             setspecies(newData);
             setsearch(text);
         }else {
             setspecies(masterData);
             setsearch(text)
 
         }
     }

    const renderListHeader = () => {
        
        return(
            <View style = {{marginTop: -10}}>
                <View style = {{flexDirection: 'row', paddingHorizontal: 20,paddingBottom: 20, paddingTop: 10, 
                justifyContent: 'space-between',backgroundColor: COLORS.lightGray2 }}>
                    <TouchableOpacity style= {styles.backIcon} onPress= {() => navigation.goBack()}>
                            <Entypo name='chevron-left' size={32} color={colour.black} />
                        </TouchableOpacity>
                    <Text style = {styles.itemTitle}>{item.title}</Text>
                    <TouchableOpacity style= {styles.backIcon} onPress= {() => navigation.goBack()}>
                            <MaterialIcons name='search' size={32} color={colour.black} />
            </TouchableOpacity>
            </View>
            </View>
        )
    }

    React.useEffect(()=> {
            let currentspecies = SpeciesData.filter(value =>  value.type.toLowerCase() == item.title.toLowerCase() )
            setSpeciesExplore(currentspecies)
    }, [])
    return (
        <View style = {{flex: 1, }} >
        <View style = {{
            flexDirection: 'row', 
            paddingHorizontal: 20, 
            paddingBottom: 20, 
            paddingTop: 10, 
            justifyContent: 'space-between',
            backgroundColor: COLORS.lightGray2, 
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 8,}}>
            <TouchableOpacity style= {styles.backIcon} onPress= {() => navigation.goBack()}>
                    <Entypo name='chevron-left' size={32} color={colour.black} />
                </TouchableOpacity>
            <Text style = {styles.itemTitle}>{item.title}</Text>
            <TouchableOpacity style= {styles.backIcon} onPress= {() => navigation.goBack()}>
                    <MaterialIcons name='search' size={32} color={colour.black} />
            </TouchableOpacity>
        </View>
            <View style = {{ flexDirection: 'row', marginBottom: 100, marginTop: 0, }}>
                <FlatList 
                    data = {speciesExplore}
                    keyExtractor = {(item) => `key-${item.id}`}
                    renderItem = {renderSpeciesItem} 
                    contentContainerStyle={{ paddingVertical: 10 }}
                    numColumns={3}

                />
            </View>
            {/* <View>
                <Slider min={0} max={300} step={4}
                styleSize={'small'}
                    valueOnChange={value => setValue(value)}
                    initialValue={12}
                    knobColor={COLORS.blue}
                    valueLabelsBackgroundColor='black'
                    inRangeBarColor={COLORS.darkGray2}
                    outOfRangeBarColor={COLORS.lightblue2}
                />
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    nwdir: {
        width: 32,
        height:32,
    },
    Ndir: {
        width: 35,
        height:35,
    },
    backIcon: {
        marginTop:38,
        marginLeft: 0,
        alignSelf: 'baseline'
    },
    titlesWrapper: {
        marginHorizontal:20,
        marginBottom: 40,
    },
    itemTitle: {
        fontFamily: 'LatoBold',
        fontSize: 25,
        color: colour.black,
        textTransform: 'capitalize',
        marginTop: 42,        
    },
    labelStyles: {
        fontSize: 18,
        fontFamily: 'LatoRegular',
        padding: 5,
        paddingLeft: 10, 
        paddingVertical: 25,
        textTransform: 'capitalize',
        
    },
    sublabelStyles :{ 
        fontSize: 14,
        fontFamily: 'LatoRegular',
        color: COLORS.darkGray2,
        paddingHorizontal: 5,
    },
    // modal: {
    //     margin : 0, 
    //     backgroundColor: COLORS.blue,
    // },
    coverImage: {
        //margin: 10,
        marginTop: 3,
        marginHorizontal: 10,
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 50,
    },
})

export default Explore;
