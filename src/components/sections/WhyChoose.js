import React from 'react'
import { Box, Image, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import Api from "../../assets/api.svg"
import Interaction from "../../assets/interaction.svg"
import Time from "../../assets/time.svg"
import Scalability from "../../assets/scalability.svg"
import Resource from "../../assets/resource.svg"
import Global from "../../assets/global.svg"
import Spend from "../../assets/spend.svg"
import Faster from "../../assets/faster.svg"

const WhyChoose = () => {
    return (
        <Flex bg="gray.50" px={["10", "10", "20", "20"]}>
            <Box color="black" textAlign="center" maxW="1600" pt="50" bg="gray.50" m="0 auto">
                <Heading
                    as="h1"
                    fontSize="3xl"
                    fontWeight="bold"
                    mt="50"
                >
                    Core Ecosystems
                </Heading>

                <SimpleGrid
                    columns={{ sm: 1, md: 2, lg: 4 }}
                    spacing="8"
                    py="10"
                    px={{base:"0", "2xl":"20"}}
                    mt="50"
                    textAlign="center"
                    rounded="lg"
                    color="gray.400"
                    >
                    <Box textAlign="left" >
                        <Image src={Api} size="100%" mb="5" />
                        <Text fontSize="lg" fontWeight="bold" mt="8" color="gray.800">Robust, Reliable, and Resilient API</Text>
                        <Text fontSize="md" my="5" color="gray.500">Retrieve images from IPFS CID with a timeout mechanism. Whitelist based rating limit to avoid malicious cyber attacks.</Text>
                    </Box>
                    <Box textAlign="left" >
                        <Image src={Time} size="100%" mb="5" />
                        <Text fontSize="lg" fontWeight="bold" mt="8" color="gray.800">Calculate Image Hash</Text>
                        <Text fontSize="md" my="5" color="gray.500">Calculate and Perform Image Search by using an image’s perceptual hash or URL.</Text>
                    </Box>
                    <Box textAlign="left" >
                        <Image src={Interaction} size="100%" mb="5" />
                        <Text fontSize="lg" fontWeight="bold" mt="8" color="gray.800">Dynamic Image Rendering</Text>
                        <Text fontSize="md" my="5" color="gray.500">Instantly apply eye-catching effects by simply changing your image’s width and height.</Text>
                    </Box>
                    <Box textAlign="left" >
                        <Image src={Spend} size="100%" mb="5" />
                        <Text fontSize="lg" fontWeight="bold" mt="8" color="gray.800">Image Optimisation</Text>
                        <Text fontSize="md" my="5" color="gray.500">Precise adjustment of the compression level, complemented by fine-tune compression level, significantly reduce the file size without any degradation noticeable to the human eye.</Text>
                    </Box>
                    <Box textAlign="left" >
                        <Image src={Faster} size="100%" mb="5" />
                        <Text fontSize="lg" fontWeight="bold" mt="8" color="gray.800">Image Management</Text>
                        <Text fontSize="md" my="5" color="gray.500">Decentralised organise your photos, provide you encryption to protect your photos from potential data breaches and privacy issues.</Text>
                    </Box>
                    <Box textAlign="left" >
                        <Image src={Global} size="100%" mb="5" />
                        <Text fontSize="lg" fontWeight="bold" mt="8" color="gray.800">Content Delivery</Text>
                        <Text fontSize="md" my="5" color="gray.500">Make your images available anywhere globally and deliver them quickly to your end-users on any device.</Text>
                    </Box>
                    <Box textAlign="left" >
                        <Image src={Resource} size="100%" mb="5" />
                        <Text fontSize="lg" fontWeight="bold" mt="8" color="gray.800">Developer-friendly</Text>
                        <Text fontSize="md" my="5" color="gray.500">The gateway will return either the processed and optimised image to the client or a detailed error message.</Text>
                    </Box>
                    <Box textAlign="left" >
                        <Image src={Scalability} size="100%" mb="5" />
                        <Text fontSize="lg" fontWeight="bold" mt="8" color="gray.800">Reduce Latency and Save Bandwidth</Text>
                        <Text fontSize="md" my="5" color="gray.500">Intelligently caches your image on multiple nodes and load through the IPFS gateway.</Text>
                    </Box>

                </SimpleGrid>
            </Box>
        </Flex>
    )
}

export default WhyChoose
