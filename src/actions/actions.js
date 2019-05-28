export const FETCH_QUOTES_PENDING = 'FETCH_QUOTES_PENDING';
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS';
export const FETCH_QUOTES_ERROR = 'FETCH_QUOTES_ERROR';

export function fetchQuotesPending() {
    return {
        type: FETCH_QUOTES_PENDING
    }
}

export function fetchQuotesSuccess(quotes) {
    return {
        type: FETCH_QUOTES_SUCCESS,
        quotes: quotes
    }
}

export function fetchQuotesError(error) {
    return {
        type: FETCH_QUOTES_ERROR,
        error: {error}
    }
}

