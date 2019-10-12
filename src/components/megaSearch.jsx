import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';


class MegaSearch extends Component {
    state = {}

    megaSearch = () => {

    };

    render() {
        return (
            <div>
                <InputGroup>
                    <InputGroupAddon addonType="prepend" onKeyUp={this.megaSearch}>
                        Search</InputGroupAddon>
                    <Input placeholder="search for ..." />
                </InputGroup>
                <br />
            </div>
        );
    }
}

export default MegaSearch;