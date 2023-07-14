import { Box , Container, Heading, Image, Stack,Text} from '@chakra-ui/react'
import React from 'react'

import { Carousel } from "react-responsive-carousel";
import  "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"
import { transform } from 'framer-motion';

const headingOptions = {
  pos : "absolute",
  left : "50%",
  top: "50%",
  transform : "translate(-50%,-50%)",
  textTransform: "uppercase",
  p :"4", 
  size : "4xl",
}


const Home = () => {
  return <Box>

    <MyCarousel />

    <Container
    maxW={'container.xl'}
    minH={'100vh'} 
    p={"16"}
    >

      <Heading
      textTransform={"uppercase"}
      py={"2"}
      w={"fit-content"}
      borderBottom={"2px solid"}
      m={"auto"}
      >
        Service
      </Heading>


      <Stack
      h={"full"}
      p={"4"}
      alignItems={"center"}
      direction={['column','row']}
      >

      <Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"} />

      <Text
      letterSpacing={"widest"}
      lineHeight={"190%"}
      p={["4", "16"]}
      textAlign={"center"}
      >
      Are you tired of using generic video players that lack essential features and fail to provide a seamless viewing experience? Look no further! Introducing Video Motion, the cutting-edge video player app designed to revolutionize the way you watch and interact with your favorite videos. With its advanced functionality and intuitive interface, Video Motion is set to become your go-to app for all your video playback needs.
      Video Motion ensures smooth and uninterrupted playback of your videos, regardless of the file format or resolution. From high-definition movies to viral video clips, this app handles them all flawlessly, allowing you to enjoy your content without any buffering or lag.
      </Text>

      </Stack>

    </Container>

  </Box>
  
};


const MyCarousel = () =>{
    return <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box w="full" h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={'white'} borderRadius={"20px"} {...headingOptions}>
                Watch the Future
            </Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={"whiteAlpha.600"} color={'black'} borderRadius={"20px"}{...headingOptions}>
                Future is gaming
            </Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={"whiteAlpha.600"} color={'black'} borderRadius={"20px"}{...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={"whiteAlpha.600"} color={'black'} borderRadius={"20px"}{...headingOptions}>
                Night life is cool
            </Heading>
        </Box>
        

    </Carousel>
    
}


export default Home;