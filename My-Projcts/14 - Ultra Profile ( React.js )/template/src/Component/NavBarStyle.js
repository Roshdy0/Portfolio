import styled from 'styled-components'

export const NavBar = styled.div`
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`
export const Logo = styled.div`
    width: 50%;
    float: left;
`
export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold
`
export const UlList = styled.ul`
    padding: 0;
    width: 50%;
    float: left;
    list-style: none;
`
export const ListItem = styled.li` display: inline-block; `

export const Anchor = styled.a`
    color: #222;
    display: block;
    font-weight: bold;
    padding: 10px 15px;
    text-decoration: none;

    &:hover {
        color: #eb5424;
    }
`


