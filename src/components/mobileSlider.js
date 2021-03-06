import Link from "next/link";
import Image from "next/image";
import { buildUrl } from 'cloudinary-build-url';
import {
    Box,
    Flex,
    HStack,
    Heading,
    Center,
    LinkBox, 
} from '@chakra-ui/react'

function MobileSlider(props) {
    let url ='/cronologias-invible'
    let imgurl = ''
    return(
        <Center 
        mb={{ base: '3rem', md:'4rem', lg:'5rem'}}
        >
            <Flex
            overflow='scroll'
            css={{
                '&::-webkit-scrollbar': {
                display: 'none',
                },
            }}
            align='start'
            >
                <HStack 
                    w={{ base: '20rem', '2sm': '24rem' ,md: '45rem', lg: '58rem', xl: '72rem' }}
                    m='auto'
                    textAlign='start'
                    mb={4}
                    spacing={{ base:'0.5rem', md:'0.6rem', lg:'1.5rem' }}>
                    {props.mobleSlides.map((slide, sid) => (
                        slide.enlaceDeLaImagen === ''? url = url: url = slide.enlaceDeLaImagen,
                        imgurl = buildUrl(url, {
                            cloud: {
                                cloudName: 'cronologias-invisible',
                            },
                            transformations: {
                                width:'490',
                                quality:'75',
                            }
                        }),
                            <Link href={`/visita-las-exposiciones/${slide.id}`} as={`/visita-las-exposiciones/${slide.id}`} key={sid}>
                            <a>
                                <LinkBox >
                                <Box 
                                w={{ base:'14.938rem', md:'18rem', lg:'24rem' }}
                                h={{ base:'13.75rem', md:'14rem', lg:'16.875rem' }}
                                borderBottom='4px' 
                                borderBottomColor='brand.primaryOrange' 
                                position='relative'
                                >
                                    <Image 
                                    src={imgurl} 
                                    objectFit='cover' 
                                    layout='fill'
                                    />
                                        <Box 
                                            bg='linear-gradient(180deg, rgba(0, 0, 0, 0) 44.5%, rgba(0, 0, 0, 0.3) 60.73%, rgba(0, 0, 0, 0.55) 80.85%, rgba(0, 0, 0, 0.7) 103.68%, #000000 120.75%)'
                                            position='absolute' 
                                            zIndex='2'
                                            bottom='1'
                                            w='full'
                                            h='full'
                                        >
                                            <Heading 
                                            position='absolute'
                                            bottom='1'
                                            as='h3' 
                                            w='full'
                                            fontSize='1rem'
                                            color='brand.baseColor' 
                                            pb={5}
                                            pt={5}
                                            textAlign='center'
                                            fontFamily='body'
                                            > 
                                                {slide.tituloDeLaTarjeta}
                                            </Heading>
                                        </Box>
                                </Box>
                            </LinkBox>
                            </a>
                        </Link>
                    ))}
                </HStack>
            </Flex>
        </Center>
    )
}

export default MobileSlider;