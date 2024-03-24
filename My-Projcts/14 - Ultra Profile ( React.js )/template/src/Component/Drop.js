import React , { Component } from 'react';
import {DropDiv, DTitle, Span, Form, Input, FIDiv, FIText, FIEmail, FISub, Textarea, FSubmit} from './DropStyle'

class Drop extends Component {
    render () {
        return (
           <DropDiv>
                <div className="container">
                    <DTitle><Span>Contact </Span>Us</DTitle>
                    <Form>
                        <FIDiv>
                            <FIText type="text" placeholder="Your Name" />
                            <FIEmail type="email" placeholder="Your Email" />
                        </FIDiv>
                        <FISub type="text" placeholder="Your Subject" />
                        <Textarea cols="30" rows="10" placeholder="Your Message" />
                        <FSubmit type="submit" value="Send Message" />
                    </Form>
                </div>
            </DropDiv>
        )
    }
}

export default Drop