import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image, Switch, CheckBox, Card, TextInput, Pressable} from 'react-native';
import {TouchableOpacity } from 'react-native-gesture-handler';
import { Feather} from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { Overlay } from 'react-native-elements';


import { COLORS, colour } from '../../assets/colors/theme';
import Uplaodphoto from '../../components/divelogs/uplaodphoto';
import FormInput from '../../components/divelogs/FormInput';
//import { TextInput as TextInputs } from 'react-native-paper';


const Reefhealth = ({parentCallback, RefHealth}) => {
    const reefhealthedit = RefHealth;

    const [RfHVisible, setRfHVisible] = React.useState(false)
    
    const [bleachingLevel, setBleachingLevel] = React.useState(0)
    const [NoCrownothorns, setNoofCrownoThorns] = React.useState('')
    const [killedCoral, setkilledcoral] = React.useState('')
    const [sedimentation, setsedimentation] = React.useState('')
    
    const [bleachingToggle, setbleachingToggle] = React.useState(false)
    const [CrownoThornsToggle, setCrownofThornsToggle] = React.useState(false)
    const [killedcoralToggle, setkilledCoralToggle] = React.useState(false)
    const [sedimentationToggle, setSedimentationToggle] = React.useState(false)
    const [pollutionToggle, setPollutionToggle] = React.useState(false)
    // const [pollution, setpollution] = React.useState(data)
    
    const [PlasticChecked, setPlasticChecked] = React.useState(false)
    const [fishingGearChecked, setFishingGearChecked] = React.useState(false)
    const [othersChecked, setotherChecked] = React.useState(false)
    const [otherPollutions, setOtherPoluutions] = React.useState('')
    const [overlayVisible, setOverlayVisible] = React.useState(false)
    const [overlayText, setOverlayText] = React.useState('')
    const [overlaysubtext, setoverlaysubtext] = React.useState('')

    const togglebleachingSwitch = () => setbleachingToggle(previousState => !previousState);
    const toggleCrownoThornsSwitch = () => setCrownofThornsToggle(previousState => !previousState);
    const toggleRecentlykcoralsSwitch = () => setkilledCoralToggle(previousState => !previousState);
    const toggleSedimenatationSwitch = () => setSedimentationToggle(previousState => !previousState);
    const togglePolllutionSwitch = () => setPollutionToggle(previousState => !previousState);
    
    
    const handleRFVisibility = () => {
            { RfHVisible?  setRfHVisible(false) : setRfHVisible(true) }
        }

    // const data = [
    //     { id: 1, txt: 'Plastic', isChecked: false },
    //     { id: 2, txt: 'Fishing Gear', isChecked: false },
    //     { id: 3, txt: 'Others', isChecked: false},
    // ];

    // const handleChange = (id) => {
    //     console.log(pollution)
    //     let temp = pollution.map((product) => {
    //         if ( id === 3) {
    //             return { ...product, isChecked: !product.isChecked, otherPollutions: otherPollutions };
    //         }
    //         else if (id === product.id) {
    //             return { ...product, isChecked: !product.isChecked };
    //         }
    //         return product;
    //     });
    //     setpollution(temp);
    //     console.log(temp)
    //   };

    function handleIncrements(val) {
        if (val === '') {
            setNoofCrownoThorns('0')
        } else {
            let newval = (Number(val) + 1)
            setNoofCrownoThorns(newval.toString())
        }
    }

    function handleDecrement(val) {
        if (val === '' || val === '0') {
            return val;
        } else {
                let newval = (Number(val) - 1)
                setNoofCrownoThorns(newval.toString())
            }
    }


    const SetOverlay = ({text, subtext}) => {
        return(
            <View>
             {overlayVisible && 
                    <View>
                        <Overlay isVisible={overlayVisible} 
                            onBackdropPress={() => {setOverlayVisible(false)}}
                            overlayStyle = {{borderRadius: 6, padding: 10, margin: 18}}
                            backdropStyle = {{color: "rgbs(0,0,0, 0.3)"}}
                            >
                            <View>
                                <View style= {{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5, }}>
                                    <Text style = {{...styles.labelStyles, color: COLORS.black, paddingTop: 4, paddingBottom: 4, paddingLeft: 5}}>What {text} ?</Text>
                                    <Pressable
                                        onPress ={() => setOverlayVisible(false)}>
                                        <Feather name = 'x' size = {22} color={COLORS.black} style={{padding: 3}}/>
                                    </Pressable>
                                </View>
                                <Text style = {{fontFamily: 'OpenSansRegular', fontSize: 14, color: COLORS.darkGray2, textAlign: 'justify', paddingHorizontal: 5}}>
                                    {subtext}
                                </Text>
                            </View>
                        </Overlay>
                    </View>
                } 
                </View>
        )
    }

    React.useEffect(() => {
        if (bleachingToggle == false) {
            setBleachingLevel('')
        }
        if (CrownoThornsToggle == false){
            setNoofCrownoThorns('')
        }
        if (pollutionToggle == false){
            setPlasticChecked(false)
            setFishingGearChecked(false)
            setotherChecked(false)
            setOtherPoluutions('')
        }
    }, [bleachingToggle, CrownoThornsToggle, pollutionToggle])

    React.useEffect(() => {
        if(reefhealthedit && Object.keys(reefhealthedit).length !== 0){
            setRfHVisible(true)
            //console.log(reefhealthedit)
            if (reefhealthedit.Bleaching.Bleaching){
                setbleachingToggle(reefhealthedit.Bleaching.Bleaching)
                if (reefhealthedit.Bleaching.BleachingLevel){
                    setBleachingLevel(reefhealthedit.Bleaching.BleachingLevel)
                }
            }
            if (reefhealthedit.CrownOfThorns.CrownOfThorns) {
                setCrownofThornsToggle(reefhealthedit.CrownOfThorns.CrownOfThorns)
                if (reefhealthedit.CrownOfThorns.NoOfCrownOfThorns) {
                    setNoofCrownoThorns(reefhealthedit.CrownOfThorns.NoOfCrownOfThorns)
                }
            }
            if(reefhealthedit.RecentlyKilledCoral.RecentlyKilledCoral){
                setkilledCoralToggle(reefhealthedit.RecentlyKilledCoral.RecentlyKilledCoral)
            }
            if(reefhealthedit.Sedimentation.Sedimentation){
                setSedimentationToggle(reefhealthedit.Sedimentation.Sedimentation)
            }
            if (reefhealthedit.Pollutions.Pollutions) {
                setPollutionToggle(reefhealthedit.Pollutions.Pollutions)
                if (reefhealthedit.Pollutions.Plastic){
                    setPlasticChecked(reefhealthedit.Pollutions.Plastic)
                }
                if (reefhealthedit.Pollutions.FishingGear){
                    setFishingGearChecked(reefhealthedit.Pollutions.FishingGear)
                }
                if (reefhealthedit.Pollutions.Others) {
                    setotherChecked(reefhealthedit.Pollutions.Others.Others)
                    if (reefhealthedit.Pollutions.Others.OtherPollutionsDescription){
                        setOtherPoluutions(reefhealthedit.Pollutions.Others.OtherPollutionsDescription)
                    }
                }
            }


        }

    }, [reefhealthedit])

    React.useEffect(() => {
        if (bleachingToggle === false) {
            setBleachingLevel(0)
        }
    }, [bleachingToggle])

    React.useEffect(() => {
        parentCallback({
            ReefHealth: {
                Bleaching: {
                    Bleaching: bleachingToggle,
                    BleachingLevel: bleachingLevel},
                CrownOfThorns: {
                    CrownOfThorns: CrownoThornsToggle,
                    NoOfCrownOfThorns: NoCrownothorns},
                RecentlyKilledCoral: {
                    RecentlyKilledCoral: killedcoralToggle},
                Sedimentation:  {
                    Sedimentation: sedimentationToggle},
                Pollutions: {
                    Pollutions: pollutionToggle,
                    Plastic: PlasticChecked,
                    FishingGear: fishingGearChecked,
                    Others: {
                        Others: othersChecked,
                        OtherPollutionsDescription: otherPollutions},
                }
            }
        })
    }, [bleachingLevel, bleachingToggle, CrownoThornsToggle, NoCrownothorns, killedcoralToggle, sedimentationToggle, PlasticChecked, fishingGearChecked, othersChecked, otherPollutions, pollutionToggle])
    return (
        <View>
            {/*Reef Health */}
            <View style = {{borderColor: COLORS.lightGray1, borderWidth: 1.5, 
                borderBottomColor: COLORS.lightGray1, borderBottomWidth: 1.5, padding: 5, marginBottom: 5, borderRadius: 8}}>
                <TouchableOpacity style = {{flexDirection : 'row', justifyContent: 'space-between', paddingRight: 10}} 
                onPress= {() => handleRFVisibility()}>
                <Text style = {styles.diveLogSubHeaders}>Reef Health</Text>
                {RfHVisible?
                <Feather name = 'minus-circle' size = {17} color= {COLORS.black} style = {{alignSelf: 'center', paddingLeft: 10,}} />
                : <Feather name = 'plus-circle' size = {17} color= {COLORS.black} style = {{alignSelf: 'center', paddingLeft: 10,}} />
                 }
                </TouchableOpacity>
                {RfHVisible &&
                <View>
                    <View style = {{flexDirection : 'row', justifyContent: 'space-between'}}>
                    <View style = {{flexDirection : 'row'}}>
                    <Text style = {styles.labelStyles}>Bleaching</Text>
                    <TouchableOpacity onPress={() => {
                        setOverlayText('is bleaching')
                        setoverlaysubtext('Coral bleaching is the process when corals lose their vibrant colors and turn white due to various stressors, such as changes in temperature, light, or nutrients. Bleaching occurs when coral polyps expel the algae that live inside their tissue, causing the coral to turn white.')
                        setOverlayVisible(true)}}>
                        <Feather name= "help-circle" size={20} color={COLORS.darkGray2}  style= {{padding: 5,paddingVertical: 18,}}/>
                    </TouchableOpacity>
                    </View>
                    <Switch
                        trackColor={{ false: '#767577', true:COLORS.lightblue3 }}
                        thumbColor={bleachingToggle ? COLORS.lightblue2 : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={togglebleachingSwitch}
                        value={bleachingToggle}
                        />
                    </View>

                    <SetOverlay 
                        text = {overlayText}
                        subtext = {overlaysubtext}
                    />

                    {bleachingToggle && 
                    <View style = {{borderBottomColor: COLORS.lightGray1, borderBottomWidth: 1}}>
                        <View style = {{flexDirection: 'row', paddingTop:8 }}>
                            <Text style = {{...styles.sublabelStyles, color: COLORS.black,paddingLeft: 10}}>Coral bleached level: </Text>
                            <Text style = {{...styles.sublabelStyles, color: COLORS.black, fontFamily: 'LatoBold'}}>{bleachingLevel}</Text>
                        </View>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style = {{...styles.sublabelStyles, alignSelf: 'center'}}>1</Text>
                            </View>
                            <Slider
                                style={{width: Dimensions.get('window').width - 60, height: 40, alignSelf: 'center'}}
                                step={1}
                                minimumValue={0}
                                maximumValue={10}
                                value={bleachingLevel}
                                onSlidingComplete={(value) => setBleachingLevel(value)}
                                //onValueChange={(value) => setBleachingLevel(value)}
                                thumbTintColor={COLORS.lightblue2}
                                minimumTrackTintColor={COLORS.lightblue3}
                                maximumTrackTintColor="#000000"
                            />
                                <Text style = {{...styles.sublabelStyles, alignSelf: 'center'}}>10</Text>
                        </View>
                        <View>
                            <Uplaodphoto/>
                        </View>
                    </View>
                    }
                    {/*Crown of thorns */}
                    <View>
                        <View style = {{flexDirection : 'row', justifyContent: 'space-between'}}>
                        <View style = {{flexDirection : 'row'}}>
                            <Text style = {styles.labelStyles}>Crown of Thorns</Text>
                        <TouchableOpacity onPress={() => {
                        setOverlayText('are Crown of Thorns')
                        setoverlaysubtext('It is a large spiky starfish of the tropical Indo-Pacific, feeding on coral and sometimes causing great damage to reefs.')
                        setOverlayVisible(true)}}>  
                            <Feather name= "help-circle" size={20} color={COLORS.darkGray2}  style= {{padding: 5,paddingVertical: 18,}}/>
                        </TouchableOpacity>
                        </View>
                            <Switch
                            trackColor={{ false: '#767577', true: COLORS.lightblue3 }}
                            thumbColor={CrownoThornsToggle ? COLORS.lightblue2 : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleCrownoThornsSwitch}
                            value={CrownoThornsToggle}
                            />
                        </View>


                        


                        {CrownoThornsToggle && 
                        <View style = {{borderBottomColor: COLORS.lightGray1, borderBottomWidth: 1}}>
                            <View >
                                <View  style = {{flexGrow: 1, flexDirection: 'row',}}>
                                    <TouchableOpacity 
                                    style = {{paddingTop: 35, paddingHorizontal: 10,}} 
                                    onPress = {() => handleDecrement(NoCrownothorns)}  
                                    >
                                        <Feather name = "minus" size = {20} color={COLORS.darkGray2} />
                                    </TouchableOpacity>
                                    <FormInput                   
                                        style = {{...styles.input, paddingHorizontal: 10, }}
                                        inputStyle = {{color: COLORS.black,  textAlign: 'center'}}
                                        keyboardType = 'numeric'
                                        label = "No of Crown of Thorns"
                                        placeholder= { "No."}
                                        editable = {true}
                                        value={NoCrownothorns}
                                        onChangeText={(value) => setNoofCrownoThorns(value)}
                                        //errorMsg= {dateError}  
                                    />
                                    <TouchableOpacity 
                                            style = {{paddingTop: 35, paddingHorizontal: 10,}} 
                                            onPress = {() => handleIncrements(NoCrownothorns)}  
                                            >
                                                <Feather name = "plus" size = {20} color={COLORS.darkGray2} />
                                            </TouchableOpacity>
                                </View>
                                <Uplaodphoto />
                            </View>
                        </View>
                        } 
                    </View>

                    {/*Recently killed Corals */}
                    <View>
                        <View style = {{flexDirection : 'row', justifyContent: 'space-between'}}>
                        <View style = {{flexDirection : 'row'}}>
                        
                            <Text style = {styles.labelStyles}>Recently Killed Coral</Text>
                        <TouchableOpacity onPress={() => {
                        setOverlayText('do recently killed corals look like')
                        setoverlaysubtext('They lack a healthy color, and are sometimes covered in algae.')
                        setOverlayVisible(true)}}>
                            <Feather name= "help-circle" size={20} color={COLORS.darkGray2}  style= {{padding: 5,paddingVertical: 18,}}/>
                        </TouchableOpacity>
                        </View>
                            <Switch
                            trackColor={{ false: '#767577', true: COLORS.lightblue3 }}
                            thumbColor={killedcoralToggle ? COLORS.lightblue2 : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleRecentlykcoralsSwitch}
                            value={killedcoralToggle}
                            />
                        </View>

                        {killedcoralToggle && 
                        <View style = {{borderBottomColor: COLORS.lightGray1, borderBottomWidth: 1}}>
                            <View >
                            {/* <Text style = {{...styles.sublabelStyles, color: COLORS.black,}}></Text> */}
                                <Uplaodphoto />
                            </View>
                        </View>
                        } 
                    </View>

                    {/*Sedimentation */}
                    <View>
                        <View style = {{flexDirection : 'row', justifyContent: 'space-between'}}>
                        <View style = {{flexDirection : 'row'}}>
                        
                            <Text style = {styles.labelStyles}>Sedimentation</Text>
                        <TouchableOpacity onPress={() => {
                        setOverlayText('is Sedimentation')
                        setoverlaysubtext('Sedimentation is the accumulation of sediments, or dirt, on the reef which can kill corals. It can be caused by human activity or natural processes.')
                        setOverlayVisible(true)}}>
                            <Feather name= "help-circle" size={20} color={COLORS.darkGray2}  style= {{padding: 5,paddingVertical: 18,}}/>
                        </TouchableOpacity>
                        </View>
                            <Switch
                            trackColor={{ false: '#767577', true: COLORS.lightblue3 }}
                            thumbColor={sedimentationToggle ? COLORS.lightblue2 : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSedimenatationSwitch}
                            value={sedimentationToggle}
                            />
                        </View>

                        {sedimentationToggle && 
                        <View style = {{borderBottomColor: COLORS.lightGray1, borderBottomWidth: 1}}>
                            <View >
                            {/* <Text style = {{...styles.sublabelStyles, color: COLORS.black,}}></Text> */}
                                <Uplaodphoto />
                            </View>
                        </View>
                        } 
                    </View>

                    {/*Pollution */}
                    <View>
                        <View style = {{flexDirection : 'row', justifyContent: 'space-between'}}>
                            <Text style = {styles.labelStyles}>Pollutions</Text>
                            <Switch
                            trackColor={{ false: '#767577', true: COLORS.lightblue3 }}
                            thumbColor={pollutionToggle ? COLORS.lightblue2 : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={togglePolllutionSwitch}
                            value={pollutionToggle}
                            />
                        </View>

                        {pollutionToggle && 
                        <View>
                        <View style = {{borderBottomColor: COLORS.lightGray1, borderBottomWidth: 1, paddingLeft: 20}}>
                           
                            <View>
                                <View style={{flexDirection :'row', }}>
                                    <CheckBox
                                        value={PlasticChecked}
                                        onValueChange={setPlasticChecked}
                                        style={{alignSelf: 'center'}}
                                        />
                                    <Text style={{...styles.sublabelStyles, fontSize: 15, paddingVertical: 10, paddingHorizontal: 3}}>Plastic</Text>
                                </View>
                                <View style={{flexDirection :'row', }}>
                                    <CheckBox
                                        value={fishingGearChecked}
                                        onValueChange={setFishingGearChecked}
                                        style={{alignSelf: 'center'}}
                                        />
                                    <Text style={{...styles.sublabelStyles, fontSize: 15, paddingVertical: 10, paddingHorizontal: 3}}>Fishing Gear</Text>
                                </View>
                                <View style={{flexDirection :'row', marginBottom: 5}}>
                                    <CheckBox
                                        value={othersChecked}
                                        onValueChange={setotherChecked}
                                        style={{alignSelf: 'center'}}
                                        />
                                    <Text style={{...styles.sublabelStyles, fontSize: 15, paddingVertical: 10, paddingHorizontal: 3}}>Others</Text>
                                </View>
                                {othersChecked && 
                                <View>
                                    <TextInput
                                        style = {{backgroundColor: COLORS.lightGray2, padding: 10, marginRight: 10}}
                                        placeholder='Other Pollution...'
                                        label='Other Pollution'
                                        value={otherPollutions}
                                        underlineColor = {COLORS.blue}
                                        multiline
                                        theme={{colors: {primary: COLORS.blue}}}
                                        onChangeText={text => setOtherPoluutions(text)}
                                    />
                                </View>
                                }
                            </View>
                        </View>
                            <View >
                                <Uplaodphoto />
                            </View>
                        </View>
                        } 
                    </View>

                </View>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: COLORS.lightGray2,
        backgroundColor: COLORS.lightGray2,
        padding: 10,
        borderRadius: 6,
        marginVertical: 5,
    },
    inputStyle: {
        color: COLORS.black,
        fontFamily: 'LatoRegular',
        fontSize: 14, 
    },
    headersWrapper: {
        marginVertical: 20,

    },
    diveLogHeaders: {
        fontFamily: 'LatoBold',
        fontSize: 17,
        color: COLORS.black,
    },
    diveLogSubHeaders: {
        marginHorizontal: 5,
        marginVertical: 10,
        marginTop: 10,
        fontFamily: 'LatoBold',
        fontSize: 16,
        color: COLORS.black,
    },
    buttonWrapper: {
        flexDirection: 'row',
        backgroundColor: COLORS.lightGray2,
        borderColor : COLORS.lightGray1,
        borderWidth :3,
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderRadius: 10,
        margin: 2,
    },
    buttonTExt: {
        fontFamily: 'LatoBold',
        fontSize: 18,
        color: COLORS.blue,
        alignSelf: 'center',
        
    },
    overlayButtonWrapper: {
        //marginHorizontal:20, 
        marginTop:20,
        backgroundColor: colour.pink,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
    },
    overlayButtonTExt: {
        fontFamily: 'LatoBold',
        fontSize: 18,
        color: colour.white,
    },
    overlaysubtext: {
        fontFamily: "LatoRegular", 
        fontSize: 13, 
        textAlign:'center'
    },
    mftgray: {
        color: COLORS.darkGray2,
    },
    mftblack: {
        color: COLORS.black,
        fontWeight: 'bold'
    },
    slidertext: {
        marginHorizontal: 5,
        marginVertical: 10,
        marginTop: 10,
        fontFamily: 'LatoBold',
        fontSize: 16,
        color: COLORS.black,
        //textAlign: 'center',
    }, 
    labelStyles: {
        fontSize: 15,
        fontFamily: 'LatoBold',
        padding: 5,
        paddingLeft: 10, 
        paddingVertical: 18,
    },
    sublabelStyles :{ 
        fontSize: 14,
        fontFamily: 'LatoRegular',
        color: COLORS.darkGray,
        //paddingHorizontal: 5,
    },
    conditionButton: {
        width: 100,
        height: 75, 
        backgroundColor: COLORS.lightOrange2, 
        borderRadius: 20, 
        borderColor: COLORS.lightOrange2, 
        borderWidth: 2, 
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }
})

export default Reefhealth;
