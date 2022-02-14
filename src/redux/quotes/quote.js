import Axios from 'axios';

const GET_QOUTE = 'GET_QOUTE';

const initialState = [];

export const getQuote = (payload) => ({
  type: GET_QOUTE,
  payload,
});

export const getQuoteFromApi = () => async (dispatch) => {
  const quotesFromApi = await Axios.get('https://random-math-quote-api.herokuapp.com/');
  const quotes = quotesFromApi.data;
  const quotesArray = [quotes.author, quotes.quote];
  dispatch(getQuote(quotesArray));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QOUTE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
