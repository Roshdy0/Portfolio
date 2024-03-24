import styled from 'styled-components'

export const SectionSkills = styled.div` 
    padding: 50px 0;
    overflow: hidden;
`
export const MyProfile = styled.div` 
    width: 50%;
    float: left;
    @media (max-width:768px) { margin-bottom: 20px }
`
export const Title = styled.h2` 
font-size: 40px; 
margin-bottom: 20px;

@media (max-width:768px) {
    width: 100%;
    float: none
}
`
export const TSpan = styled.span` font-weight: normal; `
export const ProfileList = styled.ul` list-style: none `
export const ProfileItem = styled.li` margin-bottom: 8px `
export const PISpan = styled.span` 
    display: inline-block;
    width: 100px;
    font-weight: bold
`
export const PISWeb = styled.span` 
    font-weight: normal;
    color: #eb5424
`
export const Skills = styled.div` 
    width: 50%;
    float: left;
`
export const SkillsDesc = styled.div` 
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`
export const Bar = styled.div` 
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`
export const BTitle = styled.span` float: left; `
export const Percent = styled.span` 
    float: right;
    margin-right: 100px
`
export const Parent = styled.div` 
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`
export const PSpan = styled.span` 
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props => ({ "1": '100%', "2": '90%', "3": '80%' }[props.SPercent] || '0')};
`