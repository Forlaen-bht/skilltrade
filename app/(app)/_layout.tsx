import { Pressable, Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useSession } from '../../ctx';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawerContent from '@/components/customDrawerContent';


export default function AppLayout() {
  const { session, isLoading } = useSession();

 
  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  // This layout can be deferred because it's not the root layout.
//   return <Stack />;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
       <Drawer
         drawerContent={CustomDrawerContent}
       >
         <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Search',
          }}
        />
        <Drawer.Screen
          name="profile" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User Profile',
            title: 'Profile',
          }}
        />
      <Drawer.Screen
          name="accountDetails" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Account Detals',
            title: 'Account Details',
          }}
        />
        <Text>
        Hello
      </Text>
      </Drawer>

    
    </GestureHandlerRootView>
  )
}
