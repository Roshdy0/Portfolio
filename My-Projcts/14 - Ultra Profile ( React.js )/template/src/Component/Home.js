import React , { Component } from 'react';
import {HomeD, Information, Title, Info, Desc, Span, Btn, Footer, FooterP} from './HomeStyled.js'
import WorkComponent from './Work'
import Portfolio from './Portfolio'
import Profile from './Profile'
import Creative from './Creative'
import SocialMedia from './SocialMedia'
import Drop from './Drop'


class Home extends Component {
    render () {
        return (
            <div className="">
                <HomeD>
                    <div class="container">
                        <Information>
                            <Title>Roshdy Mammdouh</Title>
                            <Info>Creative Director</Info>
                            <Desc>Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. </Desc>
                            <Btn>Let's Begin</Btn>
                        </Information>
                    </div>
                </HomeD>
                <WorkComponent />
                <Portfolio />
                <Profile />
                <Creative />
                <SocialMedia />
                <Drop />
                <Footer> <FooterP> copyright &copy; 2018 by ultra profile </FooterP> </Footer> 
            </div>

        )
    }
}

export default Home