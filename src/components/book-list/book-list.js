import React, {Component} from "react";
import "./book-list.css";
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import {WithBookStoreService} from "../hoc";
import {fetchBooks} from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({books}) => {
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
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, loading, error} = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator/>
    }

    return <BookList books={books} />
  }
}

const mapStateToProps = ({books, loading, error}) => {
  return {books, loading, error}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {bookstoreService} = ownProps;

  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
};

export default WithBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));