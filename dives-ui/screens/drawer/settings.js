import React from 'react';
import {View, StyleSheet, Text, Pressable, Switch} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { DrawerActions } from '@react-navigation/native';

import { COLORS, colour } from '../../assets/colors/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Settings = ({navigation}) => {
  const [notis, setNotis] = React.useState(false)
  const [appNotis, setAppNotis] = React.useState(false)

  const appNotisToggleSwitch = () => setAppNotis(previousState => !previousState)
  const notisToggleSwitch = () => setNotis(previousState => !previousState)

  return (
    <View style = {{flex: 1, padding: 10, backgroundColor: COLORS.white}}>
      <View>
      <Pressable 
      style= {({pressed}) => [
        styles.backIcon,
        {backgroundColor: pressed? COLORS.lightGray1 : null},
        {borderRadius: pressed? 20 : null}
      ]} 
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}      
      >
        <Entypo name='chevron-left' size={32} color={colour.darkGray} />
      </Pressable>
      </View >
      <View style = {{marginTop: 25,}}>
        <Text style={styles.Header}>Settings</Text>
      </View>

      {/*Account */}
      <View style= {{marginBottom: 10, marginTop: 5,}}>
        <View style = {{flexDirection: 'row', borderBottomColor: COLORS.darkGray1, borderBottomWidth: 0.5, marginTop: 12,}}>
          <Feather name="user" size = {28} color= {colour.black} style = {{paddingHorizontal: 10,paddingTop: 4}}/>
          <Text style = {styles.subHeader}>Account</Text>
        </View>
        <View >
          <Pressable
          style= {({pressed}) => [
            {margin:2,},
            {backgroundColor: pressed? COLORS.lightGray2 : null},
            {borderRadius: pressed? 20 : null}
          ]}
          onPress={() => navigation.navigate('ProfileScreen')} 
          >
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', padding: 10,}}>
              <Text style = {styles.options}>Edit Profile</Text>
              <Entypo name='chevron-right' size={22} color={COLORS.darkGray3} />
            </View>
          </Pressable>
          <Pressable
          style= {({pressed}) => [
            {margin:2,},
            {backgroundColor: pressed? COLORS.lightGray2 : null},
            {borderRadius: pressed? 20 : null}
          ]} 
          >
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', padding: 10,}}>
              <Text style = {styles.options}>Change Password</Text>
              <Entypo name='chevron-right' size={22} color={COLORS.darkGray3} />
            </View>
          </Pressable>
          <Pressable
          style= {({pressed}) => [
            {margin:2,},
            {backgroundColor: pressed? COLORS.lightGray2 : null},
            {borderRadius: pressed? 20 : null}
          ]} 
          > 
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', padding: 10,}}>
              <Text style = {styles.options}>Privacy</Text>
              <Entypo name='chevron-right' size={22} color={COLORS.darkGray3} />
            </View>
          </Pressable>
        </View>
      </View>



      {/*Notifications */}
      <View style= {{marginBottom: 10,marginTop: 10,}}>
        <View style = {{flexDirection: 'row', borderBottomColor: COLORS.darkGray1, borderBottomWidth: 0.5, marginTop: 12,}}>
          <Feather name="bell" size = {28} color= {colour.black} style = {{paddingHorizontal: 10,paddingTop: 6}}/>
          <Text style = {styles.subHeader}>Notification</Text>
        </View> 
        <View >
        
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', padding: 10,}}>
              <Text style = {{...styles.options, paddingTop: 20}}>App Notifications</Text>
              <Switch
                trackColor={{ false: '#767577', true:COLORS.lightGray1 }}
                thumbColor={notis ? COLORS.lightblue3 : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={notisToggleSwitch}
                value={notis}
                />
            </View>
        </View>
      </View>


      {/*More */}
      <View style= {{marginBottom: 10, marginTop: 12,}}>
        <View style = {{flexDirection: 'row', borderBottomColor: COLORS.darkGray1, borderBottomWidth: 0.5, marginTop: 12,}}>
          <Feather name="plus" size = {28} color= {colour.black} style = {{paddingHorizontal: 10,paddingTop: 6}}/>
          <Text style = {styles.subHeader}>More</Text>
        </View>
        <View >
          <Pressable
          style= {({pressed}) => [
            {margin:2,},
            {backgroundColor: pressed? COLORS.lightGray2 : null},
            {borderRadius: pressed? 20 : null}
          ]} 
          >
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', padding: 10,}}>
              <Text style = {styles.options}>Language</Text>
              <Entypo name='chevron-right' size={22} color={COLORS.darkGray3} />
            </View>
          </Pressable>
          <Pressable
          style= {({pressed}) => [
            {margin:2,},
            {backgroundColor: pressed? COLORS.lightGray2 : null},
            {borderRadius: pressed? 20 : null}
          ]} 
          >
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', padding: 10,}}>
              <Text style = {styles.options}>Country</Text>
              <Entypo name='chevron-right' size={22} color={COLORS.darkGray3} />
            </View>
          </Pressable>
        </View>
      </View>


          {/*Logout */}
          <TouchableOpacity >
          <View style = {{flexDirection: 'row', justifyContent: 'center', paddingTop: 30,}}>
            <Feather name="log-out" color={COLORS.darkGray2} size={24} />
            <Text style = {{...styles.options, color: COLORS.darkGray3, paddingTop: 3,}}>  LOG OUT</Text>
          </View>
          </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    marginTop:48,
    marginLeft: 1,
    width: 35,
    height:37
  },
  Header: {
    marginHorizontal: 10,
    fontFamily: 'LatoBold',
    fontSize:28,
  },
  subHeader: {
    fontFamily: 'LatoBold',
    fontSize:18,
    padding: 12,
  },
  options: {
    fontFamily: 'LatoBold',
    fontSize:16,
    color: COLORS.darkGray2,
    //padding: 12,
  },
  icon: {
    color: COLORS.darkGray2
  }
})

export default Settings;





