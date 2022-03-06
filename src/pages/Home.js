import React from 'react';
import Introduction from "../components/sections/Introduction";
import Banner from "../assets/banner-4.png";
import Header from "../components/sections/Header";
import Partners from '../components/sections/Partners';
import WhyChoose from '../components/sections/WhyChoose'
import Footer from "../components/sections/Footer";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (    
    <>    
      <Header />
      <Box bgGradient="linear(to-r, blue.100, blue.500)">            
        <Introduction
          title="Img8 Protocol"
          desc="A decentralized image processing and optimization protocol built for web3 builders and creators to easily retrieve responsive, resized, and optimized photos from decentralized storage networks with faster-loaded speeds."
          image={Banner}
          ctaText="Get Started"
          ctaLink="/preview"
        />
      </Box>      
      <WhyChoose />
      <Partners />
      <Footer />
      </>
    

  )
}

export default Home

