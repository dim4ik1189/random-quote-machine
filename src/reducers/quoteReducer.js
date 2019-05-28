import {
    FETCH_QUOTES_PENDING,
    FETCH_QUOTES_SUCCESS,
    FETCH_QUOTES_ERROR
} from '../actions/actions';

const initialState = {
    randomIndex: '',
    pending: false,
    quotes: [],
    error: null
};

const randomNumber = () => Math.floor(Math.random() * 101);

const quoteReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_QUOTES_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_QUOTES_SUCCESS:
            return {
                ...state,
                quotes: action.quotes,
                randomIndex: randomNumber(),
                pending: false
            };
        case FETCH_QUOTES_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.error
            }
        }
        default:
            return state;
    }
};

export default quoteReducer;