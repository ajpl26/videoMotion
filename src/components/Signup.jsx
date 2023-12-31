import { Button, Container, Heading, Input, VStack , Text, Avatar} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container
    maxW={"container.xl"}
    h={"100vh"}
    >

        <form >
            <VStack alignItems={"stretch"}
             spacing={"8"} 
             w={["full" , "96"]}  
             m={"auto"}
             my={"16"}
             >

            <Heading >VIDEO MOTION</Heading>

            <Avatar  alignSelf={"center"}   boxSize={'32'}/>
            
            <Input  placeholder={'Name'} type={'text'}  required focusBorderColor='teal.500' />


            <Input  placeholder={'Email'} type={'email'}  required focusBorderColor='teal.500' />

            <Input  placeholder={'Password'} type={'Password'}  required focusBorderColor='teal.500' />

            <Button colorScheme='teal' type='submit' >Sign Up</Button>

            <Text textAlign={'right'}>Already Signed Up? {"       "} 

            <Button variant={"link"}  colorScheme='teal' >
                <Link to={"/login"}> 
                Log In
                </Link>
            </Button> 
            </Text>
            </VStack>
        </form>

    </Container>
  )
}

export default Signup