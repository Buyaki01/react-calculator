import React from 'react';
import { useDispatch } from 'react-redux';
import { getQuoteFromApi } from '../../redux/quotes/quote';

const Quote = () => {
  const dispatch = useDispatch();
  dispatch(getQuoteFromApi);
  return (
    <div className="quotesSec">
      <div className="quotesHeading">
        <h1>Math Magicians</h1>
      </div>
      <div>
        <h3 className="quotes">
          Mathematics is the art of giving the same name to different things. - Henri Poincare
        </h3>
      </div>
    </div>
  );
};
export default Quote;
