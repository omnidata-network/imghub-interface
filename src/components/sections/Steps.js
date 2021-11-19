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
                        <Text fontSize="lg" fontWeight="bold" mx="5" color="gray.800">1. Upload an image to IPFS</Text>
                        <Text fontSize="md" my="5" mx="5" color="gray.500">The image will be stored and indexed by a cryptographic hash function returning its unique content identifier (CID). </Text>
                    </Box>
                    <Box boxShadow="base" rounded="md" bg="white" textAlign="left" _hover={{ boxShadow: "2xl", cursor: "pointer" }}>
                        <Image src={Crop} size="100%" mb="5" />
                        <Text fontSize="lg" fontWeight="bold" mx="5" color="gray.800">2. Render</Text>
                        <Text fontSize="md" my="5" mx="5" color="gray.500">Enter your CID, width and height of the image you want to display. Resize, crop, and enhance your images with simple URL parameters. </Text>
                    </Box>
                    <Box boxShadow="base" rounded="md" bg="white" textAlign="left" _hover={{ boxShadow: "2xl", cursor: "pointer" }}>
                        <Image src={Adjust} size="100%" mb="5" />
                        <Text fontSize="lg" fontWeight="bold" mx="5" color="gray.800">3. Optimize</Text>
                        <Text fontSize="md" my="5" mx="5" color="gray.500">Intelligent, automated compression that eliminates unnecessary bytes. </Text>
                    </Box>
                    <Box boxShadow="base" rounded="md" bg="white" textAlign="left" _hover={{ boxShadow: "2xl", cursor: "pointer" }}>
                        <Image src={Save} size="100%" mb="5" />
                        <Text fontSize="lg" fontWeight="bold" mx="5" color="gray.800">4. Deliver </Text>
                        <Text fontSize="md" my="5" mx="5" color="gray.500">Customers see images fast thanks to our partners caching services. </Text>
                    </Box>

                </SimpleGrid>
            </Box>
        </Flex>
    )
}

export default Steps
