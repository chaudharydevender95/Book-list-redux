import React, { Component } from 'react';
import './App.css';

import BookList from '../container/book-list';
import BookDetail from '../container/book_detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
