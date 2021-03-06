import React from "react";
import Link from "next/link";
import Image from "next/image"
import { SimpleGrid, Center, Box, AspectRatio, Text, Stack, } from "@chakra-ui/react";
import { buildUrl } from 'cloudinary-build-url';

function CardAccordion({ names }) {
  return (
    <Center alignContent w='full' m='auto' mt={4}>
      <SimpleGrid columns={[2, 2]}>
        {names.map((val, data) => {
          let url = '/cronologias-invisible';
          val.imagenDeLaArtista === ''? url= url: url= val.imagenDeLaArtista;
          let imgurl = buildUrl(url, {
            cloud: {
              cloudName: 'cronologias-invisible',
            },
            transformations: {
              width:'270',
              quality:'75',
            }
        });
          return (
            // esta es la ruta correcto, se comenta por el momento para que las curadoras no entren a la vista de la 
            // artista, ya que está en desarrollo
            // {`/search-artist/${val.id}`} as={`/search-artist/${val.id}`}
            <Link key={data} href={`/busqueda-de-artistas/${val.id}`} as={`/busqueda-de-artistas/${val.id}`}>
              <a>
                <Box key={data} mr={4} mb={4}>
                  <AspectRatio 
                    ratio={1 / 1}
                    w={{ base: '8.6rem', md: '9.75rem', lg: '9.75rem', xl: '16.8rem'}}
                    h={{ base: '8.6rem', md: '9.75rem', lg: '9.75rem', xl: '10rem'}}
                    
                  >
                    <Image src={imgurl} alt={val.imagenDeLaArtista} layout='fill' objectFit='cover' quality={75}/>
                  </AspectRatio>
                  <Stack 
                    align={{ base: 'center', md: 'stretch' }}
                    w={{ base: '8.6rem', md: '9.75rem', lg: '9.75rem', xl: '16.8rem'}}
                  >
                    <Text fontWeight='bold' color='brand.primaryBlack'>
                      {val.nombreDeLaAutora}
                    </Text>
                  </Stack>
                </Box>
              </a>
            </Link>
          )
        })}
      </SimpleGrid>
    </Center>
  );
}
export default CardAccordion;

