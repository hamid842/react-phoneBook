import React, { Component } from 'react';
import logo from '../images/22.png';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <h3><img src={logo} alt="Logo" height="70px" width="70px" />
                    Phone Book -<small>My first project in react</small></h3>
                <span className="badge badge-secondary m-2">Total : {this.props.totalCount}</span>
            </nav>
        );
    }

}

export default Header;