import { router } from 'expo-router';
import { View } from 'react-native';
import React from 'react';

import { useSession } from '../ctx';
import { Input, InputField } from '@/components/ui/input';
import { Button, ButtonText } from '@/components/ui/button';


export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>    
      <Input
        variant="rounded"
        size="xl"
        style={{
          margin: 8,
        }}
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Username" />
      </Input>

      <Input
        variant="rounded"
        size="xl"
        style={{
          margin: 8
        }}
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField         
        type="password"
        placeholder="Password" />
      </Input>

      <Button  
        size="xl" 
        variant="solid" 
        action="primary"  
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/');
        }}
      >
        <ButtonText>Sign In</ButtonText>
      </Button>
    </View>
  );
}
