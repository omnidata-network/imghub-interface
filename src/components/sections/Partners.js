import { Flex, Stack, Box, Center, Image, SimpleGrid, Link } from "@chakra-ui/react";
import Partner1 from "../../assets/partner-1.png";
import Partner2 from "../../assets/partner-2.png";
import Partner3 from "../../assets/partner-3.png";


const Partners = () => {
  return (
    <Flex
      align="center"
      justify={{sm: "left", md: "center"}}
      h="100%"
      w="100%"
      maxW="1600"
      px={["0", "0", "20", "20"]}
      m="0 auto"
      my={["50","50","50","50"]}
      bg="white"
      color={["white", "white", "primary.700", "primary.700"]}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 3 }}
       
      >
        <Box w="100%" mb={["10", "10", "30", "0"]} >
          <Center>
            <Link isExternal={true} href="https://ipfs.io">
              <Image src={Partner1} boxSize="70%" />
            </Link>
          </Center>
        </Box>
        <Box w="100%" mb={["10", "10", "30", "0"]}>
          <Center>
            <Link isExternal={true} href="https://filecoin.io/">
              <Image src={Partner2} boxSize="70%" />
            </Link>
          </Center>
        </Box>
        <Box w="100%" mb={["0", "0", "30", "0"]}>
          <Center>
            <Link isExternal={true} href="https://myavatar.link/">
              <Image src={Partner3} boxSize="70%" />
            </Link>
          </Center>
        </Box>
      </SimpleGrid>
    </Flex>
  )
}

export default Partners
