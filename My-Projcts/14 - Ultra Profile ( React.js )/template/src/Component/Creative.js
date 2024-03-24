import React , { Component } from 'react';
import {CreativeDiv, Info, ITitle, ITSpan, IDir, IDesc, IDescA} from './CreativeStyle.js' ;

class Creative extends Component {
    render () {
        return (
            <CreativeDiv>
                <div className="container">
                    <Info>
                        <ITitle><ITSpan>This is</ITSpan> Me</ITitle>
                        <IDir>Creative Director</IDir>
                        <IDesc> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <IDescA href="#">explicabo</IDescA> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?</IDesc>
                        <IDesc> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis? </IDesc>
                    </Info>
                </div>
            </CreativeDiv>
        )
    }
}

export default Creative;