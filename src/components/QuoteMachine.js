import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchQuotesAction from '../api/fetchQuotes';
import { Container, Spinner } from 'reactstrap';
import '../App.css';
import QuoteList from './QuoteList';

class QuoteMachine extends Component {
    state = {
        currentQuote: null,
        showCard: true,
        backgroundColor: '#1d7899',
        colors: ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"]
    };

    componentDidMount() {
        this.props.fetchQuotes();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const indexQuote = Math.floor(Math.random() * nextProps.quotes.length);

        if(nextProps.quotes && nextProps.quotes.length) {
            this.setState({
                currentQuote: nextProps.quotes[indexQuote]
            })
        }
    }

    nextQuote = () => {
        const indexColor = Math.floor(Math.random() * this.state.colors.length);
        const indexQuote = Math.floor(Math.random() * this.props.quotes.length);

        this.setState(state => ({
            currentQuote: this.props.quotes[indexQuote],
            backgroundColor: state.colors[indexColor],
            showCard: !state.showCard
        }), () => {
            this.setState(state => ({
                showCard: !state.showCard
            }))
        })

    };

    render() {
        const { error, pending } = this.props;

        if(error) {
            return <div className="quote-box">Error ! {error.message}</div>
        }

        if(pending) {
            return <div className="quote-box">Loading...
                <Spinner color="primary"/>
            </div>
        }

        return (
            <Container className="quote-box">
                {
                    this.state.currentQuote &&
                        <QuoteList
                            color={this.state.backgroundColor}
                            currentQuote={this.state.currentQuote}
                            nextQuote={this.nextQuote}
                            showCard={this.state.showCard}
                        />
                }
                <div className="footer">
                    by <a target="_blank" rel="noopener" href="https://github.com/dim4ik1189">dim4ik</a>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = ({quoteReducer: state}) => ({
    randomIndex: state.randomIndex,
    pending: state.pending,
    quotes: state.quotes,
    error: state.error
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchQuotes: fetchQuotesAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QuoteMachine);