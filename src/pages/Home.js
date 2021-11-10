import React, { useState, useEffect } from 'react';
import {
  Container,
  Image,
  FormControl,
  FormLabel,
  Box,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';


const Home = () => {
  const [imgUrl, setImgUrl] = useState('');

  const [cid, setCid] = useState('bafybeigvwlkiqdvfpg3lcjmokhh6hn5dnugmcmhztbbspu74ufo64o56di');
  const [w, setW] = useState();
  const [h, setH] = useState();

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

  return (
    <>
      <Container maxW="xl" centerContent my="10">
        <Box mt="5" padding="4" bg="gray.100" maxW="3xl" minH="xs" minW="xs" display="flex" justifyContent="center" alignItems="center">
          {
            cid && imgUrl && <Image src={imgUrl} justifySelf="center" />
          }
        </Box>

        <FormControl mt="5">
          <FormLabel>IPFS CID:</FormLabel>
          <Input value={cid} onChange={(event) => setCid(event.target.value)} />
        </FormControl>
        <FormControl mt="2">
          <FormLabel>Image Width:</FormLabel>
          <NumberInput>
            <NumberInputField value={w} onBlur={(event) => setW(event.target.value)} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl mt="2">
          <FormLabel>Image Height:</FormLabel>
          <NumberInput>
            <NumberInputField value={h} onBlur={(event) => setH(event.target.value)} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </Container>
    </>
  )
}

export default Home;
