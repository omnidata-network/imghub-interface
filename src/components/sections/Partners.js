import { Flex, Stack, Box, Center, Image, SimpleGrid } from "@chakra-ui/react";
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
            <Image src={Partner1} boxSize="70%" />
          </Center>
        </Box>
        <Box w="100%" mb={["10", "10", "30", "0"]}>
          <Center>
            <Image src={Partner2} boxSize="70%" />
          </Center>
        </Box>
        <Box w="100%" mb={["0", "0", "30", "0"]}>
          <Center>
          <Image src={Partner3} boxSize="70%" />
          </Center>
        </Box>
      </SimpleGrid>
    </Flex>
  )
}

export default Partners
