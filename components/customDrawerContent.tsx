import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useSession } from '../ctx';


export default function CustomDrawerContent(props:any) {

    const {bottom} = useSafeAreaInsets();

    const { signOut } = useSession();


    const closeDrawer = ()=>{
        signOut();
    }
  return (
    <View
        style={{flex: 1}}
    >
      <DrawerContentScrollView {...props} scrollEnabled={false}>
        <View style={{padding: 20}}>
            {/* <Image style={{height: 35}} resizeMode='contain' source={require('../assets/images/logo.png')} /> */}
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Pressable onPress={closeDrawer} style={{padding: 20, paddingBottom: bottom+10}}>
      <Text>
        Sign Out
      </Text>
      </Pressable>
    </View>
  )
}