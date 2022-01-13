import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';
import Navbar from './Navbar';

const CalculatorContainer = () => (
  <>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={(
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          )}
      />

      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);
export default CalculatorContainer;
