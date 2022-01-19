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
          <div className="container">
            <div>
              <h1>Math Magicians</h1>
            </div>
            <div className="homePage">
              <div className="homePageTitle">
                <h3>Welcome to our page! </h3>
              </div>
              <div className="homePageBody">
                <p className="paragraphs">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p className="paragraphs">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
        )}
      />

      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);
export default CalculatorContainer;
