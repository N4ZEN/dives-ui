import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';

import profile from '../../assets/images/profile.png' ;
import menu from '../../assets/icons/menu.png';

const Profileimage = () => {
    return (
        <SafeAreaView>
            <View style={styles.menuWrapper}>
                {/* <TouchableOpacity 
                style = {{paddingHorizontal: 15, paddingBottom: 15, paddingTop: 3}} 
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                >
                    <Image source = {menu} 
                    style = {{
                        height: 40, 
                        width: 40,
                        borderRadius: 2,
                        resizeMode: 'contain'
                    }}/>
                </TouchableOpacity> */}
                 <Image source ={profile}
                style ={{width: 65,
                    height: 65, 
                    borderRadius: 14,}}/>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    menuWrapper: {
        marginRight: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
})

export default Profileimage;
