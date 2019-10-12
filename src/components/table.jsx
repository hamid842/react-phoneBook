import React, { Component } from 'react';


class Table extends Component {
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
          <tbody >
            {this.props.data.map((person, i) => <TableRow key={i}
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