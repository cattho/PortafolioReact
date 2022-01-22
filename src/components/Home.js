import React, { Component } from 'react';
import { Frase, HomeContainer, Homex, ImgContainer, ImgPorta, Titulo1, Titulo2, TxtContainer } from '../styles/HomeStyle';



export default class Home extends Component {
  render() {
    return(
        <Homex className='home' id='home'>
            <HomeContainer className='homeContainer'>
                <TxtContainer className='textContainer'>
                    <Titulo1>Hola, soy Juan Sebastian Giraldo Varón</Titulo1>
                    <Titulo2>Aprendiz Geek de Frontend</Titulo2>
                    <Frase>Frase motivadora aca</Frase>
                </TxtContainer>
                <ImgContainer className='imgContainer'>
                  <ImgPorta src='https://res.cloudinary.com/dfp8qduho/image/upload/v1642826805/fotoMIa_zy66um.png' />
                </ImgContainer>
            </HomeContainer>
        </Homex>
    )
  }
}
