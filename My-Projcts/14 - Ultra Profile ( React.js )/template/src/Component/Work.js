import React , { Component } from 'react';
import axios from 'axios';
import { Work, Title, Span, Part, Icon, PTitle, Line, Desc} from './workStyled' ;

class WorkComponent extends Component {
    render () {
        return (
            <Work>
                <div className="container">
                    <Title><Span>My</Span> Work</Title>
                    <Part first="1">
                        <Icon className="icon fa fa-chain fa-2x"></Icon>
                        <PTitle> Mobile Ux </PTitle>
                        <Line />
                        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</Desc>
                    </Part>
                    <Part>
                        <Icon className="icon fa fa-bolt fa-2x"></Icon>
                        <PTitle>Mobile Ux</PTitle>
                        <Line />
                        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</Desc>
                    </Part>
                    <Part last="1">
                        <Icon className="icon fa fa-tachometer fa-2x"></Icon>
                        <PTitle>Mobile Ux</PTitle>
                        <Line />
                        <Desc >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</Desc>
                    </Part>
                </div>
            </Work>
        )
    }
}

export default WorkComponent