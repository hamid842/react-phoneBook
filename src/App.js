import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Table from "./components/table";
import MegaSearch from "./components/megaSearch";
import SearchBar from "./components/searchBar";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <MegaSearch />
        <Table />
      </div>
    );
  }
}

export default App;
