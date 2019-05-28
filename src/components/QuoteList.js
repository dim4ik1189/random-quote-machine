import React, { Component } from 'react';
import {Container, Card, CardBody, CardTitle, CardText, Button} from "reactstrap";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import '../App.css';

class QuoteList extends Component {
    state = {
        nextNumber: this.props.i,
        showCard: true,
        backgroundColor: '#1d7899',
        colors: ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"]
    };

    nextQuote = () => {
        const index = Math.floor(Math.random() * this.state.colors.length);
        this.setState(state => ({
            nextNumber: state.nextNumber === 101 ? 0 : ++state.nextNumber,
            backgroundColor: state.colors[index]
        }))

    };

    render() {
        const color = {
            color: this.state.backgroundColor
        };
        return (
            <Container>
                <TransitionGroup>
                {
                    this.props.quoteList.map((val, index) => {
                        if(index === this.state.nextNumber) {
                            return <CSSTransition
                                key={index}
                                classNames="quote"
                                timeout={{ enter: 1000, exit: 1000 }}
                            >
                                <Card key={index} className="p-5">
                                    <CardBody className="d-flex flex-column">
                                        <CardTitle>
                                            <h3 style={color}>{val.quote}</h3>
                                        </CardTitle>
                                        <CardText style={color}>
                                            - {val.author}
                                        </CardText>
                                        <Button
                                            style={{backgroundColor: this.state.backgroundColor}}
                                            className="ml-auto"
                                            onClick={this.nextQuote}
                                        >Next quote</Button>
                                    </CardBody>
                                </Card>
                            </CSSTransition>
                        }
                    })
                }
                </TransitionGroup>
            </Container>
        )
    }
}

export default QuoteList;