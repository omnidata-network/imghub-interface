import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Flex, Image, Heading, Text, Stack, Center } from "@chakra-ui/react";
import BgAnimation from "../../assets/bg-animation.svg"


const Introduction = ({ title, desc, image, ctaLink, ctaText }) => {
    return (
        <Flex
            align="center"
            justify={{ base: "center", md: "space-between" }}
            direction={["column-reverse", "column-reverse", "column-reverse", "row"]}
            wrap="no-wrap"
            maxW="1600"
            px={["10", "10", "20", "20"]}
            m="0 auto"
            color={["white", "white", "primary.700", "primary.700"]}
            bgImage={BgAnimation}
            bgSize="cover"
            bgPosition="center"
            py="120" 
        >
            <Stack
                spacing={4} w={["100%", "100%", "100%", "50%"]} 
            >
                <Heading
                    as="h1"
                    fontSize="4xl"
                    fontWeight="bold"
                    color="primary.800"
                    textAlign="left"
                >
                    {title}
                </Heading>
                <Text
                    fontSize="xl"
                    lineHeight={1.5}
                    textAlign="left"
                    pr={{ base: "0", lg: "10" }}
                    py="30"
                >
                    {desc}
                </Text>

                
                <Box
                    as="button"
                    p="4"
                    mt="30"
                    w={160}
                    color="white"
                    fontWeight="bold"
                    borderRadius="30"
                    bgGradient="linear(to-l, red.500, yellow.500)"
                    _hover={{
                        bgGradient: "linear(to-r, red.500, yellow.500)",
                    }}
                >
                   <Link to={ctaLink}> {ctaText}</Link>
                </Box>
                
            </Stack>
            <Box w={["100%", "100%", "80%", "50%"]} mb={["150", "100", "150", "50"]} mt={["150", "50", "150", "50"]}>
                <Center>
                    <Image src={image} size="100%" rounded="1rem" />
                </Center>
            </Box>
        </Flex>
    )
}

Introduction.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string
};

export default Introduction
