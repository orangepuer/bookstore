import React from "react";
import BookList from "../book-list";

const HomePage = () => {
  const books = [
    {id: 1, title: 'Ruby on Rails', author: 'DHH'},
    {id: 2, title: 'Ruby', author: 'Matz'}
  ];

  return (
    <BookList books={books} />
  )
};

export default HomePage;