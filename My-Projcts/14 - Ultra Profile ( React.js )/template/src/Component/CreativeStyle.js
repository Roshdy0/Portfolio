import styled from 'styled-components'

export const CreativeDiv = styled.div`
    height: 500px;
    background-image: url('../images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @media (max-width:991px) { height: auto }
`
export const Info = styled.div`
    width: 50%;
    float: right;
    @media (max-width:991px) {
        width: 100%;
        padding-top: 10px;
        float: none
    }
`
export const ITitle = styled.h2`
    font-weight: bold;
    font-size: 50px
`
export const ITSpan = styled.span` font-weight: normal `
export const IDir = styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px;
    @media (max-width:991px) { font-size: 30px }
`
export const IDesc = styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8 ;
`
export const IDescA = styled.div` text-decoration: none `