import { Slot } from 'expo-router';
import "@/my-expo-app/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SessionProvider } from '../ctx';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <GluestackUIProvider mode="light"><SessionProvider>
        <Slot />
      </SessionProvider></GluestackUIProvider>
  );
}

