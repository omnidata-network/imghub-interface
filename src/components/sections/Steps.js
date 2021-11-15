import React from "react";
import { Box, Image, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import Upload from "../../assets/upload.webp"
import Crop from "../../assets/crop.webp"
import Adjust from "../../assets/adjust.webp"
import Save from "../../assets/save.webp"

const Steps = () => {
    return (
        <Flex bg="gray.50">
            <Box color="black" textAlign="center" pt="170" pb="50"
                px={["10", "10", "20", "20"]}
                maxW="1600"
                m="0 auto">
                <Heading
                    as="h1"
                    fontSize="3xl"
                    fontWeight="bold"
                >
                    Make photo in seconds
                </Heading>
                <Text
                    fontSize="xl"
                    my="6"
                >
                    There are only 4 simple steps.
                </Text>
                <SimpleGrid
                    columns={{ sm: 1, md: 2, lg: 4 }}
                    spacing="8"
                    py="50"
                    textAlign="center"
                    rounded="lg"
                    color="gray.400"
                >
                    <Box boxShadow="base" rounded="md" bg="white" textAlign="left" _hover={{ boxShadow: "2xl", cursor: "pointer" }}>
                        <Image src={Upload} size="100%" mb="5" />
                        <Text fontSize="lg" fontWeight="bold" mx="5" color="gray.800">1. Buy an Image</Text>
                        <Text fontSize="md" my="5" mx="5" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laboris nisi ut aliquip ex ea commodo consequat. </Text>
                    </Box>
                    <Box boxShadow="base" rounded="md" bg="white" textAlign="left" _hover={{ boxShadow: "2xl", cursor: "pointer" }}>
                        <Image src={Crop} size="100%" mb="5" />
                        <Text fontSize="lg" fontWeight="bold" mx="5" color="gray.800">2. Input your IPFS CID</Text>
                        <Text fontSize="md" my="5" mx="5" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laboris nisi ut aliquip ex ea commodo consequat. </Text>
                    </Box>
                    <Box boxShadow="base" rounded="md" bg="white" textAlign="left" _hover={{ boxShadow: "2xl", cursor: "pointer" }}>
                        <Image src={Adjust} size="100%" mb="5" />
                        <Text fontSize="lg" fontWeight="bold" mx="5" color="gray.800">3. Adjust & preview</Text>
                        <Text fontSize="md" my="5" mx="5" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laboris nisi ut aliquip ex ea commodo consequat. </Text>
                    </Box>
                    <Box boxShadow="base" rounded="md" bg="white" textAlign="left" _hover={{ boxShadow: "2xl", cursor: "pointer" }}>
                        <Image src={Save} size="100%" mb="5" />
                        <Text fontSize="lg" fontWeight="bold" mx="5" color="gray.800">4. Copy & save </Text>
                        <Text fontSize="md" my="5" mx="5" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laboris nisi ut aliquip ex ea commodo consequat. </Text>
                    </Box>

                </SimpleGrid>
            </Box>
        </Flex>
    )
}

export default Steps
