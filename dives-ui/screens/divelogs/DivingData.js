import React from 'react';
import {View, StyleSheet, Platform, TextInput, Pressable, Text} from 'react-native';
import {ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather} from '@expo/vector-icons';
import Entypo from 'react-native-vector-icons/Entypo';
import DateTimePicker from '@react-native-community/datetimepicker';


import { COLORS, colour } from '../../assets/colors/theme';
import FormInput from '../../components/divelogs/FormInput';


// export function isEnabledSubmit() {
//     return textDate != "" && textTime != "" && textTime2 != "" && locationText === "Add Dive Site"
// }

const Divingdata = () => {
     {/*datetime states */}
     const [date, setDate] = React.useState(new Date())
     const [mode, setMode] = React.useState('date')
     const [show, setShow] = React.useState(false)
     const [textDate, setTextDate] = React.useState('')
     const [textTime, setTextTime] = React.useState('')
     const [submit, setsubmit] = React.useState(false)
 
     const [date2, setDate2] = React.useState(new Date())
     const [mode2, setMode2] = React.useState('date')
     const [show2, setShow2] = React.useState(false)
     const [textDate2, setTextDate2] = React.useState('')
     const [textTime2, setTextTime2] = React.useState('')
 
     const [startTimeHrs, setstartTimeHrs] = React.useState('')
     const [endTimeHrs, setEndTimeHrs] = React.useState('')
     const [startTimeMins, setstartTimeMins] = React.useState('')
     const [endTimeMins, setEndTimeMins] = React.useState('')
    
     const [selectedTime, setSelectedTime] = React.useState('')
     const [selectedTime2, setSelectedTime2] = React.useState('')
     const [duration, setduration] = React.useState('')
     
     const [dateError, setDateError] = React.useState('')
 {/*Location states */}
     const [locationText, setLocationText] = React.useState('Add Dive Site')

 {/*datetime functions */}
     
     const onChange2 = (event, selectedDate) => {
         const currentDate2 = selectedDate || date2;
         setShow2(Platform.OS  === 'ios' ? true: false);
         setDate2(currentDate2);
 
         let tempDate2 =new Date(currentDate2);
         let fDate2 = tempDate2.getDate() + '/' +tempDate2.getMonth() + '/' + tempDate2.getFullYear();
         let fTime2 = tempDate2.getHours() + ' : ' + tempDate2.getMinutes();
 
         let dateinhrs2 = tempDate2.getHours() 
         let dateinmins2 = tempDate2.getMinutes()
         convertTime2(dateinhrs2, dateinmins2)
 
         setTextDate2(fDate2)
         setTextTime2(fTime2)
 
         console.log('Second Date' + fDate2+ '{' + fTime2 + '}')
 
         setEndTimeHrs(tempDate2.getHours());
         setEndTimeMins(tempDate2.getMinutes());
 
     } 
     
     const onChange = (event, selectedDate) => {
         const currentDate = selectedDate || date;
         setShow(Platform.OS  === 'ios' ? true: false);
         setDate(currentDate);
 
         let tempDate =new Date(currentDate);
         let fDate = tempDate.getDate() + '/' +tempDate.getMonth() + '/' + tempDate.getFullYear();
         setTextDate(fDate)
 
         let dateinhrs = tempDate.getHours() 
         let dateinmins = tempDate.getMinutes()
         convertTime(dateinhrs, dateinmins)
 
         let fTime = tempDate.getHours() + ' : ' + tempDate.getMinutes();
              
         setTextTime(fTime)
         console.log('First Date' + fDate+ '{' + fTime + '}')
         
         setstartTimeHrs(tempDate.getHours());
         setstartTimeMins(tempDate.getMinutes());
     }
     
     function convertTime(hour, minute) {
         let am_pm = 'AM';
         if(hour>11){
           am_pm = 'PM';
           if(hour>12){
             hour = hour - 12;
           }
         }       
         if(hour == 0){
           hour = 12;
         }
           const selectedTimeCov = hour + ' : ' + minute + '  ' + am_pm ;
           setSelectedTime(selectedTimeCov)       
      }
 
      function convertTime2(hour, minute) {
         let am_pm = 'AM';
         if(hour>11){
           am_pm = 'PM';
           if(hour>12){
             hour = hour - 12;
           }
         }       
         if(hour == 0){
           hour = 12;
         }
           const selectedTimeCov2 = hour + ' : ' + minute + '  ' + am_pm ;
           setSelectedTime2(selectedTimeCov2)       
      }
 
     const showMode = (currentMode) => {
         setShow(true);
         setMode(currentMode);
     }
 
     const showMode2 = (currentMode2) => {
         setShow2(true);
         setMode2(currentMode2);
     }
 
    
 
     React.useEffect(() => {
         console.log(startTimeHrs+ ':' +startTimeMins+ '\n' + endTimeHrs+ ':' +endTimeMins )
         let duramin = ((endTimeHrs - startTimeHrs)* 60 )+ (endTimeMins - startTimeMins)
         let tihrs = Math.floor(duramin/60);
         let timins = duramin % 60;
         setduration( tihrs + ' hrs : '+ timins + ' mins');
     }, [startTimeMins, startTimeHrs, endTimeMins, endTimeHrs])


    return (
        <View>
            <View>
                {/*Date */}
                <Pressable onPress={() => showMode('date')}>
                    <FormInput 
                        style = {styles.input}
                        inputStyle = {{color: COLORS.black}}
                        label = "Date *"
                        labelStyle ={{}}
                        placeholder= { "Date"}
                        value = {textDate}
                        editable = {false}
                        errorMsg= {dateError}
                        appendComponent =
                        {
                            <View style = {{justifyContent: 'center'}}>
                                    <Feather name ="calendar" color= {COLORS.gray} size = {20} style = {{paddingVertical: 15,}}/>
                            </View>
                        } 
                    />
                </Pressable>

                {/*Time */}
                <View style = {{flexDirection: 'row', paddingVertical: 5, }}>
                    <View style = {{flexGrow: 1, paddingRight: 5}}>
                        <Pressable onPress={() => showMode('time')}>
                            <FormInput 
                                style = {styles.input}
                                inputStyle = {{color: COLORS.black}}
                                label = "Start Time *"
                                labelStyle ={{}}
                                placeholder= { "Start Time"}
                                value = {selectedTime}
                                editable = {false}
                                errorMsg= {dateError}
                                appendComponent =
                                {
                                    <View style = {{justifyContent: 'center'}}>
                                        <Feather name ="clock" color= {COLORS.gray} size = {20} style = {{paddingVertical: 15,}}/>
                                    </View>
                                } 
                            />
                        </Pressable>
                    </View>
                    <View style = {{flexGrow: 1, paddingLeft: 5}}>
                        <Pressable onPress={() => showMode2('time')}>
                            <FormInput 
                                style = {styles.input}
                                inputStyle = {styles.inputStyle}
                                label = "End Time *"
                                placeholder= { "End Time"}
                                value = {selectedTime2}
                                editable = {false}
                                errorMsg= {dateError}
                                appendComponent =
                                {
                                    <View style = {{justifyContent: 'center'}}>
                                        <Feather name ="clock" color= {COLORS.gray} size = {20} 
                                        style = {{paddingVertical: 15,}}/>
                                    </View>
                                } 
                            />
                        </Pressable>
                    </View>
                </View>

                {/*Duration Text */}
                <View>
                    <Text style ={{fontFamily: 'LatoRegular', fontSize: 14, 
                    color: COLORS.darkGray2, paddingLeft: 10}}>Duration: {duration}</Text>
                </View>

                {/*Location */}
                <View style = {{paddingBottom: 10}}>
                    <Text style = {styles.diveLogSubHeaders}>Location * </Text>
                    <TouchableOpacity style = {styles.buttonWrapper} 
                        onPress={() => alert("Maps")}>
                        <Entypo name ="location-pin" color= {COLORS.darkGray2} size = {28} 
                            style = {{paddingVertical: 1,  paddingHorizontal: 10,}}/>
                        <Text style = {{...styles.buttonTExt, fontSize: 17}}>{locationText}</Text>
                        <Feather name ="chevron-right" color= {COLORS.darkGray2} size = {25} 
                            style = {{paddingVertical: 2, paddingHorizontal: 10,}}/>
                    </TouchableOpacity>
                </View>
            </View>
            
                {show && (
                    <DateTimePicker 
                        testID= 'dateTimePicker'
                        value = {date}
                        mode = {mode}
                        is24Hour = {false}
                        display = 'default'
                        onChange= {onChange} 
                    />
                )}

                {show2 && (
                    <DateTimePicker 
                        testID= 'dateTimePicker2'
                        value = {date2}
                        mode = {mode2}
                        is24Hour = {false}
                        display = 'default'
                        onChange = {onChange2} 
                        maximumDate = {date}
                    />
                )}
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
        paddingVertical: 8,
        borderRadius: 10,
        margin: 2,
    },
    submitbuttonWrapper: {
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderRadius: 10,
        margin: 2,
        backgroundColor: COLORS.lightblue2,

    },
    submitbuttonTExt: {
        fontFamily: 'LatoBold',
        fontSize: 18,
        color: COLORS.white,
        alignSelf: 'center',
        padding: 5
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
        fontSize: 18,
        fontFamily: 'LatoRegular',
        padding: 5,
        paddingLeft: 10, 
        paddingVertical: 25,
        textTransform: 'capitalize',
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

export default Divingdata;
