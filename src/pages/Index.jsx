import React from "react";
import { Box, Heading, Text, Image, Grid, GridItem, Container, Stack, Link, Icon } from "@chakra-ui/react";
import { FaBehance, FaDribbble, FaInstagram } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Branding Identity",
    description: "Logo design and branding guidelines for a startup.",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWdufGVufDB8fHx8MTcxMjA3Mjc5Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Mobile App UI",
    description: "User interface design for a fitness tracking app.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aSUyMGRlc2lnbnxlbnwwfHx8fDE3MTIwNzI3OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "Poster Design",
    description: "Creative poster design for a music festival.",
    image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwcG9zdGVyJTIwZGVzaWdufGVufDB8fHx8MTcxMjA3Mjc5N3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    title: "Packaging Design",
    description: "Packaging design for a range of organic products.",
    image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwcHJvZHVjdCUyMHBhY2thZ2luZyUyMGRlc2lnbnxlbnwwfHx8fDE3MTIwNzI3OTd8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box>
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Stack spacing={8} alignItems="center" textAlign="center">
            <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwaW5kaWFuJTIwd29tYW4lMjBzbWlsaW5nfGVufDB8fHx8MTcxMjA3Mjc5OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sanjana Pandit" />
            <Heading as="h1" size="2xl">
              Sanjana Pandit
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Graphic Designer
            </Text>
            <Stack direction="row" spacing={4}>
              <Link href="https://www.behance.net/sanjana-pandit" isExternal>
                <Icon as={FaBehance} boxSize={6} />
              </Link>
              <Link href="https://dribbble.com/sanjana-pandit" isExternal>
                <Icon as={FaDribbble} boxSize={6} />
              </Link>
              <Link href="https://www.instagram.com/sanjana.designs" isExternal>
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.lg" py={20}>
        <Heading as="h2" size="xl" mb={10}>
          Projects
        </Heading>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} gap={8}>
          {projects.map((project) => (
            <GridItem key={project.id}>
              <Box borderWidth={1} borderRadius="lg" overflow="hidden">
                <Image src={project.image} alt={project.title} />
                <Box p={6}>
                  <Heading as="h3" size="md" mb={2}>
                    {project.title}
                  </Heading>
                  <Text>{project.description}</Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Get in Touch
          </Heading>
          <Stack spacing={4} alignItems="center">
            <Text fontSize="xl">Have a project in mind? Let's collaborate and create something amazing!</Text>
            <Link href="mailto:sanjana.pandit@example.com">sanjana.pandit@example.com</Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
