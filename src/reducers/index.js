const initialState = {
  books: [
    {id: 1, title: 'Ruby on Rails', author: 'DHH'},
    {id: 2, title: 'Ruby', author: 'Matz'}
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      };
    default:
      return state;
  }
};

export default reducer;