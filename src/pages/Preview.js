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
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import Edit from '../components/sections/Edit'
import RetrieveBackgroundImg from '../assets/bg-line.svg'
import FileSaver from "file-saver"



const Preview = () => {
  const [imgUrl, setImgUrl] = useState('');

  const [cid, setCid] = useState('bafybeigvwlkiqdvfpg3lcjmokhh6hn5dnugmcmhztbbspu74ufo64o56di');
  const [w, setW] = useState('');
  const [h, setH] = useState('');
  const imgAddress = React.createRef();

  const copy = async () => {
    await navigator.clipboard.writeText(imgAddress.current.value);
  }

  useEffect(() => {
    const url = new URL(`http://localhost:3000/ipfs/${cid}`);
    let params = url.searchParams;

    if (h && h.trim().length > 0) {
      params.set('h', h);
    }
    if (w && w.trim().length > 0) {
      params.set('w', w);
    }

    if (cid) {
      console.log('The gateway access URL:', url.toString())
      setImgUrl(url);
    }
  }, [cid, w, h])

  const saveImage = () => {
    FileSaver.saveAs(
    process.env.PUBLIC_URL + imgUrl,"Image")}

  return (
    <>
     <Flex direction="column" align="center" m="0 auto">
      <Header />
      </Flex>
      <Edit />
     <Box bgImage={RetrieveBackgroundImg} bgSize="cover">
     <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        spacing="8"
        pt="50"
        textAlign="left"
        p={["10", "10", "20", "20"]}
        maxW="1600"
        m="0 auto"        
      >
        <Box color="white">
          <Heading
            as="h1"
            fontSize="3xl"
            fontWeight="bold"
            lineHeight="2"
            color="white"
          >
            Retrieve My Image
          </Heading>
          <Text fontSize="md" my="5" color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          <FormControl mt="10">
            <FormLabel color="white">My IPFS CID:</FormLabel>
            <Input boxShadow="md" bg="transparent" color="white" value={cid} onChange={(event) => setCid(event.target.value)} />
          </FormControl>
          <HStack spacing="10" mt="5">
            <FormControl >
              <FormLabel color="white">Image Width:</FormLabel>
              <NumberInput defaultValue={300}>
                <NumberInputField boxShadow="md" bg="transparent" color="white"value={w} onBlur={(event) => setW(event.target.value)} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel color="white">Image Height:</FormLabel>
              <NumberInput defaultValue={300}>
                <NumberInputField boxShadow="md" bg="transparent" color="white" value={h} onBlur={(event) => setH(event.target.value)} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </HStack>
          <FormControl mt="5">
            <FormLabel color="gray.500">Image Address</FormLabel>
            <InputGroup size="md">
              <Input boxShadow="md" bg="transparent" color="white" ref={imgAddress} value={imgUrl} readOnly />
            </InputGroup>
            <ButtonGroup variant="outline" spacing="6" mt="10" width="70%">
              <Button borderRadius="30" p="6" w="50%" boxShadow="lg"  borderColor="white" color="white"
                _hover={{
                  bg: "transparent", borderColor: "blue.500", color: "blue.500"
                }}
                _active={{ bg: "transparent", color: "white" }} _focus={{boxShadow:"lg"}} onClick={copy}>Copy ink</Button>
                 <Button borderRadius="30" p="6" w="50%" boxShadow="lg"  borderColor="white" color="white"
                _hover={{
                  bg: "transparent", borderColor: "blue.500", color: "blue.500"
                }}
                _active={{ bg: "transparent", color: "white" }} _focus={{boxShadow:"lg"}} onClick={saveImage}>Save Image</Button>
            </ButtonGroup>
          </FormControl>
        </Box>
        <Box display="flex" justify="center" boxShadow="md" p="5" rounded="md" bg="white" w={`100%`} maxW="500" m="0 auto">
          <Center m="0 auto" w="500">
            {
              cid && imgUrl && <Image src={imgUrl} justifySelf="center" />
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
