import React from 'react'
import { Box, Image, Heading, Text, SimpleGrid } from "@chakra-ui/react";
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
        <Box color="black" textAlign="center" maxW="1600" pt="50" bg="gray.50">
            <Heading
                as="h1"
                fontSize="3xl"
                fontWeight="bold"
                mt="50"
            >
                Core Ecosystems
            </Heading>

            <SimpleGrid                
                columns={{ sm: 2, md: 4 }}
                spacing="8"
                p="10"
                mt="50"
                textAlign="center"
                rounded="lg"
                color="gray.400"            >
                <Box textAlign="left" >
                    <Image src={Api} size="100%" mb="5"/>
                    <Text fontSize="lg" fontWeight="bold"  mt="8" color="gray.800">One Marketplace</Text>
                    <Text fontSize="md" my="5" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </Box>
                <Box textAlign="left" >
                    <Image src={Time} size="100%" mb="5"/>
                    <Text fontSize="lg" fontWeight="bold"  mt="8" color="gray.800">Transparent & Trust</Text>
                    <Text fontSize="md" my="5" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </Box>
                <Box textAlign="left" >
                    <Image src={Interaction} size="100%" mb="5"/>
                    <Text fontSize="lg" fontWeight="bold"  mt="8" color="gray.800">Blockchain Base Profiles</Text>
                    <Text fontSize="md" my="5" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </Box>
                <Box textAlign="left" >
                    <Image src={Spend} size="100%" mb="5"/>
                    <Text fontSize="lg" fontWeight="bold"  mt="8" color="gray.800">Payment Flexibility</Text>
                    <Text fontSize="md" my="5" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </Box>
                <Box textAlign="left" >
                    <Image src={Faster} size="100%" mb="5"/>
                    <Text fontSize="lg" fontWeight="bold"  mt="8" color="gray.800">Download faster</Text>
                    <Text fontSize="md" my="5" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </Box>
                <Box textAlign="left" >
                    <Image src={Global} size="100%" mb="5"/>
                    <Text fontSize="lg" fontWeight="bold"  mt="8" color="gray.800">Access globally</Text>
                    <Text fontSize="md" my="5" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </Box>
                <Box textAlign="left" >
                    <Image src={Resource} size="100%" mb="5"/>
                    <Text fontSize="lg" fontWeight="bold"  mt="8" color="gray.800">Reduce complexity</Text>
                    <Text fontSize="md" my="5" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </Box>
                <Box textAlign="left" >
                    <Image src={Scalability} size="100%" mb="5"/>
                    <Text fontSize="lg" fontWeight="bold"  mt="8" color="gray.800">Scalability</Text>
                    <Text fontSize="md" my="5" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </Box>

            </SimpleGrid>
        </Box>
    )
}

export default WhyChoose
