import React , { Component } from 'react';
import {SectionSkills, MyProfile,Title, TSpan, ProfileList, ProfileItem, PISpan, PISWeb, Skills, SkillsDesc, Bar, BTitle, Percent, Parent, PSpan} from './ProfileStyle'

class Profile extends Component {
    render () {
        return (
            <div classNameName="">
                <SectionSkills>
                    <div className="container">
                        <MyProfile>
                            <Title><TSpan>My </TSpan>Profile</Title>
                            <ProfileList>
                                <ProfileItem> <PISpan>Name</PISpan> Roshdy Mammdouh </ProfileItem>
                                <ProfileItem> <PISpan>Birthday</PISpan> 6/9/1997 </ProfileItem>
                                <ProfileItem> <PISpan>Address</PISpan> Cairo </ProfileItem>
                                <ProfileItem> <PISpan>Phone</PISpan> +20 111 765 1690 </ProfileItem>
                                <ProfileItem> <PISpan>Email</PISpan> roshdy.mammdouh@gmail.com </ProfileItem>
                                <ProfileItem> <PISpan>Website</PISpan> <PISWeb>www.google.com</PISWeb> </ProfileItem>
                            </ProfileList>
                        </MyProfile>
                        <Skills>
                            <Title>Some <TSpan> skills </TSpan> </Title>
                            <SkillsDesc> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique. </SkillsDesc>

                            <Bar>
                                <BTitle>Bootstrap</BTitle>
                                <Percent>100%</Percent>
                                <Parent> <PSpan SPercent="1"></PSpan> </Parent>
                            </Bar>
                            
                            <Bar>
                                <BTitle>CSS3</BTitle>
                                <Percent>90%</Percent>
                                <Parent> <PSpan SPercent="2"></PSpan> </Parent>
                            </Bar>
                            
                            <Bar>
                                <BTitle>Photo Shop</BTitle>
                                <Percent>80%</Percent>
                                <Parent> <PSpan SPercent="3"></PSpan> </Parent>
                            </Bar>
                        </Skills>
                    </div>
                </SectionSkills>
            </div>
        )
    }
}

export default Profile