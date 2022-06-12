import React, { useState, useEffect, useCallback } from 'react';
import {
  Flex,
  Center,
  Image,
  Heading,
  FormControl,
  FormLabel,
  SimpleGrid,
  Box,
  Input,
  InputGroup,
  Button,
  ButtonGroup,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  useBoolean,
  Spinner
} from '@chakra-ui/react';
import { Checkbox } from "@chakra-ui/react"
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import Steps from '../components/sections/Steps'
import RetrieveBackgroundImg from '../assets/bg-line.svg'
import PreviewImgBackground from '../assets/transparent-bg.png'



const Preview = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [cid, setCid] = useState('QmRUheHMVX4qZ4UkWAmxrNREHDtTyP5GjctnDRzQTMKdxE');
  const [w, setW] = useState('500');
  const [h, setH] = useState('500');
  const imgAddress = React.createRef();
  const copy = async () => {
    await navigator.clipboard.writeText(imgAddress.current.value);
  }
  const [isAvatar, setIsAvatar] = useBoolean();
  const [isFlip, setIsFlip] = useBoolean();
  const [isFlop, setIsFlop] = useBoolean();
  const [imgLoaded, setImgLoaded] = useState(false);
  const imageOnLoad = useCallback(() => {
    setImgLoaded(true);
  }, [])


  useEffect(() => {
    if (!cid) {
      setImgUrl('');
      return
    }
    const url = new URL(`https://gateway.omnidata.xyz/ipfs/${cid}`);
    let params = url.searchParams;

    if (h && h.trim().length > 0) {
      params.set('h', h);
    }
    if (w && w.trim().length > 0) {
      params.set('w', w);
    }
    if (isFlip) {
      params.set('flip', 'true');
    }
    if (isFlop) {
      params.set('flop', 'true');
    }
    if (cid) {
      setImgUrl(url);
    }
    if (isAvatar) {
      params.set('t', 'avatar');
      params.delete('h');
      params.delete('flip');
      params.delete('flop');
    }
    setImgLoaded(false);
  }, [cid, w, h, isFlip, isFlop, isAvatar])


  return (
    <>
      <Flex direction='column' align='center' m='0 auto'>
        <Header />
      </Flex>
      <Steps />
      <Box bgImage={RetrieveBackgroundImg} bgSize='cover'>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          spacing='8'
          pt='50'
          textAlign='left'
          p={['10', '10', '20', '20']}
          maxW='1600'
          m='0 auto'
        >
          <Box color='white'>
            <Heading
              as='h1'
              fontSize='3xl'
              fontWeight='bold'
              lineHeight='2'
              color='white'
            >
              Retrieve My Image
            </Heading>
            <Text fontSize='md' my='5' color='white'>You can serve your images at the right dimensions and the best image format for each browser just by using the IPFS CID.</Text>
            <FormControl mt='10'>
              <FormLabel color='white'>IPFS CID:</FormLabel>
              <Input boxShadow='md' bg='transparent' color='white' value={cid} onChange={(event) => setCid(event.target.value)} />
            </FormControl>
            <HStack spacing='10' mt='5'>
              <FormControl >
                <FormLabel color='white'>Image Width:</FormLabel>
                <NumberInput defaultValue={500}>
                  <NumberInputField boxShadow='md' bg='transparent' color='white' value={w} onBlur={(event) => setW(event.target.value)} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl isDisabled={isAvatar ? 'disabled' : ''}>
                <FormLabel color='white' >Image Height:</FormLabel>
                <NumberInput defaultValue={500}>
                  <NumberInputField boxShadow='md' bg='transparent' color='white' value={h} onBlur={(event) => setH(event.target.value)} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </HStack>
            <FormControl mt='5'>
              <FormLabel color='white'>Image URI</FormLabel>
              <InputGroup size='md'>
                <Input boxShadow='md' bg='transparent' color='white' ref={imgAddress} value={imgUrl} readOnly />
              </InputGroup>
              <Box mt='5'>
                <Checkbox variant='outline' bg='transparent' color='white' value={isAvatar} checked={isAvatar} onChange={setIsAvatar.toggle}>Avatar</Checkbox>
                <Checkbox pl={3} variant='outline' bg='transparent' color='white' value={isFlip} checked={isFlip} onChange={setIsFlip.toggle}>Flip</Checkbox>
                <Checkbox pl={3} variant='outline' bg='transparent' color='white' value={isFlop} checked={isFlop} onChange={setIsFlop.toggle}>Flop</Checkbox>
              </Box>
              <ButtonGroup variant='outline' spacing='6' mt='10' width="100%">
                <Button borderRadius='30' p='6' w='50%' boxShadow='lg' borderColor='white' color='white'
                  _hover={{
                    bg: 'transparent', borderColor: 'blue.500', color: 'blue.500'
                  }}
                  _active={{ bg: 'transparent', color: 'white' }} _focus={{ boxShadow: 'lg' }} onClick={copy}>Copy link</Button>
                <Button borderRadius='30' p='6' w='50%' boxShadow='lg' borderColor='white' color='white'
                  _hover={{
                    bg: 'transparent', borderColor: 'blue.500', color: 'blue.500'
                  }}
                  _active={{ bg: 'transparent', color: 'white' }} _focus={{ boxShadow: 'lg' }} onClick={() => window.open(imgUrl, '_blank')}>Save Image</Button>
              </ButtonGroup>
            </FormControl>
          </Box>
          <Box bgImage={PreviewImgBackground} bgSize='cover' display='flex' justify='center' boxShadow='md' p='5' rounded='md' w={`100%`} maxW='500' m='0 auto'>
            <Center m='0 auto' w='500'>
              {
                cid && imgUrl && <Image
                  onLoad={imageOnLoad}
                  src={imgUrl} justifySelf='center' />
              }
              {!imgLoaded && <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />}
            </Center>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  )
}

export default Preview;
