import React from "react";
import "./app.css";
import {WithBookStoreService} from "../hoc";

const App = ({bookstoreService}) => {
  console.log(bookstoreService.getBooks());
  return <div>App</div>
};

export default WithBookStoreService()(App);