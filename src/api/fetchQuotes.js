import {
    fetchQuotesPending,
    fetchQuotesSuccess,
    fetchQuotesError
} from '../actions/actions'

const fetchQuotesAction = () => {
  return dispatch => {
      dispatch(fetchQuotesPending());
      fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
          .then(res => res.json())
          .then(res => {
              console.log('res.quotes', res.quotes);
                dispatch(fetchQuotesSuccess(res.quotes));
                return res.quotes;
          })
          .catch(error => {
              dispatch(fetchQuotesError(error));
          })
  }
};

export default fetchQuotesAction;