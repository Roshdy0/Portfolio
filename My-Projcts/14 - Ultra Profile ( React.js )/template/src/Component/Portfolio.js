import React , { Component } from 'react';
import {PDiv, PH2, PSpan, PUl, PLi, Box, BDiv, Image, Overlay, OSpan} from './PortfolioStyle'

class Portfolio extends Component {
    render () {
        return (
            <PDiv>
                <PH2><PSpan>My</PSpan> Portfolio</PH2>
                <PUl>
                    <PLi active>All</PLi>
                    <PLi>HTML</PLi>
                    <PLi>Photo Shop</PLi>
                    <PLi>Wordpress</PLi>
                    <PLi>Mobile</PLi>
                </PUl>
                
                <Box>
                    <BDiv>
                        <Image src="images/Portfolio/portfolio-img1.jpg" alt="" />
                        <Overlay> <OSpan> Show Image </OSpan> </Overlay>
                    </BDiv>
                    <BDiv>
                        <Image src="images/Portfolio/portfolio-img2.jpg" alt="" />
                        <Overlay> <OSpan> Show Image </OSpan> </Overlay>
                    </BDiv>
                    <BDiv>
                        <Image src="images/Portfolio/portfolio-img3.jpg" alt="" />
                        <Overlay> <OSpan> Show Image </OSpan> </Overlay> 
                    </BDiv>
                    <BDiv>
                        <Image src="images/Portfolio/portfolio-img4.jpg" alt="" />
                        <Overlay> <OSpan> Show Image </OSpan> </Overlay> 
                    </BDiv>
                    <BDiv>
                        <Image src="images/Portfolio/portfolio-img5.jpg" alt="" />
                        <Overlay> <OSpan> Show Image </OSpan> </Overlay> 
                    </BDiv>
                    <BDiv>
                        <Image src="images/Portfolio/portfolio-img6.jpg" alt="" />
                        <Overlay> <OSpan> Show Image </OSpan> </Overlay> 
                    </BDiv>
                    <BDiv>
                        <Image src="images/Portfolio/portfolio-img7.jpg" alt="" />
                        <Overlay> <OSpan> Show Image </OSpan> </Overlay> 
                    </BDiv>
                    <BDiv>
                        <Image src="images/Portfolio/portfolio-img8.jpg" alt="" />
                        <Overlay> <OSpan> Show Image </OSpan> </Overlay>
                    </BDiv>
                </Box>
            </PDiv>
        )
    }
}

export default Portfolio