import React from 'react'
import { Box, Flex, Spacer, Image } from "@chakra-ui/react"
import MenuHam from '../src/components/MenuHam'
import { SearchBar } from '../src/components/serchBar'
import Galery from '../src/components/artistGalery'
import ArtistImg from '../artistImage'
import ModalDialog from "../src/components/modal"
import Slider from "../src/components/slider"
import Slides from "../slides"
import MobileSlider from "../src/components/mobileSlider"
import MobileSlides from "../mobileSlides"
import { getArtist } from '../src/services/searchBarApi'
import { ViewArtist } from '../src/components/viewArtist'
import { getArtistView } from '../src/services/viewArtistApi'
function HeaderCronicas({data, names}) {
  return (
    <>
      <Flex bg="brand.primaryOrange" alignItems="center">
        <Box p={8}>
          <Image w={{ base: "42px", md: "50px", lg: "58px" }} src='/logoNegro.svg' alt="Cronologias de lo Invisible"></Image>
        </Box>
        <Spacer />
        <MenuHam></MenuHam>
      </Flex>
      <SearchBar names={data}></SearchBar>
      <ViewArtist names={names}/>
      <Galery images={ArtistImg}></Galery>
      <ModalDialog>
        <Slider slides={Slides}/>
      </ModalDialog>
      <MobileSlider mobleSlides={MobileSlides}/>
    </>
  )
}

export default HeaderCronicas

export async function getStaticProps () {
  const URl= process.env.URL;
  const TOKEN= process.env.TOKEN;
  console.log(URl, TOKEN);
  const resposeJson = await getArtist(URl,TOKEN);
  const data = resposeJson.data.allTarjetaAutoras;
  const resposeJson2 = await getArtistView(URl,TOKEN);
  const names = resposeJson2.data.allNombreAutoras[0];
  return{
    props: {
      data,
      names
    }
  }
}