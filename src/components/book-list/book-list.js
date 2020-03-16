import React, {Component} from "react";
import "./book-list.css";
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import {WithBookStoreService} from "../hoc";
import {booksLoaded} from "../../actions";

class BookList extends Component {
  componentDidMount() {
    const {bookstoreService} = this.props;
    const books = bookstoreService.getBooks();

    this.props.booksLoaded(books)
  }

  render() {
    const {books} = this.props;

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return(
              <li key={book.id}><BookListItem book={book} /></li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = ({books}) => {
  return {books}
};

const mapDispatchToProps = {
  booksLoaded
};

export default WithBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));