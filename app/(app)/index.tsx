import { View } from 'react-native';

import { useSession } from '../../ctx';
import { Input, InputField } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from '@/components/ui/image';
import Pill from '@/components/pill';
import { useState } from 'react';
import { ChevronDownIcon, ChevronsRightIcon, ChevronUpIcon } from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionContentText, AccordionHeader, AccordionIcon, AccordionItem, AccordionTitleText, AccordionTrigger } from '@/components/ui/accordion';
import { Button, ButtonText } from '@/components/ui/button';

export default function Index() {
 

  const arr = [
    {
        title: 'Need Help with Oil Change', 
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        image: 'https://plus.unsplash.com/premium_photo-1710695570399-7d6e3725ba23?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXRzfGVufDB8fDB8fHww',
        location: 'Portland',
        tags: ['Automotive']
    },
    {
        title: 'Window Install Project', 
        body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        image: 'https://images.unsplash.com/photo-1535579710123-3c0f261c474e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXRzfGVufDB8fDB8fHww',
        location: 'Vancouver',
        tags: ['Carpentry', 'Home Repair']
    },
    {
        title: 'Tattoo Exchange', 
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://plus.unsplash.com/premium_photo-1725655711581-0270f94e527e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXRzfGVufDB8fDB8fHww',
        location: 'Milwaukie',
        tags: ['Art', 'Tattoo', 'Creative']
    },
    {
        title: 'Web Design', 
        body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum .',
        image: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Portland',
        tags: ['Creative', 'Technology']
    },
    {
        title: 'Deck Construction', 
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        image: 'https://images.unsplash.com/photo-1639164543505-01e8d1332f0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D',
        location: 'Beaverton',
        tags: ['Woodworking', 'Construction']
    },
    {
        title: 'Pet Sitting', 
        body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1594751684241-bcef815d5a57?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Gresham',
        tags: ['Pet', 'Animal Care']
    },
    {
        title: 'Meal Prep', 
        body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        image: 'https://images.unsplash.com/photo-1484517186945-df8151a1a871?q=80&w=3593&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Milwaukie',
        tags: ['Cooking']
    },
    {
        title: 'Accounting', 
        body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1594185230805-68f37369b450?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxwb3J0cmFpdHN8ZW58MHx8MHx8fDA%3D',
        location: 'Tualatin',
        tags: ['Business', 'Accounting']
    },
    {
        title: 'Need Plumber', 
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://images.unsplash.com/photo-1572631382901-cf1a0a6087cb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D',
        location: 'Portland',
        tags: ['Plumbing']
    },
    {
        title: 'Interior Design new Apartment', 
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        image: 'https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Vancouver',
        tags: ['Design', 'Creative']
    },
  ]

  const [inputValue, setInputValue] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
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
        <InputField value={inputValue} onChangeText={(text) => setInputValue(text)} placeholder="Search Skills..." />
      </Input>

      <Accordion size="md" variant="unfilled" type="single" isCollapsible={true} isDisabled={false}>
        <AccordionItem value="a">
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }) => {
                return (
                  <>
                   <Text size="lg" style={{color: '#0275d8'}}>Advanced Search</Text> 
                    {/* <AccordionTitleText style={{color: '#0275d8'}}>
                        Advanced Search
                    </AccordionTitleText> */}
                    {isExpanded ? (
                      <AccordionIcon as={ChevronUpIcon}/>
                    ) : (
                      <AccordionIcon as={ChevronDownIcon} />
                    )}
                  </>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            {/* <AccordionContentText> */}
              {/* Here Add input for skills offered, skills needed, and location */}

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
                <InputField placeholder="Skills Needed (separated by comma)" />
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
                <InputField placeholder="Location" />
            </Input>

            <Button 
                size="xl" 
                className='w-full'
                // variant="outline" 
                action="primary"  
                style={{alignSelf: 'flex-start', backgroundColor: '#0275d8', borderRadius: 24, margin: 4}}
            >
                <ButtonText>Search</ButtonText>
            </Button>  

            {/* <Input
                variant="rounded"
                size="md"
                style={{
                margin: 8
                }}
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
            >
                <InputField value={inputValue} onChangeText={(text) => setInputValue(text)} placeholder="Search Skills..." />
            </Input> */}

            {/* </AccordionContentText> */}
          </AccordionContent>
        </AccordionItem>

        </Accordion>

        <ScrollView style={{width: "100%"}}>
    { arr.map(item => {
      return (
        <Card key={item.title} size="lg" variant="outline" className="m-3" >
            <View style={{flex: 1, flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image size='md' 
                        source={{
                            uri: item.image
                        }}
                        borderRadius={50}
                        alt="image"
                    />
                    <Text size="xs" style={{color: '#0275d8'}}>{item.location}</Text>
                </View>

                
                <View style={{marginLeft: 12, flex: 1,}}>
                    <Heading size="md" className="mb-1">
                    {item.title}
                    </Heading>
                    <Text size="md" style={{flex: 1, flexWrap: 'wrap'}}>{item.body}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {item.tags.map(tag => {
                    return <Pill key={tag} text={tag}/>
                })}
                <Pill text="test"/>
                
            </View>
      </Card>
      )
    })}
    </ScrollView>

  
    </View>
  );
}
