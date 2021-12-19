import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';

import {AuthContext} from '../../components/auth/context'
import { COLORS, SIZES } from '../../assets/colors/theme';
import profile1 from '../../assets/images/profile.png';
import { auth } from '../../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage'

AntDesign.loadFont();

const Drawerscreen = props => { 
  const { signOt, user } = React.useContext(AuthContext);

    const handleSignOut =() => {
      auth
        .signOut()
        .then(() => {
          try{
            setTimeout(() => {
                AsyncStorage.removeItem('signedIn');
            }, 1000)
            
        }catch {
            console.log("Coudn't access async storage")
        } finally {
            signOt()
        }
        })
        .catch(error => alert(error.message))
    }
  
    return (
      <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
        <View 
          style={{flex:1,
          paddingHorizontal: SIZES.radius}}>
              {/* CLose */}
              <View
              style ={{
                  paddingTop: 15, 
                  alignItems: 'flex-start',
                  justifyContent: 'center', 
              }}>
                  <TouchableOpacity
                  style ={{
                      alignItems: 'center',
                      justifyContent: 'center',
                  }}
                  onPress= {() => props.navigation.dispatch(DrawerActions.closeDrawer())}>
                      <Feather name="x" size={30} color={COLORS.white} />
                  </TouchableOpacity>
              </View>
              {/* Profile */}
              <TouchableOpacity
              style ={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginTop: 35, 
                  marginBottom: 22,
              }}
              onPress={() => props.navigation.navigate('ProfileScreen')}>
                  <Image
                  source = {profile1}
                  style ={{width: 50,
                      height: 50, 
                      borderRadius: 14,}}/>
                  <View style = {{marginLeft: SIZES.radius}}>
                      <Text style ={{color: COLORS.white, fontFamily: 'PoppinsBold', fontSize: 16}}>Jon Smith</Text>
                      <Text style ={{color: COLORS.white, fontFamily: 'PoppinsRegular', fontSize: 13}}>{auth.currentUser?.email}</Text>
                  </View>
              </TouchableOpacity>
                    {/*Drawer items */}
          <View style = {{marginTop: 10}}>
            <DrawerItem
              label="Dashboard"
              labelStyle={styles.drawerLabel}
              onPress={() => props.navigation.navigate('Dashboard')}
              icon={() => <AntDesign name="home" color="white" size={19} />}
            />
            <DrawerItem
              label="Photos"
              labelStyle={styles.drawerLabel}
              onPress={() => props.navigation.navigate('Photos')}
              icon={() => <Feather name="image" color="white" size={19} />}
            />
            <DrawerItem
              label="Settings"
              labelStyle={styles.drawerLabel}
              onPress={() => props.navigation.navigate('Settings')}
              icon={() => <AntDesign name="setting" color="white" size={19} />}
            />
            <DrawerItem
              label="About"
              labelStyle={styles.drawerLabel}
              onPress={() => props.navigation.navigate('About')}
              icon={() => <Feather name="external-link" color="white" size={19} />}
            />
          </View>
        </View>
        {/*Logout */}
        <View 
        style={{
          marginBottom: 50,
        }} >
          <DrawerItem
            label="Logout"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            icon={() => <AntDesign name="logout" color="white" size={16} />}
            onPress={() => handleSignOut()}
          />
        </View>
      </DrawerContentScrollView>
    );
};


const styles = StyleSheet.create({
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'white'  },
  drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
  drawerLabel: { 
    color: 'white',
    marginTop: 2, 
    marginLeft: -16, 
    fontFamily: "PoppinsRegular",
    fontSize: 16,
  },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
})


export default Drawerscreen;
