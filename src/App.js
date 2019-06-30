import React from 'react';
import { connect } from 'react-redux';
import Header from '../src/components/Header';
import Find from '../src/components/Find';
import './App.css';

const App = () => (
    <div className="App">
      <Header />
      <Find />
    </div>
  );

export default connect()(App);
