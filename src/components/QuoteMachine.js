import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchQuotesAction from '../api/fetchQuotes';
import { Container, Spinner } from 'reactstrap';
import '../App.css';
import QuoteList from './QuoteList';

class QuoteMachine extends Component {
    componentDidMount() {
        this.props.fetchQuotes();
    }

    render() {
        const {error, pending, randomIndex, quotes} = this.props;

        const positionCenter = {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10em',
        };
        if(error) {
            return <div style={positionCenter}>Error ! {error.message}</div>
        }

        if(pending) {
            return <div style={positionCenter}>Loading...
                <Spinner color="primary"/>
            </div>
        }

        return (
            <Container id="quote-box">
                <QuoteList quoteList={quotes} i={randomIndex}/>
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