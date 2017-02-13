import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// Reducer
function reducer(state = {}, action) {

  switch (action.type) {
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

export default store;
