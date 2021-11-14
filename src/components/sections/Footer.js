import { Flex, Text } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Flex
        align="center"
        justify="center"
        w="100%"
        p={8}
        bg="gray.100"
        color="black"   
        position='bottom'    
      >
          <Text fontSize="md"
          mt={2}
          textAlign="center"
          >© Copyright 2021. All Rights Reserved. </Text>
          </Flex>
    )
}

export default Footer
