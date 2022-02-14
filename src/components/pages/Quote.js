import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuoteFromApi } from '../../redux/quotes/quote';

const Quote = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuoteFromApi());
  }, []);
  const dataFromApi = useSelector((state) => state.quoteReducer);
  return (
    <div className="quotesSec">
      <div className="quotesHeading">
        <h1>Math Magicians</h1>
      </div>
      <div>
        <h3 className="quotes">
          {dataFromApi[1]}
          -
          {dataFromApi[0]}
        </h3>
      </div>
    </div>
  );
};
export default Quote;
