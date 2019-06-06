import React from 'react';
import {Container, Card, CardBody, CardTitle, CardText, Button} from "reactstrap";
import { CSSTransition } from 'react-transition-group';
import '../App.css';

const QuoteList = ({color, currentQuote, nextQuote, showCard}) => (
    <Container>
        <Card className="p-5">
            <CSSTransition
                in={showCard}
                classNames="quote"
                timeout={{ enter: 1000, exit: 1000 }}
            >
                <CardBody className="d-flex flex-column">
                    <CardTitle>
                        <h3 style={{color}}>{currentQuote.quote || '' }</h3>
                    </CardTitle>
                    <CardText style={{color}}>{currentQuote.author || '' }</CardText>
                    <Button
                        style={{backgroundColor: color}}
                        className="ml-auto"
                        onClick={nextQuote}
                    >Next quote</Button>
                </CardBody>
            </CSSTransition>
        </Card>
    </Container>
);

export default QuoteList;