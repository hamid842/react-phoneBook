import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Table from "./components/table";
import MegaSearch from "./components/megaSearch";
import SearchBar from "./components/searchBar";

class App extends Component {
  state = {
    data: [
      {
        id: 1,
        firstName: "hamid",
        lastName: "mohamadi",
        contactType: "Friend",
        birthDate: "2010.10.10",
        phoneNumber: ["09011019011", "09120658719"],
        email: ["mohammadi842@gmail.com", "h_mohammadi842@yahoo.com"]
      },
      {
        id: 2,
        firstName: "mehdi",
        lastName: "jalali",
        contactType: "Friend",
        birthDate: "1979.10.10",
        phoneNumber: ["09011019011", "09120658719"],
        email: ["mjv703@gmail.com", "mjv703@yahoo.com"]
      }
    ]
  };

  handleQuickSearch = () => {
    const inputFName = document.getElementById("inputFname").value;
    const inputLName = document.getElementById("inputLname").value;
    const inputBDate = document.getElementById("inputBdate").value;
    if (inputFName) {
      const firstName = this.state.data.filter(d =>
        d.firstName.includes(inputFName)
      );
      this.setState({ firstName });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header totalCount={this.state.data.length} />
        <main className="container">
          <SearchBar
            data={this.state.data}
            onQuickSearch={this.handleQuickSearch}
          />
          <MegaSearch />
          <Table data={this.state.data} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
