import React, { useState, useEffect } from 'react';
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
  HStack
} from '@chakra-ui/react';
import { Checkbox } from "@chakra-ui/react"
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import Steps from '../components/sections/Steps'
import RetrieveBackgroundImg from '../assets/bg-line.svg'
import PreviewImgBackground from '../assets/transparent-bg.png'



const Preview = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [cid, setCid] = useState('QmQpShzHDuR2Yyq15gg5JFuqRj9vFhvVmReRhxzqr5mukm');
  const [w, setW] = useState('');
  const [h, setH] = useState('');
  const [t, setAvatar] = useState('');
  const imgAddress = React.createRef();
  const copy = async () => {
    await navigator.clipboard.writeText(imgAddress.current.value);
  }
  const [isAvatar, setIsAvatar] = useState(false)
  const handleCheckbox = () => {
    setIsAvatar(!isAvatar);
    if (isAvatar)
      setAvatar('avatar')
  }

  useEffect(() => {
    const url = new URL(`https://api.img8.io/ipfs/${cid}`);
    let params = url.searchParams;

    if (h && h.trim().length > 0) {
      params.set('h', h);
    }
    if (w && w.trim().length > 0) {
      params.set('w', w);
    }
    if (cid) {
      setImgUrl(url);
    }
    if (isAvatar && t && t.trim().length > 0) {
      params.set('t', t);
    }
  }, [cid, t, w, h, isAvatar])


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
                <Checkbox variant='outline' bg='transparent' color='white' checked={isAvatar} onChange={handleCheckbox}>Avatar</Checkbox>
              </Box>
              <ButtonGroup variant='outline' spacing='6' mt='10' width='70%'>
                <Button borderRadius='30' p='6' w='50%' boxShadow='lg' borderColor='white' color='white'
                  _hover={{
                    bg: 'transparent', borderColor: 'blue.500', color: 'blue.500'
                  }}
                  _active={{ bg: 'transparent', color: 'white' }} _focus={{ boxShadow: 'lg' }} onClick={copy}>Copy ink</Button>
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
                cid && imgUrl && <Image src={imgUrl} justifySelf='center' />
              }
            </Center>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  )
}

export default Preview;
