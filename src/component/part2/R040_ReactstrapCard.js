import React, {Component, useEffect, useState} from 'react';
import {Button, Card, CardImg, CardBody, CardSubtitle, CardTitle, CardText} from 'reactstrap';

class R040_ReactstrapCard extends Component{
    render() {
        return (
            <div>
                <Card>
                    <CardImg top height="200px" src="http://asq.kr/4KkfRxZfR" alt="Card image"/>
                    <CardBody>
                        <CardTitle>Card 제목</CardTitle>
                        <CardSubtitle>Card 부제목</CardSubtitle>
                        <CardText>Card 내용 Lorem Ipsum is simply dummy text.</CardText>
                        <Button>버튼</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
export default R040_ReactstrapCard;