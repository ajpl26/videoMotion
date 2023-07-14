
import { Box, Button, HStack, Heading, Input, Stack, VStack, Text} from "@chakra-ui/react";
import React from 'react'

import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>

    <Stack direction={["column", "row"]}>

        <VStack
        
        alignItems={"stretch"} w={"full"} px={"4"}>
            <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>
                Subscribe to get updates
            </Heading>

            <HStack
            borderBottom={"2px solid white"}
            >

                <Input 
                placeholder="Enter Email Here..."
                border={"none"}
                borderRadius={"none"} 
                outline={"none"} 
                focusBorderColor="none"
                />

                <Button
                p={"0"}
                colorScheme="teal"
                variant={"ghost"}
                borderRadius={"0 20px 20px 0"}
                >
                    <AiOutlineSend size={20}/>
                </Button>
            </HStack>

        </VStack>

        <VStack
        w={"full"}
        borderLeft={["none", "1px solid white"]}
        borderRight={["none", "1px solid white"]}
        >

            <Heading  textTransform={"uppercase"} textAlign={"center"}>
                Video motion
            </Heading>
            <Text>All right  received</Text>

        </VStack>

        <VStack w={"full"}>
        <Heading>
            Social Media
        </Heading>
        <Button variant={"link"} colorScheme={"white"}>
            <a target="blank" href="https://www.youtube.com/channel/UCi8ZL9HzwMhg8BWOREY51wQ">
                YouTube
            </a>
        </Button>

        

        <Button variant={"link"} colorScheme={"white"}>
            <a target="blank" href="https://www.instagram.com/__ajpl__">
                Instagram
            </a>
        </Button>

        <Button variant={"link"} colorScheme={"white"}>
            <a target="blank" href="https://github.com/ajpl26">
                GitHub
            </a>
        </Button>

        </VStack>
    

    </Stack>
 

  </Box>
}

export default Footer