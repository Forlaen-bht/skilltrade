import { Image, ImageBackground, Platform, StyleSheet, View } from 'react-native';

import { useSession } from '../../ctx';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { LinearGradient } from 'expo-linear-gradient';

// import { Image } from '@/components/ui/image';

export default function Index() {
  const { signOut } = useSession();
  return (
    <View style={{margin: 8}}>

        <View>
            <Image
                source={{ 
                    uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3569&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    }}
                style={{
                    height: 500,
                    borderRadius: 50,
                }}
            />

                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.2)', ]}
                    style={{padding: 20,
                        position: 'absolute',
                        bottom: 0,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        width: '100%',}}
                >
                    <View style={{width: "80%"}}>
                        <Text 
                            style={{
                                color: 'white',
                                fontSize: 22,
                                fontWeight: 'bold',
                                marginBottom: 8
                            }}
                        >
                            David Attenborough 
                        </Text>
                        <Text 
                            style={{
                                color: 'white',
                                fontSize: 14,
                            }}
                        >
                            Skilled artisan who enjoys working on projects that fuel my creative side.
                        </Text>
                    </View>
                </LinearGradient>
            </View>

        <View style={{marginTop: 20}}>
            <Text bold>Skills</Text>
            <View style={{flexDirection: 'row', alignContent: 'space-around', flexWrap: 'wrap',}}>
                <Box style={{borderColor: '#ddd', borderWidth: 1, borderRadius: 50, padding: 8, margin: 4}}>
                    <Text>Woodworking</Text>
                </Box>
                <Box style={{borderColor: '#ddd', borderWidth: 1, borderRadius: 50, padding: 8, margin: 4}}>
                    <Text>Tattoo</Text>
                </Box>
                <Box style={{borderColor: '#ddd', borderWidth: 1, borderRadius: 50, padding: 8, margin: 4}}>
                    <Text>Painting</Text>
                </Box>
                <Box style={{borderColor: '#ddd', borderWidth: 1, borderRadius: 50, padding: 8, margin: 4}}>
                    <Text>Gardening</Text>
                </Box>
                <Box style={{borderColor: '#ddd', borderWidth: 1, borderRadius: 50, padding: 8, margin: 4}}>
                    <Text>Programing</Text>
                </Box>
                <Box style={{borderColor: '#ddd', borderWidth: 1, borderRadius: 50, padding: 8, margin: 4}}>
                    <Text>Cooking</Text>
                </Box>
            </View>
        </View>

        <View style={{marginTop: 20}}>
            <Text bold>Interested In</Text>
            <View style={{flexDirection: 'row', alignContent: 'space-around', flexWrap: 'wrap',}}>
                <Box style={{borderColor: '#ddd', borderWidth: 1, borderRadius: 50, padding: 8, margin: 4}}>
                    <Text>Electrical Work</Text>
                </Box>
                <Box style={{borderColor: '#ddd', borderWidth: 1, borderRadius: 50, padding: 8, margin: 4}}>
                    <Text>Home Repair</Text>
                </Box>
                <Box style={{borderColor: '#ddd', borderWidth: 1, borderRadius: 50, padding: 8, margin: 4}}>
                    <Text>Language</Text>
                </Box>
                <Box style={{borderColor: '#ddd', borderWidth: 1, borderRadius: 50, padding: 8, margin: 4}}>
                    <Text>Training</Text>
                </Box>
            </View>
        </View>
        
    </View>
  );
}
