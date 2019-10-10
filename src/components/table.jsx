import React, { Component } from 'react';


class Table extends Component {
  state = {
    data: [
      {
        "id": 1,
        "firstName": "hamid",
        "lastName": "mohamadi",
        "contactType": "Friend",
        "birthDate": "2010.10.10",
        "phoneNumber": ["09011019011", "09120658719"],
        "email": ["mohammadi842@gmail.com", "h_mohammadi842@yahoo.com"]
      },
      {
        "id": 2,
        "firstName": "mehdi",
        "lastName": "jalali",
        "contactType": "Friend",
        "birthDate": "1979.10.10",
        "phoneNumber": ["09011019011", "09120658719"],
        "email": ["mjv703@gmail.com", "mjv703@yahoo.com"]
      }
    ]
  }
  render() {
    return (
      <div>
        <table className="table product-overview table-hover ">
          <thead className="tableHeader">
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>ContactType</th>
              <th>BirthDate</th>
              <th>PhoneNumber</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key={i}
              data={person} />)}
          </tbody>
        </table>
      </div>
    );
  }
}
class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.firstName}</td>
        <td>{this.props.data.lastName}</td>
        <td>{this.props.data.contactType}</td>
        <td>{this.props.data.birthDate}</td>
        <td>{this.props.data.phoneNumber}</td>
        <td>{this.props.data.email}</td>
      </tr>
    );
  }
}

export default Table;