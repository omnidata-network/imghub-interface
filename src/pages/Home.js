import React from 'react';
import Introduction from "../components/sections/Introduction";
import Banner from "../assets/banner-4.png";
import Header from "../components/sections/Header";
import Partners from '../components/sections/Partners';
import WhyChoose from '../components/sections/WhyChoose'
import Footer from "../components/sections/Footer";
import { Flex, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex direction="column" align="center" m="0 auto">
      <Header />
      <Box bgGradient="linear(to-r, blue.100, blue.500)">        
        <Introduction
          title="Img8"
          desc="Nowadays, more and more web3 applications are retrieving images from IPFS and Filecoin, but most of them do not need to show the original images, for example, the NFT marketplaces, Metaverse, and dApps just needed to show thumbnails or compressed and resized images to fit into the responsive UI elements, but there is not a easy and straightforward way to do this natively in the IPFS/Filecoin ecosystem."
          image={Banner}
          ctaText="Get Started"
          ctaLink="/preview"
        />
      </Box>
      
      <WhyChoose />
      <Partners />
      <Footer />
    </Flex>

  )
}

export default Home

