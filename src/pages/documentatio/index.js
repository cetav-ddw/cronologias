import {Box, HStack, Image, Center, Link} from '@chakra-ui/react'
import {getApiRes} from "../../services/callApi"
import Header from "../../components/header"
import Footer from "../../components/footer"

function documentation({documentationData}){
    console.log(documentationData.data)
    return(
        <>
            <Header/>
            <Box mb={{ base: "2rem", md:"2.25rem", lg:"2.5rem"}}>
                {documentationData.data.allDocumentacions.map((documentation, index) => (
                    index % 2 === 0 ?
                        <Center 
                            key={index} 
                        >
                            <HStack 
                                spacing={ {base: 4, md: 6, lg: 8} }
                                mt={ { base: 5, lg: 8 }} 
                            >
                                <Box >
                                    <Link href="/">
                                        <a>
                                            <Image 
                                                w={ { base: "11.5rem", md: "28rem", lg: "40rem", xl: "53rem"} }
                                                h={ {base: "16rem", md: "28rem", lg: "30rem"} }
                                                objectFit="cover" 
                                                src={documentation.enlaceDocumentacion}
                                                alt="Documentación">
                                            </Image>
                                        </a>
                                    </Link>
                                </Box>
                                <Box bg="brand.primaryOrange"
                                    w={ {base: "4rem",md: "15rem", lg: "14rem", xl: "16rem"} }
                                    h={ { base: "16rem", md: "28rem", lg: "30rem" }}>
                                </Box>
                            </HStack>
                        </Center> :
                        <Center key={index} >
                            <HStack 
                                spacing={{ base: 4, md: 6, lg: 8 }}
                                mt={{ base: 5, lg: 8 }} 
                            >
                                <Box 
                                    bg="brand.primaryBlack"
                                    w={{ base: "4rem", md: "15rem", lg: "14rem", xl: "16rem" }}
                                    h={{ base: "16rem", md: "28rem", lg: "30rem" }} >
                                </Box>
                                <Box>
                                    <Link href="/">
                                        <a>
                                            <Image 
                                                w={ { base: "11.5rem", md: "28rem", lg: "40rem", xl: "53rem"} }
                                                h={ {base: "16rem", md: "28rem", lg: "30rem"} }
                                                objectFit="cover" 
                                                src={documentation.enlaceDocumentacion}
                                                alt="Documentación">
                                            </Image>
                                        </a>
                                    </Link>
                                </Box>
                        </HStack>
                    </Center>
                    ))  
                }
            </Box>
            <Footer/>
        </>
    )
}
export default documentation

export async function getStaticProps() {
    const URl= process.env.NEXT_URL;
    const TOKEN= process.env.NEXT_TOKEN;
    const bodyDocumentation ='query MyQuery {allDocumentacions {enlaceDocumentacion}}'
    const getDocumentation = await getApiRes(URl,TOKEN, bodyDocumentation)
    const documentationData = getDocumentation
    return{
        props: {
            documentationData
        }
    }
}
