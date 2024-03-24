import React , { Component } from 'react';
import {SocialDiv, Social, Icon, SocialP, SPSpan,Info} from './SocialMediaStyle' ;

class SocialMedia  extends Component {
    render () {
        return (
            <SocialDiv>
                <Social logo="face">
                    <Icon className="fa-brands fa-facebook-f fa-lg"></Icon>
                    <SocialP>
                        <SPSpan>Follow Me on</SPSpan>
                        <Info>Social Facebook</Info>
                    </SocialP>
                </Social>
                <Social logo="twitter">
                    <Icon className="fa-brands fa-twitter fa-lg"></Icon>
                    <SocialP>
                        <SPSpan>Tweet Me on</SPSpan>
                        <Info>Social twitter</Info>
                    </SocialP>
                </Social>
                <Social logo="pin">
                    <Icon className="fa-brands fa-pinterest fa-lg"></Icon>
                    <SocialP>
                        <SPSpan>Pin Me on</SPSpan>
                        <Info>Social Pinterest</Info>
                    </SocialP>
                </Social>
            </SocialDiv>
        )
    }
}

export default SocialMedia;