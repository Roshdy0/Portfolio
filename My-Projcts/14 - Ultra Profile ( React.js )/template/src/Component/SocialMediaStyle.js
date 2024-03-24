import styled from 'styled-components'

export const SocialDiv = styled.div`
    height: auto;
    overflow: hidden
`
export const Social = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${props => ({ "face": '#3b5998', "twitter": '#498cbf', "pin": '#cc2127' } [props.logo] || '0')};

    @media (max-width:991px) {
        width: 100%;
        float: none;
    }
`
export const Icon = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 23px;
`
export const SocialP = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    float: left;
`
export const SPSpan = styled.span`
    display: block;
    margin-bottom: 8px
`
export const Info = styled.span` 
    font-weight: normal 
`