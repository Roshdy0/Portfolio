import React , { Component } from 'react';
import { NavLink} from 'react-router-dom'; 
import {NavBar, Logo, LogoText, UlList, ListItem} from './NavBarStyle.js'


const NavBarCom = () => {
    return (
        <NavBar>
            <div className="container">
            <Logo><LogoText>Ultra Profile</LogoText></Logo>
                <UlList>
                    <ListItem><NavLink exact to="/">Home</NavLink></ListItem>
                    <ListItem><NavLink to="Work">Work</NavLink></ListItem>
                    <ListItem><NavLink to="Portfolio">Portfolio</NavLink></ListItem>
                    <ListItem><NavLink to="Profile">Profile</NavLink></ListItem>
                    <ListItem><NavLink to="Creative">Creative</NavLink></ListItem>
                    <ListItem><NavLink to="Drop">Contact Us</NavLink></ListItem>
                </UlList>
            </div>
        </NavBar>
    )
}

export default NavBarCom ;